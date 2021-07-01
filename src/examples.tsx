import * as Tone from 'tone';

const synth = new Tone.Synth().toDestination();

/* QUICK START EXAMPLES COPY AND PASTED FOR TESTING */
export function playSound() {
  synth.triggerAttackRelease('C4', '8n');
}

export function playMoreSounds() {
  const now = Tone.now();
  synth.triggerAttackRelease('C4', '4n', now);
  synth.triggerAttackRelease('D4', '4n', now + 0.5);
  synth.triggerAttackRelease('E4', '4n', now + 1);
}

export function synthLoop() {
  // create two monophonic synths
  const synthA = new Tone.FMSynth().toDestination();
  const synthB = new Tone.AMSynth().toDestination();
  //play a note every quarter-note
  const loopA = new Tone.Loop((time) => {
    synthA.triggerAttackRelease('C2', '8n', time);
  }, '4n').start(0);
  //play another note every off quarter-note, by starting it "8n"
  const loopB = new Tone.Loop((time) => {
    synthB.triggerAttackRelease('C4', '8n', time);
  }, '4n').start('8n');
  // the loops start when the Transport is started
  Tone.Transport.start();
  // ramp up to 800 bpm over 10 seconds
  // Tone.Transport.bpm.rampTo(800, 10);
}

export function samples() {
  const sampler = new Tone.Sampler({
    urls: {
      C4: 'C4.mp3',
      'D#4': 'Ds4.mp3',
      'F#4': 'Fs4.mp3',
      A4: 'A4.mp3',
    },
    release: 1,
    baseUrl: 'https://tonejs.github.io/audio/salamander/',
  }).toDestination();

  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(['Eb4', 'G4', 'Bb4'], 4);
  });
}

export function effects() {
  const player = new Tone.Player({
    url: 'https://tonejs.github.io/audio/berklee/gurgling_theremin_1.mp3',
    loop: false,
    autostart: true,
  });
  //create a distortion effect
  const distortion = new Tone.Distortion(0.4).toDestination();
  //connect a player to the distortion
  player.connect(distortion);
}
