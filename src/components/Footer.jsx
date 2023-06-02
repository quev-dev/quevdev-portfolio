import svgBorder from '../content/svgs/border-footer.svg';
import svgTwitter from '../content/svgs/twitter.svg';
import svgGitHub from '../content/svgs/github.svg';
import svgYouTube from '../content/svgs/youtube.svg';

export default function Footer() {
  return (
    <footer>
      <div className='animated-border-wrapper'>
        <img
          className='animated-border shadow-xl'
          src={svgBorder}
          alt='Border Image'
        />
      </div>
      <section className='bg-cAccent text-cBackground p-4 flex flex-col md:flex-row md:justify-center'>
        <ul className='p-4 pb-0 flex flex-col gap-2'>
          <li>
            <h4 className='font-bold'>&copy; QuevDev 2023</h4>
            <p>All rights reserved.</p>
          </li>
          <li className='flex flex-wrap gap-2'>
            <a
              rel='noreferrer'
              href='https://github.com/quev-dev'
              target='_blank'
              className='bg-cBackground rounded-md flex items-center justify-center p-1 cursor-pointer'
            >
              <img src={svgGitHub} alt='GitHub' className='w-5 h-5' />
            </a>
            <a
              rel='noreferrer'
              href='https://youtube.com/@quevdev'
              target='_blank'
              className='bg-cBackground rounded-md flex items-center justify-center p-1 cursor-pointer'
            >
              <img src={svgYouTube} alt='YouTube' className='w-5 h-5' />
            </a>
            <a
              rel='noreferrer'
              href='https://twitter.com/quevdev'
              target='_blank'
              className='bg-cBackground rounded-md flex items-center justify-center p-1 cursor-pointer'
            >
              <img src={svgTwitter} alt='Twitter' className='w-5 h-5' />
            </a>
          </li>
        </ul>
        <article className='p-4'>
          <div className='mb-4'>
            <p>
              You can check out the source code for this portfolio by viewing
              its GitHub repository with the link below.
            </p>
            <a
              rel='noreferrer'
              target='_blank'
              href='https://github.com/quev-dev/quevdev-portfolio'
            >
              quevdev-portfolio
            </a>
          </div>
          <div className='mb-4'>
            <h4 className='font-bold'>Resources</h4>
            <p>
              You can view the resources I used for building this portfolio
              through the links below.
            </p>
          </div>
          <ul className='flex flex-wrap gap-4 md:gap-8'>
            <div>
              <h6 className='text-sm font-bold'>Technologies</h6>
              <li className='flex flex-col'>
                <a rel='noreferrer' target='_blank' href='https://astro.build/'>
                  Astro
                </a>
                <a
                  rel='noreferrer'
                  target='_blank'
                  href='https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiAk4vwspv-AhXkF1kFHQpLBkkQFnoECAkQAQ&url=https%3A%2F%2Freact.dev%2F&usg=AOvVaw1tEjYYiD7LQlxO53dgjTHV'
                >
                  React
                </a>
                <a
                  rel='noreferrer'
                  target='_blank'
                  href='https://tailwindcss.com/'
                >
                  Tailwind
                </a>
              </li>
            </div>
            <div>
              <h6 className='text-sm font-bold'>Other</h6>
              <li className='flex flex-col'>
                <a
                  rel='noreferrer'
                  target='_blank'
                  href='https://www.netlify.com/'
                >
                  Netlify
                </a>
                <a
                  rel='noreferrer'
                  target='_blank'
                  href='https://icons.getbootstrap.com/'
                >
                  Bootstrap Icons
                </a>
              </li>
            </div>
            <div>
              <h6 className='text-sm font-bold'>Libraries</h6>
              <li className='flex flex-col'>
                <a
                  rel='noreferrer'
                  target='_blank'
                  href='https://michalsnik.github.io/aos/'
                >
                  AOS
                </a>
                <a
                  rel='noreferrer'
                  target='_blank'
                  href='https://www.emailjs.com/'
                >
                  EmailJS
                </a>
              </li>
            </div>
          </ul>
        </article>
      </section>
    </footer>
  );
}
