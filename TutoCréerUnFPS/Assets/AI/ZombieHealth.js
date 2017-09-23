#pragma strict

var ZombieHealth : int = 100;
var hitmarker : GameObject;

	function Start(){
		hitmarker = GameObject.Find("Hitmarker");
	}

	function OnCollisionEnter (col : Collision){
	   if(col.gameObject.tag == "Bullet"){
	   		ZombieHealth -= 25;
	   		displayHitmarker();
	   }
	}

	function Update () {
	   if(ZombieHealth <= 0){
	     GetComponent.<Animator>().Play("back_fall");
	     gameObject.GetComponent(ZombieAI).enabled = false;
	     gameObject.GetComponent(CharacterController).enabled = false;
	     gameObject.GetComponent(BoxCollider).enabled = false;
	     Dead();
	   }
	}

	function Dead(){
		gameObject.GetComponent(UnityEngine.AI.NavMeshAgent).enabled = false;
	   yield WaitForSeconds(5);
	   Destroy (gameObject);
	}

	function displayHitmarker(){
		hitmarker.GetComponent(Image).enabled = true;
		hitmarker.GetComponent(AudioSource).Play();
		yield WaitForSeconds(0.1f);
		hitmarker.GetComponent(Image).enabled = false;
	}