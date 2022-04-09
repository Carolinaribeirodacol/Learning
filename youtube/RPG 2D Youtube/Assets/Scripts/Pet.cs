using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(Animator))]
public class Pet : MonoBehaviour
{
    public GameObject player;
    public Animator petAnimator;

    public float speed = 1;
    public float keepDistance = 0.3f;

    bool isWalking;

    float inputX;
    float inputY;
    float lastDirectionX;
    float lastDirectionY;

    Vector2 petPosition;
    Vector2 playerPosition;

    private void Start()
    {
        petAnimator = GetComponent<Animator>();
        player = GameObject.FindGameObjectWithTag("Player");
        petPosition = transform.position;

        playerPosition = SetDirection(1, 1, player.transform.position);
        transform.position = Vector2.MoveTowards(petPosition, playerPosition, speed * Time.deltaTime);
    }

    private void Update()
    {
        inputX = Input.GetAxisRaw("Horizontal");
        inputY = Input.GetAxisRaw("Vertical");
        isWalking = (inputX != 0 || inputY != 0);

        if (isWalking)
        {
            petAnimator.SetFloat("inputX", inputX);
            petAnimator.SetFloat("inputY", inputY);
        }

        if (inputX > 0 || inputX < 0) {
            lastDirectionX = inputX;
        } else if (inputY > 0 || inputY < 0) {
            lastDirectionY = inputY;
        }

        petAnimator.SetBool("isWalking", isWalking);

        petPosition = transform.position;
        playerPosition = SetDirection(lastDirectionX, lastDirectionY, player.transform.position);

        transform.position = Vector2.MoveTowards(petPosition, playerPosition, speed * Time.deltaTime);
    }

    Vector2 SetDirection(float inputX, float inputY, Vector2 playerPosition)
    {
        if (inputX < 0) { // Tecla A do teclado pressionada. Andando para a esquerda.
            playerPosition.x += keepDistance; // O pet fica na posição à esquerda do player.
        } else if (inputX > 0) { // Tecla A do teclado pressionada. Andando para a direita.
            playerPosition.x -= keepDistance; // O pet fica na posição à direita do player.
        }

        if (inputY < 0) {
            playerPosition.y += keepDistance;
        } else if (inputY > 0) {
            playerPosition.y -= keepDistance;
        }

        return playerPosition;
    }
}
