import svgExternalLink from '../content/svgs/external-link.svg';

export default function AppArticle({
  projectDescription = '',
  projectTitle = '',
  projectVideo = vidExample,
  projectIcon = '',
  projectLinkLive = '',
  projectLinkGithub = '',
}) {
  const handleClick = () => {
    window.open(projectLinkLive, '_blank');
  };
  return (
    <article
      data-aos='fade-right'
      data-aos-once='true'
      data-aos-delay='300'
      data-aos-duration='500'
      className='flex flex-col gap-2 mb-12 md:flex-row md:justify-center md:items-center p-8 pb-10 bg-mid shadow-xl'
    >
      <section className='flex flex-col md:w-1/2 md:items-center md:justify-center'>
        <div>
          <img className='w-10 h-10 inline' src={projectIcon} alt='Icon' />
          <h3 className='text-3xl font-bold inline relative top-2 ml-2'>
            {projectTitle}
          </h3>
          <p className='my-2'>{projectDescription}</p>
          <aside className='text-cAccent flex flex-row gap-4'>
            <a target='_blank' rel='noreferrer' href={projectLinkLive}>
              <img
                src={svgExternalLink}
                alt='Link icon'
                className='inline relative bottom-0.5 mr-1'
              />
              Live
            </a>
            <a target='_blank' rel='noreferrer' href={projectLinkGithub}>
              <img
                src={svgExternalLink}
                alt='Link icon'
                className='inline relative bottom-0.5 mr-1'
              />
              GitHub
            </a>
          </aside>
        </div>
      </section>
      <section className='flex flex-col gap-2 md:w-1/2 lg:w-1/3'>
        <button onClick={handleClick} className='shine-button'>
          <video
            autoPlay
            loop
            src={projectVideo}
            className='rounded-lg shadow-xl'
          />
        </button>
      </section>
    </article>
  );
}
