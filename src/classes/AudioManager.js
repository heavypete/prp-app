window.AudioContext = window.AudioContext || window.webkitAudioContext; // TODO:  refactor to class property

export class AudioManager {
  constructor() {
    this.ctx = new AudioContext();
    this.oscillators = {};
  }

  midiToFrequency(number) {
    const a = 440;
    return (a / 32) * 2 ** ((number - 9) / 12);
  }

  noteOn(note, velocity) {
    const oscGain = this.ctx.createGain();
    oscGain.gain.value = 0.33;
    const velocityGainAmount = (1 / 127) * velocity;
    const velocityGain = this.ctx.createGain();
    const selectElement = document.querySelector("#waveform option:checked"); // TODO: put into settings manager
    //?! Why does oscGain = velecityGain = this.createGain()??

    const osc = this.ctx.createOscillator();
    osc.type = selectElement.value;
    osc.frequency.value = this.midiToFrequency(note);
    velocityGain.gain.value = velocityGainAmount;

    osc.connect(oscGain);
    osc.connect(velocityGain);
    //! here they are again - are they separate nodes?  Only velocityGain goes to the destination...
    velocityGain.connect(this.ctx.destination);

    osc.gain = oscGain;

    console.log(osc.frequency.value);
    this.oscillators[note.toString()] = osc;
    osc.start();
  }

  noteOff(note) {
    const osc = this.oscillators[note.toString()];
    const oscGain = osc.gain;

    //nobody knows whats going on here, but its works...
    oscGain.gain.setValueAtTime(oscGain.gain.value, this.ctx.currentTime);
    oscGain.gain.exponentialRampToValueAtTime(
      0.001,
      this.ctx.currentTime + 0.003
    );
    setTimeout(() => {
      osc.stop();
      osc.disconnect();
    }, 20);

    delete this.oscillators[note.toString()];
  }

  noteOffWithKeyPress(note) {
    const osc = this.oscillators[note.toString()];
    setTimeout(() => {
      osc.stop();
      osc.disconnect();
    }, 200);

    delete this.oscillators[note.toString()];
  }

  noteOffWithDuration(note, ms) {
    const osc = this.oscillators[note.toString()];
    setTimeout(() => {
      osc.stop();
      osc.disconnect();
    }, ms);

    delete this.oscillators[note.toString()];
  }
}
