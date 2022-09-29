import { useState } from 'react';
import '../Main/Main.css';

import Controls from '../Controls/Controls';
import Catchphrase from '../Catchphrase/Catchphrase';
import Character from '../Character/Character';

import background from '../../background/skyrimBackground.jpg';


export default function Main() {
  const [head, setHead] = useState('DragonplateHelmet');
  const [body, setBody] = useState('DragonplateArmor');
  const [bottom, setBottom] = useState('DragonplateBoots');
  const [catchphrase, setCatchphrases] = useState([]);
  const [currentCatchphrase, setCurrentCatchphrase] = useState('');
  return (
    <div className="main" style={{ backgroundImage: `url(${background})` }}>
      <div className="tools">
        <Controls 
          head={head}
          setHead={setHead}
          body={body}
          setBody={setBody}
          bottom={bottom}
          setBottom={setBottom}
        />
        <Catchphrase
          setCatchphrases={setCatchphrases}
          currentCatchphrase={currentCatchphrase}
          setCurrentCatchphrase={setCurrentCatchphrase}
        />
      </div>
      <Character head={head} body={body} bottom={bottom} />
    </div>
  );
}
