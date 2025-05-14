class Countdown {
  constructor(futureDate) {
    this.futureDate = futureDate;
  }

  get _newDate() {
    return new Date();
  }

  get _futureDate() {
    return new Date(this.futureDate);
  }

  get _timeStampDiff() {
    return this._futureDate.getTime() - this._newDate.getTime();
  }

  get days() {
    return Math.floor(this._timeStampDiff / (24 * 60 * 60 * 1000));
  }

  get hours() {
    return Math.floor(this._timeStampDiff / (60 * 60 * 1000));
  }

  get minutes() {
    return Math.floor(this._timeStampDiff / (60 * 1000));
  }

  get seconds() {
    return Math.floor(this._timeStampDiff / 1000);
  }

  get total(){
    const days = this.days;
    const hours = this.hours % 24;
    const minutes = this.minutes % 60;
    const seconds = this.seconds % 60;

    return{
      days,
      hours,
      minutes,
      seconds,
    }
  }
}

const tempoParaOSJ = new Countdown("24 June 2025 23:59:59 GMT-0300");

function rodarCountdown(){
  const days = document.querySelector('#dias');
  const hours = document.querySelector('#horas')
  const minutes = document.querySelector('#minutos');
  const seconds = document.querySelector('#segundos');

  days.innerHTML = tempoParaOSJ.total.days;
  hours.innerHTML = tempoParaOSJ.total.hours;
  minutes.innerHTML = tempoParaOSJ.total.minutes;
  seconds.innerHTML = tempoParaOSJ.total.seconds;
}

setInterval(rodarCountdown,1000)



function playAudio(){
  const audio = new Audio('./sounds/teste.mp3');
  audio.play();
}