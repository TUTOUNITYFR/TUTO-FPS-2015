#pragma strict
import UnityEngine.UI;

public var healthBar : Image;

var timebeforehealth : float = 0;

var grenades : int = 50;
var healthbase : float = 100;
var healthmax : float = 100;

var bloodUI : GameObject;

InvokeRepeating("reduceTimer", 0, 1);

function Start(){
	healthbase = healthmax;
}

function ApplyDammage (TheDammage : int){
    healthbase -= TheDammage;
    timebeforehealth += 5;
    
    if(healthbase <= 0){
     Dead();
    }
}

function Dead (){
	Debug.Log("Player died");
}

function Update(){

	healthBar.fillAmount = healthbase / healthmax;

	if(healthbase >= 1 && healthbase < 30){
	bloodUI.GetComponent(CanvasGroup).alpha = 1;
	}

	if(healthbase >= 30 && healthbase < 60){
	bloodUI.GetComponent(CanvasGroup).alpha = 0.6;
	}

	if(healthbase >= 60 && healthbase < 80){
	bloodUI.GetComponent(CanvasGroup).alpha = 0.3;
	}

	if(healthbase >= 80 && healthbase <= 100){
	bloodUI.GetComponent(CanvasGroup).alpha = 0;
	}

	if(healthbase > 100){
	healthbase = 100;
	}

	if(timebeforehealth >= 5){
		timebeforehealth = 5;
	}

	if(timebeforehealth <= 0){
		timebeforehealth = 0;
	}

}

function reduceTimer(){
	if(timebeforehealth == 0){
	  healthbase += 20;
	 }
	 timebeforehealth -= 1;
}