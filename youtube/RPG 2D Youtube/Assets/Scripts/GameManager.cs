using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameManager : MonoBehaviour
{
    public Int32 CalculateHealth(Entity entity)
    {
        // Fórmula: (resistence * 10) * (level * 4) + 10;
        Int32 result = (entity.resistance * 10) * (entity.level * 4) + 10;

        Debug.LogFormat("CalculateHealth: {0}", result);

        return result;
    }

    public Int32 CalculateMana(Entity entity)
    {
        // Fórmula: (intteligence * 10) * (level * 4) + 5;
        Int32 result = (entity.intelligence * 10) * (entity.level * 4) + 5;

        Debug.LogFormat("CalculateMana: {0}", result);

        return result;
    }

    public Int32 CalculateStamina(Entity entity)
    {
        Int32 result = (entity.resistance + entity.willpower) * (entity.level * 2) + 5;

        Debug.LogFormat("CalculateStamina: {0}", result);

        return result;
    }

    public Int32 CalculateDamage(Entity entity, int weaponDamage)
    {
        // Fórmula: (str * 2) + (weapon dmg * 2) + (level * 3) + randoom (1-20);
        System.Random ran = new System.Random();
        Int32 result = (entity.strength * 2) + (weaponDamage * 2) + (entity.level * 3) + (ran.Next(1,20));

        Debug.LogFormat("CalculateDamage: {0}", result);

        return result;
    }

    public Int32 CalculateDefense(Entity entity, int armorDefense)
    {
        // Fórmula: (endurance * 2) + (level * 3) + armorDefense;
        Int32 result = (entity.endurance * 2) + (entity.level * 3) + armorDefense;

        Debug.LogFormat("CalculateDefense: {0}", result);

        return result;
    }
}
