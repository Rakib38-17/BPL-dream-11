
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaTrophy,
  FaArrowRight,
  FaShieldAlt,
  FaHeadset,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20 bg-slate-950 text-white">

      {/* Newsletter Section */}
      <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg- gradient-to-r from-green-600 via-emerald-500 to-green-700 p-8 shadow-2xl sm:p-10 lg:p-12">

          {/* Decorative Circles */}
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10" />
          <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-black/10" />

          <div className="relative z-10 flex flex-col items-center justify-between gap-8 lg:flex-row">

            {/* Newsletter Text */}
            <div className="max-w-xl text-center lg:text-left">
              <div className="mb-3 flex items-center justify-center gap-2 lg:justify-start">
                <div className="rounded-full bg-white/20 p-2">
                  <FaEnvelope />
                </div>

                <span className="text-sm font-bold uppercase tracking-widest">
                  Stay Updated
                </span>
              </div>

              <h2 className="text-3xl font-black sm:text-4xl">
                Never Miss a Match!
              </h2>

              <p className="mt-3 text-sm text-white/80 sm:text-base">
                Subscribe to get the latest cricket news, match updates,
                player stats and fantasy tips directly in your inbox.
              </p>
            </div>

            {/* Newsletter Form */}
            <div className="w-full max-w-md">
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input h-12 w-full rounded-xl border-0 bg-white text-black placeholder:text-gray-400 focus:outline-none"
                />

                <button className="btn h-12 rounded-xl border-0 bg-slate-950 px-6 text-white hover:bg-slate-800">
                  Subscribe
                  <FaArrowRight />
                </button>
              </div>

              <p className="mt-3 text-center text-xs text-white/70">
                No spam. Just cricket. 🏏
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-600 shadow-lg">
                <FaTrophy className="text-xl" />
              </div>

              <div>
                <h2 className="text-2xl font-black">
                  DREAM <span className="text-green-500">11</span>
                </h2>

                <p className="text-xs font-medium text-slate-400">
                  BEYOND BOUNDARIES
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Build your ultimate cricket team, choose your favorite
              players and experience the excitement of fantasy cricket.
            </p>

            {/* Social Media */}
            <div className="mt-6 flex gap-3">

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition-all hover:-translate-y-1 hover:bg-green-600"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition-all hover:-translate-y-1 hover:bg-green-600"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition-all hover:-translate-y-1 hover:bg-green-600"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition-all hover:-translate-y-1 hover:bg-green-600"
              >
                <FaYoutube />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-bold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-slate-400">

              <li>
                <a
                  href="/"
                  className="transition-colors hover:text-green-500"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#fixture"
                  className="transition-colors hover:text-green-500"
                >
                  Fixtures
                </a>
              </li>

              <li>
                <a
                  href="#players"
                  className="transition-colors hover:text-green-500"
                >
                  Players
                </a>
              </li>

              <li>
                <a
                  href="#schedule"
                  className="transition-colors hover:text-green-500"
                >
                  Schedule
                </a>
              </li>

              <li>
                <a
                  href="#teams"
                  className="transition-colors hover:text-green-500"
                >
                  My Team
                </a>
              </li>

            </ul>
          </div>

          {/* Fantasy Cricket */}
          <div>
            <h3 className="mb-5 text-lg font-bold">
              Fantasy Cricket
            </h3>

            <ul className="space-y-3 text-sm text-slate-400">

              <li>
                <a
                  href="#how-to-play"
                  className="transition-colors hover:text-green-500"
                >
                  How to Play
                </a>
              </li>

              <li>
                <a
                  href="#rules"
                  className="transition-colors hover:text-green-500"
                >
                  Game Rules
                </a>
              </li>

              <li>
                <a
                  href="#points"
                  className="transition-colors hover:text-green-500"
                >
                  Points System
                </a>
              </li>

              <li>
                <a
                  href="#leaderboard"
                  className="transition-colors hover:text-green-500"
                >
                  Leaderboard
                </a>
              </li>

              <li>
                <a
                  href="#help"
                  className="transition-colors hover:text-green-500"
                >
                  Help Center
                </a>
              </li>

            </ul>
          </div>

          {/* Contact / Support */}
          <div>
            <h3 className="mb-5 text-lg font-bold">
              Support
            </h3>

            <div className="space-y-5">

              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-green-500/10 p-3 text-green-500">
                  <FaHeadset />
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    Customer Support
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    We're here to help
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-green-500/10 p-3 text-green-500">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    Email
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    support@dream11.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-green-500/10 p-3 text-green-500">
                  <FaShieldAlt />
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    Safe & Secure
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    Your data is protected
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm sm:px-6 md:flex-row lg:px-8">

          <p className="text-slate-500">
            © 2024 Dream 11. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-slate-500">
            <a
              href="#privacy"
              className="transition-colors hover:text-green-500"
            >
              Privacy Policy
            </a>

            <a
              href="#terms"
              className="transition-colors hover:text-green-500"
            >
              Terms & Conditions
            </a>

            <a
              href="#responsible"
              className="transition-colors hover:text-green-500"
            >
              Responsible Play
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;

