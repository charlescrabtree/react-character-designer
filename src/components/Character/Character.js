

export default function character({ head }) {
  return (
    <div className="character">
      <img className="head" src={`${process.env.PUBLIC_URL}/${head}.webp`} />
    </div>
  );
}
