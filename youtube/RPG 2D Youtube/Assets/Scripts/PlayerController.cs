using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(Rigidbody2D))]
[RequireComponent(typeof(Player))]
public class PlayerController : MonoBehaviour
{
    public Player player;
    public Animator playerAnimator;
    float inputX = 0;
    float inputY = 0;
    bool isWalking = false;

    Rigidbody2D rb2D;
    Vector2 movement = Vector2.zero;

    [Header("Interact")]
    public KeyCode interactKey = KeyCode.E;
    bool canTeleport = false;
    Region tmpRegion;

    // Start is called before the first frame update
    void Start()
    {
        isWalking = false;
        rb2D = GetComponent<Rigidbody2D>();
        player = GetComponent<Player>();
    }

    // Update is called once per frame
    void Update()
    {
        inputX = Input.GetAxisRaw("Horizontal");
        inputY = Input.GetAxisRaw("Vertical");
        isWalking = (inputX != 0 || inputY != 0);
        movement = new Vector2(inputX, inputY);

        if (isWalking)
        {
            playerAnimator.SetFloat("inputX", inputX);
            playerAnimator.SetFloat("inputY", inputY);
        }

        playerAnimator.SetBool("isWalking", isWalking);

        if (player.entity.attackTimer < 0)
            player.entity.attackTimer = 0;
        else
            player.entity.attackTimer -= Time.deltaTime;

        if (player.entity.attackTimer == 0 && !isWalking)
        {
            if (Input.GetButtonDown("Fire1"))
            {
                playerAnimator.SetTrigger("attack");
                player.entity.attackTimer = player.entity.cooldown;

                Attack();
            }
        }

        if (canTeleport && tmpRegion != null && Input.GetKeyDown(interactKey)) {
            this.transform.position = tmpRegion.warpLocation.position;
        }
    }

    private void FixedUpdate()
    {
        rb2D.MovePosition(rb2D.position + movement * player.entity.speed * Time.fixedDeltaTime);
    }

    private void OnTriggerEnter2D(Collider2D collider)
    {
        if (collider.tag == "Enemy") {
            player.entity.target = collider.transform.gameObject;
        }

        if (collider.tag == "Teleport") {
            tmpRegion = collider.GetComponent<Teleport>().region;
            canTeleport = true;
        }
    }

    void OnTriggerExit2D(Collider2D collider)
    {
        if (collider.transform.tag == "Enemy") {
            player.entity.target = null;
        }

        if (collider.tag == "Teleport") {
            tmpRegion = null;
            canTeleport = false;
        }
    }

    void Attack()
    {
        if (player.entity.target == null)
            return;
        
        Enemy enemy = player.entity.target.GetComponent<Enemy>();

        if (enemy.entity.isDead) {
            player.entity.target = null;
            
            return;
        }

        float distance = Vector2.Distance(transform.position, player.entity.target.transform.position);

        if (distance <= player.entity.attackDistance) {
            int dmg = player.manager.CalculateDamage(player.entity, player.entity.damage);
            int enemyDef = player.manager.CalculateDefense(enemy.entity, enemy.entity.defense);
            int result = dmg - enemyDef;

            if (result < 0)
                result = 0;
            
            enemy.entity.currentHealth -= result;

            enemy.entity.target = this.gameObject;
        }
    }
}
