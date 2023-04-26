import { useState } from "react";
import icQuevdev from "../content/icons/quevdev.webp";
import svgBorder from "../content/svgs/border-nav.svg";
import svgDropdownActive from "../content/svgs/dropdown-active.svg";
import svgDropdownInactive from "../content/svgs/dropdown-inactive.svg";

export default function Navbar({ activeLink = "" }) {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <nav className="fixed w-full top-0 z-30">
      {/* Mobile */}
      <ul className="flex md:hidden flex-row justify-between items-center px-4 py-2 bg-cAccent text-cBackground">
        <li>
          <a href="/" className="main-link flex flex-row items-center gap-2">
            <img
              className="w-10 h-10 rounded-full shadow-xl"
              src={icQuevdev}
              alt="..."
            />
            <p>QuevDev</p>
          </a>
        </li>
        <li className="flex flex-row gap-4">
          <button
            aria-expanded="false"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {!showDropdown && (
              <img className="w-6 h-6" src={svgDropdownInactive} alt="..." />
            )}
            {showDropdown && (
              <img className="w-6 h-6" src={svgDropdownActive} alt="..." />
            )}
          </button>
        </li>
      </ul>

      {/* Dropdown */}
      {showDropdown && (
        <ul className="bg-cAccent text-cBackground text-right px-4 pb-2">
          <li>
            <a href="/">Home 🏠</a>
          </li>
          <li>
            <a href="/web-apps">Web Apps 📦</a>
          </li>
          <li>
            <a href="/projects">Projects 🎨</a>
          </li>
          <li>
            <a href="/contact">Contact ✉️</a>
          </li>
        </ul>
      )}

      {/* Desktop */}
      <ul className="hidden md:flex flex-row justify-between items-center px-4 py-2 lg:pt-4 lg:px-6 bg-cAccent text-cBackground">
        <li className="z-50">
          <a href="/" className="main-link flex flex-row items-center gap-2">
            <img
              className="w-10 h-10 rounded-full shadow-xl"
              src={icQuevdev}
              alt="..."
            />
            <p>QuevDev</p>
          </a>
        </li>
        <li className="flex flex-row gap-4 z-50">
          {activeLink === "home" ? (
            <a className="font-bold activated" href="/">
              🏠 Home
            </a>
          ) : (
            <a href="/">🏠 Home</a>
          )}
          {activeLink === "web-apps" ? (
            <a className="font-bold activated" href="/web-apps">
              📦 Web Apps
            </a>
          ) : (
            <a href="/web-apps">📦 Web Apps</a>
          )}
          {activeLink === "projects" ? (
            <a className="font-bold activated" href="/projects">
              🎨 Projects
            </a>
          ) : (
            <a href="/projects">🎨 Projects</a>
          )}
          {activeLink === "contact" ? (
            <a className="font-bold activated" href="/contact">
              ✉️ Contact
            </a>
          ) : (
            <a href="/contact">✉️ Contact</a>
          )}
        </li>
      </ul>
      <div className="animated-border-wrapper">
        <img
          className="animated-border drop-shadow-xl bottom-0.5"
          src={svgBorder}
          alt="Border Image"
        />
      </div>
    </nav>
  );
}
