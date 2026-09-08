import Logo from "../assets/logo.png";
import { HiMiniCurrencyDollar, HiBars3, HiXMark } from "react-icons/hi2";
import { useState } from "react";

const Nav = ({ coin }: { coin: number }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-base-200 bg-base-100/90 shadow-sm backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Desktop / Main Navbar */}
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src={Logo}
              alt="Logo"
              className="h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </a>

          {/* Desktop Menu */}
          <ul className="hidden items-center gap-2 md:flex">
            <li>
              <a
                href="/"
                className="rounded-full bg-primary px-5 py-2.5 font-semibold text-primary-content transition-all hover:shadow-md"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#fixture"
                className="rounded-full px-5 py-2.5 font-semibold text-base-content/70 transition-all hover:bg-primary/10 hover:text-primary"
              >
                Fixture
              </a>
            </li>

            <li>
              <a
                href="#players"
                className="rounded-full px-5 py-2.5 font-semibold text-base-content/70 transition-all hover:bg-primary/10 hover:text-primary"
              >
                Players
              </a>
            </li>

            <li>
              <a
                href="#schedule"
                className="rounded-full px-5 py-2.5 font-semibold text-base-content/70 transition-all hover:bg-primary/10 hover:text-primary"
              >
                Schedule
              </a>
            </li>
          </ul>

          {/* Coin */}
          <div className="flex items-center gap-3">

            <div className="flex items-center gap-1 rounded-full border border-warning/20 bg-warning/10 px-4 py-2 shadow-sm">
              <HiMiniCurrencyDollar className="text-2xl text-warning" />

              <span className="text-lg font-extrabold text-base-content">
                {coin}
              </span>

              <span className="hidden text-sm font-medium text-base-content/60 sm:inline">
                Coins
              </span>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="btn btn-circle btn-ghost md:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <HiXMark className="text-2xl" />
              ) : (
                <HiBars3 className="text-2xl" />
              )}
            </button>

          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t border-base-200 py-4 md:hidden">
            <ul className="flex flex-col gap-2">

              <li>
                <a
                  href="/"
                  className="block rounded-xl bg-primary px-4 py-3 font-semibold text-primary-content"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#fixture"
                  className="block rounded-xl px-4 py-3 font-semibold hover:bg-base-200"
                  onClick={() => setMenuOpen(false)}
                >
                  Fixture
                </a>
              </li>

              <li>
                <a
                  href="#players"
                  className="block rounded-xl px-4 py-3 font-semibold hover:bg-base-200"
                  onClick={() => setMenuOpen(false)}
                >
                  Players
                </a>
              </li>

              <li>
                <a
                  href="#schedule"
                  className="block rounded-xl px-4 py-3 font-semibold hover:bg-base-200"
                  onClick={() => setMenuOpen(false)}
                >
                  Schedule
                </a>
              </li>

            </ul>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Nav;
