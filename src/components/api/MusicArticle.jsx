import VideoEmbed from './VideoEmbed';
import icFLStudio from '../../content/icons/fl-studio.webp';
import icExternalLink from '../../content/svgs/external-link.svg';

export default function MusicArticle() {
  return (
    <article
      data-aos='fade-right'
      data-aos-once='true'
      data-aos-delay='300'
      data-aos-duration='500'
      className='project-article project-article-music py-8 md:py-32 mb-16 md:mb-24 bg-cover shadow-xl text-cBackground w-full flex flex-col md:flex-row items-center justify-center gap-8'
    >
      <section className='w-full md:w-1/2 lg:w-5/12 px-8 m-auto text-center'>
        <h3 className='text-3xl font-bold mb-8'>Music</h3>
        <VideoEmbed />
      </section>
      <section className='md:w-1/2 px-8 md:pl-0 md:pr-8'>
        <p className='opacity-80 italic mb-4 flex flex-row items-center gap-2'>
          <img className='w-8 h-8' src={icFLStudio} alt='Caption icon' />
          Composed using FL Studio.
        </p>
        <p className='mb-4'>
          My music works can be found through SoundCloud and YouTube.
        </p>
        <div className='flex flex-row gap-4'>
          <a
            className='text-cAccent bg-mid py-1 px-2 rounded-lg'
            target='_blank'
            rel='noreferrer'
            href='https://soundcloud.com/quevdev'
          >
            <img
              className='inline relative bottom-0.5 mr-1'
              src={icExternalLink}
              alt='External link icon'
            />
            SoundCloud
          </a>
          <a
            className='text-cAccent bg-mid py-1 px-2 rounded-lg'
            target='_blank'
            rel='noreferrer'
            href='https://www.youtube.com/@quevdev'
          >
            <img
              className='inline relative bottom-0.5 mr-1'
              src={icExternalLink}
              alt='External link icon'
            />
            YouTube
          </a>
        </div>
      </section>
    </article>
  );
}
