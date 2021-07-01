import React from 'react';

import * as Player from '../examples';

function something() {
  console.log('Something doing...');
  Player.effects();
  console.log('Something done.');
}

function Tones(props: {}) {
  return (
    <div>
      <button onClick={something}>DO SOMETHING</button>
    </div>
  );
}

export default Tones;
