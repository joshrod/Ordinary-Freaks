/* GLOBAL VARIABLES */
var playButtons = document.querySelectorAll('div.play-button');
var lightbox = document.querySelector('div.lightbox');
var cross = document.querySelector('div.cross');
var video = document.querySelector('#yt-video');
var chevron = document.querySelector('#chevron-down');
var form = document.querySelector('.newsletter');
var activeButton = 'button-active';
var emailInput = document.querySelector('.news-email');
var subBtn = document.querySelector('.submit-btn');

/*TOP OF ABOUT SECTION */
var aboutTop = document.querySelector('#about').getBoundingClientRect().top + window.pageYOffset;

/* VIDEO IDS */
var latestId = 'w_32BFmDjGc';
var id1 = 'fyLhHZLrEys';
var id2 = 'A9xNksQOt6M';
var id3 = 'vNiIGIs2plQ';
var id4 = 'C5u6mhSoH00';
var id5 = 'Vbwz6yLyrHo';
var id6 = 'MIkm5x6d9bw';

/* YOUTUBE API */
var tag = document.createElement('script');
tag.id = 'iframe-of';
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

window.onload = function() {

	/* SMOOOTHSCROLL WHEN CLICKING ON CHEVRON USING PLUGIN */
	chevron.onclick = function() {
		scrollIt(about, 500, 'easeOutQuad');
	};

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
			case 5:
				playButtons[5].onclick = function() {
					player.loadVideoById(id5);
					displayVideo();
				};
				break;
			case 6:
				playButtons[6].onclick = function() {
					player.loadVideoById(id6);
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

	/* DISPLAY SUBSCRIPTION SUBMIT UPON EMAIL VERIFICATION */
	emailInput.addEventListener('keyup', function() {
		emailInput.value != '' && /^([\w-\.]+@([\w-]+\.)+[\w-]{2,12})?$/.test( emailInput.value ) ? subBtn.classList.add(activeButton) : subBtn.classList.remove(activeButton);
	});
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