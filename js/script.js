var playButtons = document.querySelectorAll('div.play-button');
var lightbox = document.querySelector('div.lightbox');
var cross = document.querySelector('div.cross');
var video = document.querySelector('#yt-video');

/* VIDEO IDS */
var latestId = 'A9xNksQOt6M';
var id1 = 'vNiIGIs2plQ';
var id2 = 'C5u6mhSoH00';
var id3 = 'Vbwz6yLyrHo';
var id4 = 'MIkm5x6d9bw';

/* YOUTUBE API */
var tag = document.createElement('script');
tag.id = 'iframe-of';
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

window.onload = function() {

	/* PLACE AN INSTANCE OF YOUTUBE PLAYER BY DEFAULT*/
	window.onYouTubeIframeAPIReady = function() {
		onYouTubeIframeAPIReady();
	};
	
	/* CLICKING ANY PLAY BUTTON DISPLAYS THE LIGHTBOX */
	for (var i = 0; i < playButtons.length; i++) {
		switch(i) {
			case 0:
				playButtons[0].onclick = function() {
					player.loadVideoById(latestId);
					displayVideo();
				};
				break;
			case 1:
				playButtons[1].onclick = function() {
					player.loadVideoById(id1);
					displayVideo();
				};
				break;
			case 2:
				playButtons[2].onclick = function() {
					player.loadVideoById(id2);
					displayVideo();
				};
				break;
			case 3:
				playButtons[3].onclick = function() {
					player.loadVideoById(id3);
					displayVideo();
				};
				break;
			case 4:
				playButtons[4].onclick = function() {
					player.loadVideoById(id4);
					displayVideo();
				};
				break;
			default:
				break;
		}
	}

	/* CLICKING X CLOSES LIGHTBOX */
	cross.onclick = function() {
		lightbox.style.display = 'none';
		player.stopVideo();
	}
}

/* YOUTUBE PLAYER */
var player;

function onYouTubeIframeAPIReady() {
	player = new YT.Player(video, {
		height: '390',
		width: '640',
		videoId: latestId,
		events: {
			'onStateChange': onPlayerStateChange
		}
	});
}

var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      done = true;
    } else if (event.data == YT.PlayerState.ENDED) {
      location.reload();
    }
 }

function stopVideo() {
    player.stopVideo();
}

function fadeIn(el) {
  el.style.opacity = 0;

  var last = +new Date();
  var tick = function() {
    el.style.opacity = +el.style.opacity + (new Date() - last) / 400;
    last = +new Date();

    if (+el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };

  tick();
}

function displayVideo() {
	lightbox.style.display = 'block';
	fadeIn(lightbox);
}