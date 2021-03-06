import "./App.css";
import React, { useState } from "react";
import { Howl, Howler } from "howler";
import { useHowl, Play } from "rehowl";

import clap from "./drumkitIcons/clap.png";
import crash from "./drumkitIcons/crash.png";
import clHiHat from "./drumkitIcons/clHiHat.png";
import opHiHat from "./drumkitIcons/opHiHat.png";
import kick from "./drumkitIcons/kick.png";
import snare from "./drumkitIcons/snare.png";
import snareSound from "../src/drums/CYCdh_Kurz02-Snr02.wav";

// TODO: refactor image imports

const Drums = () => {
  const { howl } = useHowl({
    src: ["./drums/drums.webm", "./drums/drums.mp3"],
    sprite: {
      "CYCdh_AcouKick-14": [0, 625.8503401360545],
      "CYCdh_Crash-01": [2000, 15228.571428571428],
      "CYCdh_Kurz02-Snr02": [19000, 496.82539682539687],
      "CYCdh_LudRimC-07": [21000, 1442.879818594104],
      "CYCdh_Sab_ClHat-06": [24000, 619.0476190476204],
      "KHats Open-07": [26000, 2863.582766439908],
    },
  });
};

function DrumKit() {
  //* document.querySelector(".drumkit");

  // function playDrum(event) {
  //   if (event.target.classList.contains("pad")) {
  //     event.preventDefault();
  //     let soundToPlay = event.target.dataset.sound;
  //     drums.play(soundToPlay);
  //   }
  // }

  function playSnare() {
    let soundToPlay = "CYCdh_Kurz02-Snr02";
    console.log(soundToPlay);
    console.log("playSnare function triggered");
    Play(snareSound);
  }

  // function playCrash() {
  //   let soundToPlay = "CYCdh_Crash-01";
  //   console.log(soundToPlay);
  //   drums.play(soundToPlay);
  // }
  // function playClap() {
  //   let soundToPlay = "CYCdh_LudRimC-07";
  //   console.log(soundToPlay);
  //   drums.play(soundToPlay);
  // }
  // function playClHiHat() {
  //   let soundToPlay = "CYCdh_Sab_ClHat-06";
  //   console.log(soundToPlay);
  //   drums.play(soundToPlay);
  // }
  // function playOpHiHat() {
  //   let soundToPlay = "KHats Open-07";
  //   console.log(soundToPlay);
  //   drums.play(soundToPlay);
  // }
  // function playKick() {
  //   let soundToPlay = "CYCdh_AcouKick-14";
  //   console.log(soundToPlay);
  //   drums.play(soundToPlay);
  // }

  document.addEventListener("keydown", (e) => {
    if (e.key === "l") {
      playSnare();
      console.log("snare");
      // } else {
      //   if (e.key === "f") {
      //     playCrash();
      //     console.log("crash");
      //   } else {
      //     if (e.key === "s") {
      //       playClap();
      //       console.log("clap");
      //     } else {
      //       if (e.key === "d") {
      //         playClHiHat();
      //         console.log("closed high hat");
      //       } else {
      //         if (e.key === "j") {
      //           playKick();
      //           console.log("kick");
      //         } else {
      //           if (e.key === "k") {
      //             playOpHiHat();
      //             console.log("open high hat");
      //           }
      //         }
      //       }
      //     }
      //   }
    }
  });

  // drumkit.addEventListener("click", () => {
  //   if (event.target.classList.contains("pad")) {
  //     let soundToPlay = event.target.dataset.sound;
  //     drums.play(soundToPlay);
  //   }
  // });

  return (
    <div className="drumkit">
      {/* <div className="pad clap" data-sound="CYCdh_LudRimC-07">
        <img src={clap} alt="clap" onClick={playClap} />
      </div>
      <div className="pad clHat" data-sound="CYCdh_Sab_ClHat-06">
        <img src={clHiHat} alt="closed high hat" />
      </div>
      <div className="pad crash" data-sound="CYCdh_Crash-01">
        <img src={crash} alt="crash" />
      </div>
      <div className="pad kick" data-sound="CYCdh_AcouKick-14">
        <img src={kick} alt="kick" />
      </div>
      <div className="pad opHat" data-sound="KHats Open-07">
        <img src={opHiHat} alt="open high hat" onClick={playOpHiHat()} />
      </div> */}
      <div className="pad snare" data-sound="CYCdh_Kurz02-Snr02">
        <img src={snare} alt="snare" />
      </div>
    </div>
  );
}

export default DrumKit;
