#pragma strict

public var allAudioSources : AudioSource[];

function Awake(){
	allAudioSources = FindObjectsOfType(AudioSource) as AudioSource[];
	QualitySettings.SetQualityLevel (PlayerPrefs.GetInt("quality"));
	QualitySettings.vSyncCount = (PlayerPrefs.GetInt("vsync"));

	SetVolume();
}

function SetVolume(){
	for(var audioS : AudioSource in allAudioSources){
		audioS.volume = (PlayerPrefs.GetFloat("volume"));
	}
}