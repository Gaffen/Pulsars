var speed = 3.0;
var rotateSpeed = 3.0;
var bulletPrefab:Transform;

function Update () {

	var controller : CharacterController = GetComponent(CharacterController);
	
	// Rotate around Y - Axis
	
	transform.Rotate(-Input.GetAxis ("Mouse Y") * rotateSpeed, Input.GetAxis ("Horizontal") * rotateSpeed, -Input.GetAxis ("Mouse X") * rotateSpeed);
	

	//Move forward / backward
	var forward = transform.TransformDirection(Vector3.forward);
	var curSpeed = speed * Input.GetAxis ("Vertical");
	controller.SimpleMove(forward * curSpeed);
	
}

@script RequireComponent(CharacterController);