

export default function Controls({
  head,
  setHead,
  body,
  setBody,
  bottom,
  setBottom
}) {
  return (
    <div className="controls">
      <label>Helmet</label>
      <select
        value={head}
        onChange={(e) => {
          setHead(e.target.value);
        }}
      >
        <option value="DragonplateHelmet">
          Dragonplate Helmet
        </option>
        <option value="Nightingale_Cowl">Nightingale Cowl</option>
        <option value="StalhrimHH">Stalhrim Helmet</option>
      </select>
      <label>Armor</label>
      <select
        value={body}
        onChange={(e) => {
          setBody(e.target.value);
        }}
      >
        <option value="DragonplateArmor">
          DragonplateArmor
        </option>
        <option value="Nightingale_Armor">Nightingale Armor</option>
        <option value="StalhrimHA">Stalhrim Armor</option>
      </select>
      <label>Boots</label>
      <select
        value={bottom}
        onChange={(e) => {
          setBottom(e.target.value);
        }}
      >
        <option value="DragonplateBoots">Dragonplate Boots</option>
        <option value="NightingaleBoots">Nightingale Boots</option>
        <option value="StalhrimHB">Stalhrim Boots</option>
      </select>
    </div>
  );
}
