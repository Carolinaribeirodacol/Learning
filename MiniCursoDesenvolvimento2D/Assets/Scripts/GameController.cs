using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameController : MonoBehaviour
{
    public Transform playerTransform;
    public Transform maxCamLeft;
    public Transform maxCamRigth;
    public Transform maxCamUp;
    public Transform maxCamDown;
    public float speedCam;

    private Camera cam;

    // Start is called before the first frame update
    void Start()
    {
        cam = Camera.main;
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    void LateUpdate() 
    {
        float posCamX = playerTransform.position.x;
        float posCamY = playerTransform.position.y;

        if (cam.transform.position.x < maxCamLeft.position.x &&
            playerTransform.position.x < maxCamLeft.position.x
        ) {
            posCamX = maxCamLeft.position.x;
        } else if (cam.transform.position.x > maxCamRigth.position.x &&
            playerTransform.position.x > maxCamRigth.position.x
        ) {
            posCamX = maxCamRigth.position.x;
        }

        if (cam.transform.position.y < maxCamDown.position.y &&
            playerTransform.position.y < maxCamDown.position.y
        ) {
            posCamY = maxCamDown.position.y;
        } else if (cam.transform.position.y > maxCamUp.position.y &&
            playerTransform.position.y > maxCamUp.position.y
        ) {
            posCamY = maxCamUp.position.y;
        }

        Vector3 posCam = new Vector3(posCamX, posCamY, cam.transform.position.z);

        cam.transform.position = Vector3.Lerp(cam.transform.position, posCam, speedCam * Time.deltaTime);
    }
}
