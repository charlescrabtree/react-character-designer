import './Controls.css';

export default function Controls({
  head,
  setHead,
  body,
  setBody,
  bottom,
  setBottom,
  setHeadCount,
  setBodyCount,
  setBottomCount
}) {
  return (
    <div className="controls">
      <label className='font'>Helmet</label>
      <select
        value={head}
        onChange={(e) => {
          setHead(e.target.value); 
          setHeadCount((prevState) => prevState + 1);
        }}>
        <option value="DragonplateHelmet">
          Dragonplate Helmet
        </option>
        <option value="Nightingale_Cowl">Nightingale Cowl</option>
        <option value="StalhrimHH">Stalhrim Helmet</option>
      </select>
      <label className='font'>Armor</label>
      <select
        value={body}
        onChange={(e) => {
          setBody(e.target.value);
          setBodyCount((prevState) => prevState + 1);
        }}
      >
        <option value="DragonplateArmor">
          DragonplateArmor
        </option>
        <option value="Nightingale_Armor">Nightingale Armor</option>
        <option value="StalhrimHA">Stalhrim Armor</option>
      </select>
      <label className='font'>Boots</label>
      <select
        value={bottom}
        onChange={(e) => {
          setBottom(e.target.value);
          setBottomCount((prevState) => prevState + 1);
        }}
      >
        <option value="DragonplateBoots">Dragonplate Boots</option>
        <option value="NightingaleBoots">Nightingale Boots</option>
        <option value="StalhrimHB">Stalhrim Boots</option>
      </select>
    </div>
  );
}
