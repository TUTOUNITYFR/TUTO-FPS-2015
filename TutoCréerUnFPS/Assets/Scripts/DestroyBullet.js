#pragma strict

var timer : int = 3;

public var sparks : Transform;
public var impactBullet : Transform;

function Start () {
	yield WaitForSeconds(timer);
	Destroy (gameObject);
}

function OnCollisionEnter(collision : Collision){
	var contact: ContactPoint = collision.contacts[0];
	var rot: Quaternion = Quaternion.FromToRotation(Vector3.up, contact.normal);
	var pos: Vector3 = contact.point;
	Instantiate(sparks, pos, rot);
	Instantiate(impactBullet, pos, rot);
	Destroy(gameObject);
}