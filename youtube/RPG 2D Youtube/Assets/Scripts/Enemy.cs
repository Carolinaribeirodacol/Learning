using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

[RequireComponent(typeof(Rigidbody2D))]
[RequireComponent(typeof(Animator))]

public class Enemy : MonoBehaviour
{
    [Header("Controller")]
    public Entity entity;
    public GameManager manager;

    [Header("Patrol")]
    public List<Transform> waypointList;
    public float arrivalDistance = 0.5f;
    public float waitTime = 5;
    public int waypointID;
    
    // Privates.
    private Transform targetWaypoint;
    private int currentWaypoint = 0;
    private float lastDistanceToTarget = 0f;
    private float currentWaitTime = 0f;

    [Header("Experience Reward")]
    public int rewardExperience = 10;
    public int lootGoldMin = 0;
    public int lootGoldMax = 10;

    [Header("Respawn")]
    public GameObject prefab;
    public bool respawn = true;
    public float respawnTime = 10f;

    [Header("UI")]
    public Slider healthSlider;

    Rigidbody2D rb2D;
    Animator animator;

    private void Start()
    {
        rb2D = GetComponent<Rigidbody2D>();
        animator = GetComponent<Animator>();
        manager = GameObject.Find("GameManager").GetComponent<GameManager>();

        entity.maxHealth = manager.CalculateHealth(entity);
        entity.maxMana = manager.CalculateMana(entity);
        entity.maxStamina = manager.CalculateStamina(entity);

        entity.currentHealth = entity.maxHealth;
        entity.currentMana = entity.maxMana;
        entity.currentStamina = entity.maxStamina;

        healthSlider.maxValue = entity.maxHealth;
        healthSlider.value = healthSlider.maxValue;
    
        foreach(GameObject obj in GameObject.FindGameObjectsWithTag("Waypoint")) {
            int ID = obj.GetComponent<WaypointID>().ID;
            
            if (ID == waypointID) {
                waypointList.Add(obj.transform);
            }
        }

        currentWaitTime = waitTime;
        
        if (waypointList.Count > 0) {
            targetWaypoint = waypointList[currentWaypoint];
            lastDistanceToTarget = Vector2.Distance(transform.position, targetWaypoint.position);
        }
    }

    private void Update()
    {
        if (entity.isDead)
            return;

        if (entity.currentHealth <= 0) {
            entity.currentHealth = 0;
            Die();
        }

        healthSlider.value = entity.currentHealth;

        if (!entity.inCombat) {
            if (waypointList.Count > 0) {
                Patrol();
            } else {
                animator.SetBool("isWalking", false);
            }
        } else {
            if (entity.attackTimer > 0) {
                entity.attackTimer -= Time.deltaTime;
            }

            if (entity.attackTimer < 0) {
                entity.attackTimer = 0;
            }

            if (entity.target != null && entity.inCombat) {
                // Atacar.
                if (!entity.combatCoroutine) {
                    StartCoroutine(Attack());
                }
            } else {
                entity.combatCoroutine = false;
                StopCoroutine(Attack());        
            }
        }
    }

    private void OnTriggerStay2D(Collider2D collider)
    {
        if (collider.tag == "Player" && !entity.isDead) {
            entity.inCombat = true;
            entity.target = collider.gameObject;
            entity.target.GetComponent<BoxCollider2D>().isTrigger = true;
        }
    }

    private void OnTriggerExit2D(Collider2D collider)
    {
        if (collider.tag == "Player") {
            entity.inCombat = false;
            if (entity.target) {
                entity.target.GetComponent<BoxCollider2D>().isTrigger = false;
                entity.target = null;
            }
        }
    }

    private void Patrol()
    {
       if (entity.isDead) {
        return;
        }

        float distanceToTarget = Vector2.Distance(transform.position, targetWaypoint.position);
        
        if (distanceToTarget <= arrivalDistance || distanceToTarget >= lastDistanceToTarget) {
            animator.SetBool("isWalking", false);

        if (currentWaitTime <= 0) {
            currentWaypoint++;

            if (currentWaypoint >= waypointList.Count) {
            currentWaypoint = 0;
            }

            targetWaypoint = waypointList[currentWaypoint];
            lastDistanceToTarget = Vector2.Distance(transform.position, targetWaypoint.position);
        } else {
            currentWaitTime -= Time.deltaTime;
        }
        } else {
            animator.SetBool("isWalking", true);
            lastDistanceToTarget = distanceToTarget;
        }

        Vector2 direction = (targetWaypoint.position - transform.position).normalized;
        animator.SetFloat("inputX", direction.x);
        animator.SetFloat("inputY", direction.y);

        rb2D.MovePosition(rb2D.position + direction * (entity.speed * Time.fixedDeltaTime));
    }

    IEnumerator Attack()
    {
        entity.combatCoroutine = true;

        while (true) {
            yield return new WaitForSeconds(entity.cooldown);

            if (entity.target != null && !entity.target.GetComponent<Player>().entity.isDead) {
                animator.SetBool("attack", true);

                float distance = Vector2.Distance(entity.target.transform.position, transform.position);

                if (distance <= entity.attackDistance) {
                    int dmg = manager.CalculateDamage(entity, entity.damage);
                    int targetDef = manager.CalculateDefense(entity.target.GetComponent<Player>().entity, entity.target.GetComponent<Player>().entity.defense);
                    int dmgResult = dmg - targetDef;

                    if (dmgResult < 0) {
                        dmgResult = 0;
                    }

                    Debug.Log("Inimigo atacou o player, dano: " + dmgResult);

                    entity.target.GetComponent<Player>().entity.currentHealth -= dmgResult;
                }
            }
        }
    }

    private void Die()
    {
        entity.isDead = true;
        entity.inCombat = false;
        entity.target = null;

        animator.SetBool("isWalking", false); // Trocar para animação de morte depois.

        Player player = GameObject.FindGameObjectWithTag("Player").GetComponent<Player>();
        
        // Função de adicionar EXP ao player.
        player.GainExp(rewardExperience);

        Debug.Log("O inimigo foi eliminado " + entity.name);

        StopAllCoroutines();
        StartCoroutine(Respawn());
    }

    IEnumerator Respawn()
    {
        yield return new WaitForSeconds(respawnTime);

        GameObject newEnemy = Instantiate(prefab, transform.position, transform.rotation, null);
        newEnemy.name = prefab.name;
        newEnemy.GetComponent<Enemy>().entity.isDead = false;
        newEnemy.GetComponent<Enemy>().entity.combatCoroutine = false;

        Destroy(this.gameObject);
    }
}
