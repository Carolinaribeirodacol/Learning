using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Player : MonoBehaviour
{
    public Entity entity;

    [Header("Player Regen System")]
    public bool regenHPEnabled = true;
    public float regenHPTime = 5f;
    public int regenHPValue = 5;
    public bool regenMPEnabled = true;
    public float regenMPTime = 10f;
    public int regenMPValue = 5;

    [Header("Game Manager")]
    public GameManager manager;

    [Header("Player Shortcuts")]
    public KeyCode attributesKey = KeyCode.C;

    [Header("Player UI Panels")]
    public GameObject attributesPanel;

    [Header("Player UI")]
    public Slider health;
    public Slider mana;
    public Slider stamina;
    public Slider exp;
    public Text expText;
    public Text levelText;
    public Text strengthTxt;
    public Text resistanceTxt;
    public Text intelligenceTxt;
    public Text willPowerTxt;
    public Button strengthIncreaseBtn;
    public Button resistanceIncreaseBtn;
    public Button intelligenceIncreaseBtn;
    public Button willPowerIncreaseBtn;
    public Button strengthDecreaseBtn;
    public Button resistanceDecreaseBtn;
    public Button intelligenceDecreaseBtn;
    public Button willPowerDecreaseBtn;
    public Text pointsTxt;

    [Header("Exp")]
    public int currentExp;
    public int expBase;
    public int expLeft;
    public float expMod;
    public GameObject levelUpEffect;
    public AudioClip levelUpSound;
    public int givePoints = 5;

    [Header("Respawn")]
    public float respawnTime = 5;
    public GameObject prefab;


    void Start()
    {
        if (manager == null)
        {
            Debug.LogError("Você precisa anexar o game manager aqui no player.");

            return;
        }

        entity.maxHealth = manager.CalculateHealth(entity);
        entity.maxMana = manager.CalculateMana(entity);
        entity.maxStamina = manager.CalculateStamina(entity);

        entity.currentHealth = entity.maxHealth;
        entity.currentMana = entity.maxMana;
        entity.currentStamina = entity.maxStamina;

        health.maxValue = entity.maxStamina;
        health.value = health.maxValue;

        mana.maxValue = entity.maxMana;
        mana.value = mana.maxValue;

        stamina.maxValue = entity.maxStamina;
        stamina.value = stamina.maxValue;

        exp.value = currentExp;
        exp.maxValue = expLeft;

        expText.text = string.Format("Exp: {0}/{1}", currentExp, expLeft);
        levelText.text = entity.level.ToString();

        // Iniciar o regen de Health
        StartCoroutine(RegenHealth());

        // Iniciar o regen de Mana
        StartCoroutine(RegenMana());

        UpdatePoints();
        SetupUIButtons();
    }

    private void Update()
    {
        if (entity.isDead)
            return;

        if (entity.currentHealth <= 0)
        {
            Die();
        }

        if (Input.GetKeyDown(attributesKey)) {
            attributesPanel.SetActive(!attributesPanel.activeSelf);
        }

        health.value = entity.currentHealth;
        mana.value = entity.currentMana;
        stamina.value = entity.currentStamina;

        exp.value = currentExp;
        exp.maxValue = expLeft;
        expText.text = string.Format("Exp: {0}/{1}", currentExp, expLeft);
        levelText.text = entity.level.ToString();
    }

    IEnumerator RegenHealth()
    {
        while (true)
        {
            if (regenHPEnabled)
            {
                if (entity.currentHealth < entity.maxHealth)
                {
                    Debug.LogFormat("Recuperando o HP do jogador");
                    entity.currentHealth += regenHPValue;
                    yield return new WaitForSeconds(regenHPTime);
                }
                else
                {
                    yield return null;
                }
            }
            else
            {
                yield return null;
            }
        }
    }

    IEnumerator RegenMana()
    {
        while (true)
        {
            if (regenMPEnabled)
            {
                if (entity.currentMana < entity.maxMana)
                {
                    Debug.LogFormat("Recuperando a MP do jogador");
                    entity.currentMana += regenMPValue;
                    yield return new WaitForSeconds(regenMPTime);
                }
                else
                {
                    yield return null;
                }
            }
            else
            {
                yield return null;
            }
        }
    }

    void Die()
    {
        entity.currentHealth = 0;
        entity.isDead = true;
        entity.target = null;
        StopAllCoroutines();
        StartCoroutine(Respawn());
    }

    IEnumerator Respawn()
    {
        GetComponent<PlayerController>().enabled = false;
        yield return new WaitForSeconds(respawnTime);

        GameObject newPlayer = Instantiate(prefab, transform.position, transform.rotation, null);
        newPlayer.name = prefab.name;
        newPlayer.GetComponent<Player>().entity.isDead = false;
        newPlayer.GetComponent<Player>().entity.combatCoroutine = false;
        newPlayer.GetComponent<Player>().enabled = true;

        Destroy(this.gameObject);
    }

    public void GainExp(int amount)
    {
        currentExp += amount;

        if (currentExp >= expLeft) {
            LevelUp();
        }
    }

    public void LevelUp()
    {
        currentExp += expLeft;
        entity.level++;
        entity.points += givePoints;

        UpdatePoints();

        entity.currentHealth = entity.maxHealth;

        float newExp = Mathf.Pow((float)expMod, entity.level);
        expLeft = (int)Mathf.Floor((float)expBase * newExp);

        entity.entityAudio.PlayOneShot(levelUpSound);
        Instantiate(levelUpEffect, this.gameObject.transform);
    }

    public void UpdatePoints()
    {
        strengthTxt.text = entity.strength.ToString();
        resistanceTxt.text = entity.resistance.ToString();
        intelligenceTxt.text = entity.intelligence.ToString();
        willPowerTxt.text = entity.willpower.ToString();
        pointsTxt.text = entity.points.ToString();
    }

    public void SetupUIButtons()
    {
        strengthIncreaseBtn.onClick.AddListener(() => IncreasePoint(1));
        resistanceIncreaseBtn.onClick.AddListener(() => IncreasePoint(2));
        intelligenceIncreaseBtn.onClick.AddListener(() => IncreasePoint(3));
        willPowerIncreaseBtn.onClick.AddListener(() => IncreasePoint(4));

        strengthDecreaseBtn.onClick.AddListener(() => DecreasePoint(1));
        resistanceDecreaseBtn.onClick.AddListener(() => DecreasePoint(2));
        intelligenceDecreaseBtn.onClick.AddListener(() => DecreasePoint(3));
        willPowerDecreaseBtn.onClick.AddListener(() => DecreasePoint(4));
    }

    public void IncreasePoint(int index)
    {
        if (entity.points > 0) {
            if (index == 1) {
                entity.strength++;
            } else if (index == 2) {
                entity.resistance++;
            } else if (index == 3) {
                entity.intelligence++;
            } else if (index == 4) {
                entity.willpower++;
            }

            entity.points--;
        }

        UpdatePoints();
    }

    public void DecreasePoint(int index)
    {
        if (index == 1 && entity.strength > 0) {
            entity.strength--;
        } else if (index == 2 && entity.resistance > 0) {
            entity.resistance--;
        } else if (index == 3 && entity.intelligence > 0) {
            entity.intelligence--;
        } else if (index == 4 && entity.willpower > 0) {
            entity.willpower--;
        } else {
            return;
        }

        entity.points++;
        UpdatePoints();
    }
}
