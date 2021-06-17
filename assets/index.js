import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay'

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [
    new AutoPlay()
] });

const playButton = document.querySelector('#playButton');
playButton.onclick = () => player.togglePlay();

const muteButton = document.querySelector('#muteButton');
muteButton.onclick = () => {
    if (player.media.muted) {
        player.unmute();
    } else {
        player.mute();
    }
}

/* 
const button = document.querySelector('button');
button.onclick = () => player.togglePlay(); */