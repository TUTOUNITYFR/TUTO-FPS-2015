#pragma strict

var spawners : Transform[]; //liste de nos spawners
private var currentZombies : GameObject[]; //list des ennemis actuellement présent dans la scene

var zombie : Transform; // prefab de notre ennemi

private var leftAmount : int; // le montant d'ennemis qu'il reste a fiare apparaitre
private var lastRoundAmount : int; // montant d'ennemis au dernier round
var startAmount : int; // le nombre de zombies au depart = 1ere manche

var currentRound : int; // manche actuelle

var multiplicateur : float; // nombre par lequel les ennemis de la denrière manche sont multipliés

var delay : float;

function Start () {
	InvokeRepeating("Spawning", 0 , delay);
}

function Update () {
	currentZombies = GameObject.FindGameObjectsWithTag("zombie");

	if(currentRound == 0){
		lastRoundAmount = startAmount;
		leftAmount = startAmount;
		currentRound++;
	}
}

function Spawning(){

	if(leftAmount > 0){
		var randomNumber : int = Random.Range(0,spawners.Length);

		var randomTransform = spawners[randomNumber];

		Instantiate(zombie, randomTransform.transform.position, Quaternion.identity);

		leftAmount -= 1;
	}

	if(currentZombies.Length == 0){
		if(currentRound != 0 && leftAmount == 0){
			leftAmount = lastRoundAmount * multiplicateur;
			lastRoundAmount = leftAmount;
			currentRound++;
		}
	}
}