using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    private Rigidbody2D playerRB;
    private Animator playerAnimator;
    private bool isGrounded;
    private GameController gameController;

    public float speed;
    public float jumpForce;
    public bool isLookLeft;
    public Transform groundCheck;
    public bool isAttack;
    public GameObject hitBoxPrefab;
    public Transform hand;

    // Start is called before the first frame update
    void Start()
    {
        playerRB = GetComponent<Rigidbody2D>();
        playerAnimator = GetComponent<Animator>();

        gameController = FindObjectOfType(typeof(GameController)) as GameController;
        gameController.playerTransform = this.transform;
    }

    // Update is called once per frame
    void Update()
    {
        float horizontal = Input.GetAxisRaw("Horizontal");

        if (isAttack == true && isGrounded == true) {
            horizontal = 0;
        }

        if (horizontal > 0 && isLookLeft) {
            Flip();
        } else if (horizontal < 0 && !isLookLeft) {
            Flip();
        }

        float speedY = playerRB.velocity.y;

        if (Input.GetButtonDown("Jump") && isGrounded == true) {
            playerRB.AddForce(new Vector2(0, jumpForce));
        }

        if (Input.GetButtonDown("Fire1") && isAttack == false) {
            isAttack = true;
            playerAnimator.SetTrigger("attack");
        }

        playerRB.velocity = new Vector2(horizontal * speed, speedY);

        playerAnimator.SetInteger("horizontal", (int)horizontal);
        playerAnimator.SetBool("isGrounded", isGrounded);
        playerAnimator.SetFloat("speedY", speedY);
        playerAnimator.SetBool("isAttack", isAttack);
    }

    void FixedUpdate() // Função da Unity.
    {
        isGrounded = Physics2D.OverlapCircle(groundCheck.position, 0.02f);
    }

    void Flip()
    {
        isLookLeft = !isLookLeft;

        float x = transform.localScale.x * -1; // Inverte o sinal do X.
        transform.localScale = new Vector3(x, transform.localScale.y, transform.localScale.z);
    }

    void OnEndAttack()
    {
        isAttack = false;
    }

    void HitBoxAttack()
    {
        GameObject hitBoxTemp = Instantiate(hitBoxPrefab, hand.position, transform.localRotation);
        Destroy(hitBoxTemp, 0.2f);
    }
}
