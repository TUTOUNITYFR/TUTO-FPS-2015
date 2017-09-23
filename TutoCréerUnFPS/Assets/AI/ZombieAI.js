#pragma strict

var Distance : float;
var Target : Transform;
var chaseRange : float = 10;
var attackRange : float = 2.2;
var Damping : float = 6;
var attackRepeatTime : float = 1;

var TheDammage : float = 10;

private var attackTime : float;

var controller : CharacterController;

var agent : UnityEngine.AI.NavMeshAgent;

function Start () {
	agent = gameObject.GetComponent(UnityEngine.AI.NavMeshAgent);
	attackTime = Time.time;
	FindHealth();
}

function Update () {

	Distance = Vector3.Distance(Target.position, transform.position);
    
    if(Distance < attackRange){
      attack();
    }
    
    else if(Distance < chaseRange){
      chase();
    }

}

function chase (){
 	GetComponent.<Animator>().Play("walk");
	agent.destination = Target.position;
}

function attack(){

  if(Time.time > attackTime){
   GetComponent.<Animator>().Play("attack");
   Target.SendMessage("ApplyDammage", TheDammage);
   Debug.Log("The enemy has attacked");
   attackTime = Time.time + attackRepeatTime;
  }
  
}

function FindHealth(){
   Target = GameObject.Find("PlayerStats").GetComponent(PlayerStats).transform;
}