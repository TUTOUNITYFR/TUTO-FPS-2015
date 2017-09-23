#pragma strict

var Primary : Transform;
var Secondary : Transform;

function Update () {

	if(Input.GetKeyDown(KeyCode.Alpha1)){
		Primary.gameObject.SetActive(true);
		Secondary.gameObject.SetActive(false);
	}

	if(Input.GetKeyDown(KeyCode.Alpha2)){
		Primary.gameObject.SetActive(false);
		Secondary.gameObject.SetActive(true);
	}

}