export default function Skill({ image = "", link = "", text = "" }) {
  return (
    <li className="text-cAccent" data-aos-once="true" data-aos="flip-down">
      <img
        className="bg-cBackground p-1 rounded-lg w-8 h-8 inline mr-1 relative bottom-1 drop-shadow-xl object-contain"
        src={image}
        alt=""
      />
      <a rel="noreferrer" target="_blank" href={link} className="inline ml-1">
        {text}
      </a>
    </li>
  );
}
