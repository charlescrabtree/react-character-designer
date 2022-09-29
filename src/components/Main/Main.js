import { useState } from 'react';
import '../Main/Main.css';

import Controls from '../Controls/Controls';
import Catchphrase from '../Catchphrase/Catchphrase';
import Display from '../Display/Display';
import Character from '../Character/Character';

import background from '../../background/skyrimBackground.jpg';


export default function Main() {
  const [head, setHead] = useState('DragonplateHelmet');
  const [headCount, setHeadCount] = useState(0);
  const [body, setBody] = useState('DragonplateArmor');
  const [bodyCount, setBodyCount] = useState(0);
  const [bottom, setBottom] = useState('DragonplateBoots');
  const [bottomCount, setBottomCount] = useState(0);
  const [catchphrases, setCatchphrases] = useState([]);
  const [currentCatchphrase, setCurrentCatchphrase] = useState('');
  return (
    <div className="main" style={{ backgroundImage: `url(${background})` }}>
      <div className="tools">
        <Controls 
          head={head}
          setHead={setHead}
          setHeadCount={setHeadCount}
          body={body}
          setBody={setBody}
          setBodyCount={setBodyCount}
          bottom={bottom}
          setBottom={setBottom}
          setBottomCount={setBottomCount}
        />
        <Catchphrase
          setCatchphrases={setCatchphrases}
          currentCatchphrase={currentCatchphrase}
          setCurrentCatchphrase={setCurrentCatchphrase}
        />
        <Display
          headCount={headCount}
          bodyCount={bodyCount}
          bottomCount={bottomCount}
          catchphrases={catchphrases}
        />
      </div>
      <Character head={head} body={body} bottom={bottom} />
    </div>
  );
}
