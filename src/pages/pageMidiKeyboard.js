import { AudioManager } from "../classes/AudioManager.js";
import { ChannelKeyMap } from "../utils/ChannelKeyMap.js";
// import { Piano } from "../components/Piano.js";

const piano = new Piano();

const audioManager = new AudioManager();
// TODO: convert to async await
// TODO: implement dependency injection
export class MidiKeyboard {
  constructor() {
    if (navigator.requestMIDIAccess) {
      navigator.requestMIDIAccess().then(
        (midiAccess) => {
          midiAccess.addEventListener("statechange", this.updateDevices);
          const inputs = midiAccess.inputs;
          inputs.forEach((input) => {
            input.addEventListener("midimessage", this.handleInput);
          });
        },
        () => {
          console.log("Could not connect MIDI");
        }
      );
    }
  }

  handleInput(input) {
    const command = input.data[0];
    const note = input.data[1];
    const velocity = input.data[2];

    switch (command) {
      case 144: //noteOn
        if (velocity > 0) {
          audioManager.noteOn(note, velocity);
          if (piano !== null) {
            const stringNote = channelKeyMap[note.toString()];
            if (stringNote) piano.displayNotes([stringNote]);
          }
          console.log(
            "Note:",
            note,
            "Velocity:" + velocity,
            "(Anschlagdynamic):"
          );
        } else {
          audioManager.noteOff(note);
        }
        break;
      case 128: // note off
        audioManager.noteOff(note);
        break;
    }
  }

  updateDevices(event) {
    document.getElementById(
      "show-connection"
    ).innerHTML = `${event.port.state}`;
    console.log(
      `Name: ${event.port.name}, Brand: ${event.port.manufacturer}, State, ${event.port.state}, Type ${event.port.type}`
    );
  }
}
