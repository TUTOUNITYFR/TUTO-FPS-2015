#pragma strict

private var playerstats : PlayerStats;

var grenadeCasing : Rigidbody;
var ejectSpeed : int = 15;

function Start () {
playerstats = GameObject.Find("PlayerStats").GetComponent(PlayerStats);
}

function Update () {

if(playerstats.grenades >=1){

if(Input.GetKeyDown("g")){
var grenade : Rigidbody;
grenade = Instantiate(grenadeCasing, transform.position, transform.rotation);
grenade.velocity = transform.TransformDirection(Vector3.forward * ejectSpeed);
playerstats.grenades -= 1;
}
}
}