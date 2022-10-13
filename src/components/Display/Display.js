import './Display.css';

export default function Display({ headCount, bodyCount, bottomCount, catchphrases }) {
  return (
    <>
      <div className="display">
        <p>Congrats Dragonborn, you have changed your helmet {headCount} times, your armor {bodyCount} times, and your boots {bottomCount} times.</p> 
        <h3>Here are the dragon shouts that you know:</h3>
        <ul>
          {catchphrases.map((catchphrase) => (
            <li key={catchphrase}>{catchphrase}</li>
          ))}
        </ul>
        <p>Krosis, it seems that you still have much to learn before you can defeat Alduin.</p>
      </div>
    </>
  );
}
