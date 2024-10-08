var video = document.querySelectorAll('video')

video.forEach(play => play.addEventListener('Click', () => {
    play.classList.toggle('active');


    if(play.paused){
        play.play();

    } else {
        play.pause();
        play.currentTime = 0;
    }



}))

