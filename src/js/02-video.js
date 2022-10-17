import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(onStopTime, 1000));

function onStopTime(e) {
  let timeVideo = e.seconds;
  localStorage.setItem('videoplayer-current-time', timeVideo);
}

const saveTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(saveTime);
