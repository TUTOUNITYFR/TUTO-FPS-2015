#pragma strict

public var time : float;

function Start () {
	Destroy (gameObject, time);
}