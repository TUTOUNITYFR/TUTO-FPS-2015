#pragma strict

public var timer : float;
public var dammageGrenade : int;
public var arround : Collider[];
public var explosionRange : float;
public var visualEffect : GameObject;

function Start () {
	GetComponent.<AudioSource>().Play();

	arround = Physics.OverlapSphere(transform.position, explosionRange);

	for(var obj : Collider in arround){
		if(obj.transform.tag == "zombie" || obj.transform.tag == "Ennemi"){
			obj.gameObject.GetComponent(ZombieHealth).ZombieHealth -= dammageGrenade;
		}
	}

	Instantiate(visualEffect, transform.position, transform.rotation);

	Destroy (gameObject, timer);
}