import icExternalLink from "../content/svgs/external-link.svg";

export default function ({
  title = "",
  projectImage = "",
  projectVideo = "",
  projectClass = "",
  description = "",
  captionIcon = "",
  captionText = "",
  linkText = "",
  linkHref = "",
}) {
  const handleClick = () => {
    window.open(linkHref, "_blank");
  };
  return (
    <article
      data-aos="fade-right"
      data-aos-once="true"
      data-aos-delay="300"
      data-aos-duration="500"
      className={`project-article ${projectClass} py-8 md:py-32 mb-16 md:mb-24 bg-cover shadow-xl text-cBackground w-full flex flex-col md:flex-row items-center justify-center gap-8`}
    >
      <div className="w-full md:w-1/2 lg:w-5/12 px-8 m-auto">
        <h3 className="text-3xl font-bold mb-2">{title}</h3>
        <button
          onClick={handleClick}
          name="project-button"
          className="shine-button rounded-lg"
        >
          {projectImage !== "" && (
            <img
              src={projectImage}
              alt=""
              className="shadow-xl rounded-xl object-cover max-w-full h-auto"
            />
          )}
          {projectVideo !== "" && (
            <video
              autoPlay
              loop
              src={projectVideo}
              className="shadow-xl rounded-xl object-cover max-w-full h-auto"
            />
          )}
        </button>
      </div>
      <div className="md:w-1/2 px-8 md:pl-0 md:pr-8">
        <p className="opacity-80 italic mb-4 flex flex-row items-center gap-2">
          {captionIcon && (
            <img className="w-8 h-8" src={captionIcon} alt="Caption icon" />
          )}
          {captionText}
        </p>
        <p className="mb-4">{description}</p>

        <a
          className="text-cAccent bg-mid py-1 px-2 rounded-lg"
          target="_blank"
          rel="noreferrer"
          href={linkHref}
        >
          <img
            className="inline relative bottom-0.5 mr-1"
            src={icExternalLink}
            alt="External link icon"
          />
          {linkText}
        </a>
      </div>
    </article>
  );
}
