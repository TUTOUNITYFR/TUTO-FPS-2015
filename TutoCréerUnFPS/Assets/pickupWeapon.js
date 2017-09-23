#pragma strict

import System.Collections.Generic;

var weaponName : String;
public var isPrimary : boolean;

// arme qu'on souhaite activer
var TheWeapon :Transform;

private var swapweapons : SwapWeapons;
private var showGUI : boolean = false;

public var weaponList : List.<Transform>;

function Awake(){
	TheWeapon = GameObject.Find(weaponName).transform;
}

function Start () {
	swapweapons = GameObject.FindGameObjectWithTag("Player").GetComponent(SwapWeapons);
}

function Update () {
   if(showGUI == true){

      if(Input.GetKeyDown("e")){

		  if(isPrimary){
				// Pour chaque arme il faut copier / coller la condition suivante et remplacer
				// WeaponList[X] par le numéro de l'arme dans la liste
				if(swapweapons.Primary.transform.name == "M4A1"){
					Instantiate(weaponList[0], transform.position,  transform.rotation);
				}

				if(swapweapons.Primary.transform.name == "AK47"){
					Instantiate(weaponList[1], transform.position,  transform.rotation);
				}

				swapweapons.Primary.gameObject.SetActive(false);
				swapweapons.Primary = TheWeapon;
				TheWeapon.gameObject.SetActive(true);
				Destroy(gameObject);
			}else{
				// Pour chaque arme il faut copier / coller la condition suivante et remplacer
				// WeaponList[X] par le numéro de l'arme dans la liste
				if(swapweapons.Primary.transform.name == "Secondary"){
					Instantiate(weaponList[2], transform.position,  transform.rotation);
				}

				if(swapweapons.Primary.transform.name == "Secondary2"){
					Instantiate(weaponList[3], transform.position,  transform.rotation);
				}

				swapweapons.Secondary.gameObject.SetActive(false);
				swapweapons.Secondary = TheWeapon;
				TheWeapon.gameObject.SetActive(true);
				Destroy(gameObject);
			}
      }

   }

}

function OnTriggerEnter(hit : Collider){
	if(hit.gameObject.tag == "Player"){
	  showGUI = true;
	}
}

function OnTriggerExit(hit : Collider){
	if(hit.gameObject.tag == "Player"){
	  showGUI = false;
	}
}

function OnGUI(){
	if(showGUI == true){
		GUI.Box(Rect(Screen.width/2-100,Screen.height/2-12.5,200,25), "Press E to pickup weapon");
	}
}