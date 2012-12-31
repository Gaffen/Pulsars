var target : Transform;
var distance = 10.0;
 
var xSpeed = 250.0;
var ySpeed = 120.0;
 
var yMinLimit = -20;
var yMaxLimit = 80;
 
var distanceMin = 3;
var distanceMax = 15;
 
private var x = 0.0;
private var y = 0.0;
 
 
@script AddComponentMenu("Camera-Control/Mouse Orbit")
 
function Start () {
    var angles = transform.eulerAngles;
    x = angles.y;
    y = angles.x;
    z = angles.z;
 
	// Make the rigid body not change rotation
//   	if (rigidbody)
//		rigidbody.freezeRotation = false;
}
 
function LateUpdate () {
    if (target) {
        //x = target.eulerAngles.x;//+= Input.GetAxis("Mouse X") * xSpeed * distance* 0.02;
        //y = -target.eulerAngles.y;//-= Input.GetAxis("Mouse Y") * ySpeed * 0.02;
        z = target.eulerAngles.z;
 
 		//x = ClampAngle(x, yMinLimit, yMaxLimit);
 
		var rotation = Quaternion.Euler(0, 0, z);
 
		distance = Mathf.Clamp(distance - Input.GetAxis("Mouse ScrollWheel")*5, distanceMin, distanceMax);
 
		var hit : RaycastHit;
		if (Physics.Linecast (target.position, transform.position, hit)) {
				distance -=  hit.distance;
		}
 
        var position = rotation * Vector3(0.0, 0.0, -distance) + target.position;
 
 		//Debug.Log(rotation);
        transform.rotation = rotation;
        transform.position = position;
 
	}
 
}
 
 
static function ClampAngle (angle : float, min : float, max : float) {
	if (angle < -360)
		angle += 360;
	if (angle > 360)
		angle -= 360;
	return Mathf.Clamp (angle, min, max);
}