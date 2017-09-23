#pragma strict

///////////////////////////////////////////////////////////////////VARIABLES///////////////////////////////////////////////////////////////////////

	var bulletCasing : Rigidbody;
	var ejectSpeed : int = 100;
	var fireRate : float = 0.5;
	private var nextFire : float = 0.0;
	private var fullAuto = false;

	var clip : int = 30;
	var maxclip : int = 30;
	var reserve : int = 300;
	var minreserve : int = 0;

	var shotsound : AudioClip;
	var reloadsound : AudioClip;

	var MunMax : boolean = true;

	var automatic : boolean = true;

	var fireshot : GameObject;

	// nouvelles variables
	var weaponTransform : GameObject;
	var isReloading : boolean = false;
	var delayReload : float = 1f;

///////////////////////////////////////////////////////////////////FONCTION UPDATE////////////////////////////////////////////////////////////////

function Update () {

	if(Input.GetButton("Fire1") && Time.time > nextFire && isReloading == false){
		if(clip >= 1){
			nextFire = Time.time + fireRate;

			var bullet : Rigidbody;

			bullet = Instantiate(bulletCasing, transform.position, transform.rotation);
			clip -= 1;
			GetComponent.<AudioSource>().PlayOneShot(shotsound);
			bullet.velocity = transform.TransformDirection(Vector3.left * ejectSpeed);
			Instantiate(fireshot, transform.position, transform.rotation);
			weaponTransform.GetComponent(Animator).Play("shotm4", -1, 0f);
		}
	}

	if(automatic == true){
		if(Input.GetKeyDown("v")){
			fullAuto = !fullAuto;
		}
	}

	if(Input.GetKeyDown("r") && isReloading == false && reserve >= 1 && clip != maxclip){
		Reload();
	}

	if(reserve >= 1 && clip == 0 && isReloading == false){
		Reload();
	}

	if(fullAuto == true){
		fireRate = 0.10;
	}else{
		fireRate = 0.5;
	}

	if(reserve <= 0){
		reserve = 0;
	}

	if(automatic == false){
		fireRate = 0.7;
	}

}

	function Reload(){
		isReloading = true;
		weaponTransform.GetComponent(Animator).Play("reloadm4", -1, 0f);
		gameObject.GetComponent(AudioSource).PlayOneShot(reloadsound);
		yield WaitForSeconds(delayReload);
		isReloading = false;

		if(reserve >= 30){
			RemoveReserve();
			clip += maxclip - clip;
		}else{
			clip += reserve;
			RemoveReserve();
		}
	}

///////////////////////////////////////////////////////////////////FUNCTION ON GUI///////////////////////////////////////////////////////////////////////

	function OnGUI(){
		GUI.Box(Rect(10,10,130,25), clip+ " / " +reserve);
	}

///////////////////////////////////////////////////////////////////FUNCTION REMOVE RESERVE///////////////////////////////////////////////////////////////

	function RemoveReserve(){
		reserve -= maxclip - clip;
	}
