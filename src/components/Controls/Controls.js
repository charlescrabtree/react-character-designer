

export default function Controls({
  head,
  setHead
}) {
  return (
    <div className="controls">
      <label>Head</label>
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
    </div>
  );
}
