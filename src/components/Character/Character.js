

export default function character({ head, body, bottom }) {
  return (
    <div className="character">
      <img className="head" src={`${process.env.PUBLIC_URL}/${head}.webp`} />
      <img className="body" src={`${process.env.PUBLIC_URL}/${body}.webp`} />
      <img className="bottom" src={`${process.env.PUBLIC_URL}/${bottom}.webp`} />
    </div>
  );
}
