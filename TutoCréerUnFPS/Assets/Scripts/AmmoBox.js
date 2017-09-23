#pragma strict

var ammo : int = 30;
var eject : GameObject;

private var shoteject : ShotEject;
private var showGUI : boolean = false;

function Update () {
   if(showGUI == true){
      if(Input.GetKeyDown("e")){
      shoteject.reserve += ammo;
      Destroy (gameObject);
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
		GUI.Box(Rect(Screen.width/2-100,Screen.height/2-12.5,200,25), "Press E to pickup ammo");
	}
}