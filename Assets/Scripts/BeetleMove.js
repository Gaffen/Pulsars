var speed = 6.0;
var rotateSpeed = 1;
var mouseSensitivity = 5;

function Update () {

	var controller : CharacterController = GetComponent(CharacterController);
	
	// Rotate around Y - Axis
	
	rotationSpeed_x = ((Input.mousePosition.x/Screen.width) - 0.5) * mouseSensitivity;
	rotationSpeed_y = -((Input.mousePosition.y/Screen.height) - 0.5) * mouseSensitivity;
	//rotationSpeed_y = 0;
	//rotationSpeed_x = 0;
	
	transform.Rotate(rotationSpeed_y, rotationSpeed_x, -Input.GetAxis ("Horizontal") * rotateSpeed);
	
	//Move forward / backward
	moveDirection = Vector3(0, 0, Input.GetAxis("Vertical"));
	moveDirection = transform.TransformDirection(moveDirection);
	moveDirection *= speed;
	controller.Move(moveDirection * Time.deltaTime);
	
}

@script RequireComponent(CharacterController);