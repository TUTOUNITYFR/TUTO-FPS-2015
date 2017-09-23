#pragma strict

public var spotlight : GameObject;
public var isOn : boolean = false;

function Update () {
	if(Input.GetKeyDown("f")){
		isOn = !isOn;
	}

	if(isOn == true){
		spotlight.SetActive(true);
	}else{
		spotlight.SetActive(false);
	}
}