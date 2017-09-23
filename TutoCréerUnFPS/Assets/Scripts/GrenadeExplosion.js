#pragma strict

var timer : int = 3;
var ExplosionZone : GameObject;

function Start () {
yield WaitForSeconds(timer);
Appear();
}

function Appear () {
Instantiate (ExplosionZone, transform.position, transform.rotation);
Destroy (gameObject);
}