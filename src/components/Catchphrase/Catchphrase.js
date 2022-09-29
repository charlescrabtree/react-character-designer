

export default function Catchphrase({
  setCatchphrases,
  currentCatchphrase,
  setCurrentCatchphrase
}) {
  const handleCatchphrase = () => {
    setCatchphrases((pastCatchphrases) => [...pastCatchphrases, currentCatchphrase]);
    setCurrentCatchphrase('');
  };
  return (
    <div className="catchphrase">
      <label>Dragonshout:</label>
      <textarea
        value={currentCatchphrase}
        onChange={(e) => setCurrentCatchphrase(e.target.value)}
      ></textarea>
      <button onClick={handleCatchphrase}>Use this Dragonshout</button>
    </div>
  );
}
