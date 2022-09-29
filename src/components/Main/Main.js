import { useState } from 'react';
import '../Main/Main.css';

import Controls from '../Controls/Controls';
import Character from '../Character/Character';

import background from '../../background/skyrimBackground.jpg';


export default function Main() {
  const [head, setHead] = useState('DragonplateHelmet');
  return (
    <div className="main" style={{ backgroundImage: `url(${background})` }}>
      <div className="tools">
        <Controls 
          head={head}
          setHead={setHead}
        />
      </div>
      <Character head={head} />
    </div>
  );
}
