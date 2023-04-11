import svgBorder from "../content/svgs/border-footer.svg";

export default function Footer() {
  return (
    <footer>
      <div className="animated-border-wrapper">
        <img
          className="animated-border shadow-xl"
          src={svgBorder}
          alt="Border Image"
        />
      </div>
      <section className="bg-cAccent text-cBackground p-4 flex flex-col md:flex-row md:items-center md:justify-center">
        <article className="p-4">
          <h4 className="font-bold">&copy; QuevDev 2023</h4>
          <p>All rights reserved.</p>
        </article>
        <article className="p-4">
          <div className="mb-4">
            <h4 className="font-bold">Resources</h4>
            <p>
              You can view the resources I used for building this portfolio
              through the links below.
            </p>
          </div>
          <ul className="flex flex-wrap gap-4">
            <div>
              <h6 className="text-sm font-bold">Technologies</h6>
              <li className="flex flex-col">
                <a rel="noreferrer" target="_blank" href="https://astro.build/">
                  Astro
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiAk4vwspv-AhXkF1kFHQpLBkkQFnoECAkQAQ&url=https%3A%2F%2Freact.dev%2F&usg=AOvVaw1tEjYYiD7LQlxO53dgjTHV"
                >
                  React
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://tailwindcss.com/"
                >
                  Tailwind
                </a>
              </li>
            </div>
            <div>
              <h6 className="text-sm font-bold">Other</h6>
              <li className="flex flex-col">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.netlify.com/"
                >
                  Netlify
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://icons.getbootstrap.com/"
                >
                  Bootstrap Icons
                </a>
              </li>
            </div>
            <div>
              <h6 className="text-sm font-bold">Libraries</h6>
              <li className="flex flex-col">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://michalsnik.github.io/aos/"
                >
                  AOS
                </a>
              </li>
            </div>
          </ul>
        </article>
      </section>
    </footer>
  );
}
