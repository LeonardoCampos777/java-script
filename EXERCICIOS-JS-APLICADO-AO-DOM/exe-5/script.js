const soundList = {
  a: 'boom',
  s: 'clap',
  d: 'hihat',
  f: 'kick',
  g: 'openhat',
  h: 'ride',
  j: 'snare',
  k: 'tink',
  l: 'tom',
}


function controlDrum({ key }){
  const soundName = soundList[key];
  if(soundName){
    const audio = new Audio(`sounds/${soundName}.wav`);
    audio.play();
  }
}

window.addEventListener('keydown', controlDrum);