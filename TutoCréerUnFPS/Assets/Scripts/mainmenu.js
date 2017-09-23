import UnityEngine;
import System.Collections;
import UnityEngine.UI;

	var scene_name : String;

	var thedropdown : Dropdown;
	var volumeslider : Slider;

	var qualityLevel : int;
	var volume : float;

	function Start () {
		ValueChangeCheck();
		changeVolume();
		//enablevsync();

		qualityLevel = PlayerPrefs.GetInt("quality");
		QualitySettings.vSyncCount = PlayerPrefs.GetInt("vsync");
		volume = PlayerPrefs.GetFloat("volume");
	}

	function Bouton_start(){
		PlayerPrefs.SetInt("quality", qualityLevel);
		PlayerPrefs.SetInt("vsync", QualitySettings.vSyncCount);
		PlayerPrefs.SetFloat("volume", volume);
		Application.LoadLevel(scene_name);
	}

	function Bouton_quitter(){
		Application.Quit();
	}

	function ValueChangeCheck(){
		if (thedropdown.value == 0) {
			QualitySettings.SetQualityLevel(0);
			qualityLevel = QualitySettings.GetQualityLevel ();
		}else if (thedropdown.value == 1) {
			QualitySettings.SetQualityLevel(1);
			qualityLevel = QualitySettings.GetQualityLevel ();
		} else if (thedropdown.value == 2) {
			QualitySettings.SetQualityLevel(2);
			qualityLevel = QualitySettings.GetQualityLevel ();
		}
	}

	function enablevsync(){
		if(QualitySettings.vSyncCount == 0){
			QualitySettings.vSyncCount = 1;
			Debug.Log("vsync activé");
		}else{
			QualitySettings.vSyncCount = 0;
			Debug.Log("vsync désactivé");
		}
	}

	function changeVolume(){
		volume = volumeslider.GetComponent(Slider).value;
	}