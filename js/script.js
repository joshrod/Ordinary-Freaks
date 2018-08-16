/* GLOBAL VARIABLES */
var playButtons = document.querySelectorAll("div.play-button");
var lightbox = document.querySelector("div.lightbox");
var cross = document.querySelector("div.cross");
var video = document.querySelector("#yt-video");
var chevron = document.querySelector("#chevron-down");
var form = document.querySelector(".newsletter");
var activeButton = "button-active";
var emailInput = document.querySelector(".news-email");
var subBtn = document.querySelector(".submit-btn");

/*TOP OF ABOUT SECTION */
var aboutTop =
  document.querySelector("#about").getBoundingClientRect().top +
  window.pageYOffset;

/* VIDEO IDS */
var latestId = "yTk3MJ3fDHo";
var id1 = "6MP5M7xDGeo";
var id2 = "m9K1MChIC6I";
var id3 = "1QxS-Mk0GTQ";
var id4 = "FZkXkjE-so4";
var id5 = "OaO6DHK7Zdg";
var id6 = "QKJB2T_1A0o";
var id7 = "uAOmKy2KfsY";
var id8 = "8lkUwTHtX4E";
var id9 = "jZRm_Tdj1Mc";
var id10 = "erMVf6kyJ5U";
var id11 = "0HCpRokJf-o";
var id12 = "w_32BFmDjGc";
var id13 = "fyLhHZLrEys";
var id14 = "A9xNksQOt6M";
var id15 = "vNiIGIs2plQ";
var id16 = "C5u6mhSoH00";
var id17 = "Vbwz6yLyrHo";
var id18 = "MIkm5x6d9bw";

/* YOUTUBE API */
var tag = document.createElement("script");
tag.id = "iframe-of";
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

window.onload = function() {
  /* SMOOOTHSCROLL WHEN CLICKING ON CHEVRON USING PLUGIN */
  chevron.onclick = function() {
    scrollIt(about, 500, "easeOutQuad");
  };

  /* PLACE AN INSTANCE OF YOUTUBE PLAYER BY DEFAULT*/
  window.onYouTubeIframeAPIReady = function() {
    onYouTubeIframeAPIReady();
  };

  /* CLICKING ANY PLAY BUTTON DISPLAYS THE LIGHTBOX */
  for (var i = 0; i < playButtons.length; i++) {
    switch (i) {
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
      case 7:
        playButtons[7].onclick = function() {
          player.loadVideoById(id7);
          displayVideo();
        };
        break;
      case 8:
        playButtons[8].onclick = function() {
          player.loadVideoById(id8);
          displayVideo();
        };
        break;
      case 9:
        playButtons[9].onclick = function() {
          player.loadVideoById(id9);
          displayVideo();
        };
        break;
      case 10:
        playButtons[10].onclick = function() {
          player.loadVideoById(id10);
          displayVideo();
        };
        break;
      case 11:
        playButtons[11].onclick = function() {
          player.loadVideoById(id11);
          displayVideo();
        };
        break;
      case 12:
        playButtons[12].onclick = function() {
          player.loadVideoById(id12);
          displayVideo();
        };
        break;
      case 13:
        playButtons[13].onclick = function() {
          player.loadVideoById(id13);
          displayVideo();
        };
        break;
      case 14:
        playButtons[14].onclick = function() {
          player.loadVideoById(id14);
          displayVideo();
        };
        break;
      case 15:
        playButtons[15].onclick = function() {
          player.loadVideoById(id15);
          displayVideo();
        };
        break;
      case 16:
        playButtons[16].onclick = function() {
          player.loadVideoById(id16);
          displayVideo();
        };
        break;
      case 17:
        playButtons[17].onclick = function() {
          player.loadVideoById(id17);
          displayVideo();
        };
        break;
      case 18:
        playButtons[18].onclick = function() {
          player.loadVideoById(id18);
          displayVideo();
        };
        break;
      default:
        break;
    }
  }

  /* CLICKING X CLOSES LIGHTBOX */
  cross.onclick = function() {
    lightbox.style.display = "none";
    player.stopVideo();
  };

  /* DISPLAY SUBSCRIPTION SUBMIT UPON EMAIL VERIFICATION */
  emailInput.addEventListener("keyup", function() {
    emailInput.value != "" &&
    /^([\w-\.]+@([\w-]+\.)+[\w-]{2,12})?$/.test(emailInput.value)
      ? subBtn.classList.add(activeButton)
      : subBtn.classList.remove(activeButton);
  });
};

/* YOUTUBE PLAYER */
var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player(video, {
    height: "390",
    width: "640",
    videoId: latestId,
    events: {
      onStateChange: onPlayerStateChange
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
      (window.requestAnimationFrame && requestAnimationFrame(tick)) ||
        setTimeout(tick, 16);
    }
  };

  tick();
}

function displayVideo() {
  lightbox.style.display = "block";
  fadeIn(lightbox);
}
