#pragma strict

var NormalPos : Vector3;
var AimPos : Vector3;

var reticle : GameObject;
var weaponEject : ShotEject;

function Start () {
	transform.localPosition = NormalPos;
}

function Update () {

	if(Input.GetButton("Fire2") && weaponEject.isReloading == false){
		gameObject.GetComponent(Animator).enabled = false;
		transform.localPosition = AimPos;
		reticle.SetActive(false);
	}else{
		gameObject.GetComponent(Animator).enabled = true;
		transform.localPosition = NormalPos;
		reticle.SetActive(true);
	}

}
