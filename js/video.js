let video = document.getElementById("player1")
let playBtn = document.getElementById("play")
let volume = document.getElementById("volume")
let slider = document.getElementById("slider")
let pauseBtn = document.getElementById("pause")
let muteBtn = document.getElementById("mute")
let slowerBtn = document.getElementById("slower")
let fasterBtn = document.getElementById("faster")
let skipBtn = document.getElementById("skip")
let oldSchool = document.getElementById("vintage")
let original = document.getElementById("orig")

window.addEventListener("load", function() {
	// load page
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;

	// play video
	playBtn.addEventListener("click", function() {
		console.log("Play Video");
		video.play()
		// Method2: document.getElementById("volume").innerHTML = video.volume * 100 + "%"
		volume.innerHTML = slider.value + "%"
	});

	// pause video
	pauseBtn.addEventListener("click", function(){
		console.log("Pause Video");
		video.pause()

	});

	// Slow Down video
	slowerBtn.addEventListener("click", function(){
		console.log("Slow down Video");
		video.playbackRate -= 0.1;
		console.log("Speed is: ", video.playbackRate);
	});

	// Speed Up video
	fasterBtn.addEventListener("click", function(){
		console.log("Speed Up Video");
		video.playbackRate += 0.1;
		console.log("Speed is: ", video.playbackRate);
	});

	// skip video
	skipBtn.addEventListener("click", function(){
		console.log("Skip Video");
		video.currentTime += 10;
		if (video.currentTime > video.duration){
			video.currentTime = 0;
		}
		console.log("video current time is: ", video.currentTime);
	});


    // Volume Slider
	slider.addEventListener("input", function(){
		video.volume = slider.value / 100;
		volume.innerHTML = slider.value + "%";
	});


	// Mute video
	muteBtn.addEventListener("click", function(){
		if (muteBtn.innerHTML == "Mute"){
			video.muted = true;
			muteBtn.innerHTML = "Unmute";
		}
		else {
			video.muted = false;
			muteBtn.innerHTML = "Mute";
		}
	});

	// OldSchool Styled video
	oldSchool.addEventListener("click", function(){
		video.classList.add("oldSchool")
	});

	// Original Styled video
	original.addEventListener("click", function(){
		video.classList.remove("oldSchool")
	});


});
