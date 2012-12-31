var target : Transform;
var minDistance = 5;
var elevation = 3;
var rotOffset = 30;
var cameraSway = 10;

function Update () {

	
	//var cameraFocus = target.localPosition;
	//cameraFocus.y += rotOffset;
	var relativePos = target.position - transform.position;
    var rotation = Quaternion.LookRotation(relativePos, target.up);
    transform.rotation = rotation;
    yaw = Input.GetAxis ("Horizontal") * 10;
    transform.Rotate(Vector3(-rotOffset,0,yaw));
	cameraOffset_x = ((Input.mousePosition.x/Screen.width) - 0.5) * cameraSway;
	cameraOffset_y = ((Input.mousePosition.y/Screen.height) - 0.5) * cameraSway;
	transform.position = target.TransformPoint(Vector3(cameraOffset_x,elevation + cameraOffset_y,-minDistance));

	Debug.Log(target.position);
	
	
	
}