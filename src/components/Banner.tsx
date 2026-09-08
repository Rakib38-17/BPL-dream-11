
import { FaArrowRight, FaTrophy } from 'react-icons/fa';

const Banner = () => {
  return (
    <section className="relative mx-auto mt-6 max-w-7xl overflow-hidden rounded-3xl bg- gradient-to-br from-primary via-primary/90 to-secondary px-6 py-16 shadow-2xl sm:px-10 lg:px-16 lg:py-20">

      {/* Decorative circles */}
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-secondary/30 blur-3xl" />

      {/* Cricket ball decoration */}
      <div className="absolute right-10 top-10 hidden h-20 w-20 rotate-12 rounded-full border-4 border-white/30 bg-white/10 shadow-xl lg:block">
        <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 rotate-45 border-l-2 border-dashed border-white/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center text-primary-content">

        {/* Small badge */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur-md">
          <FaTrophy />
          Build Your Dream Team
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
          Assemble Your Ultimate
          <span className="block text-secondary-content">
            Dream 11 Cricket Team
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-5 max-w-2xl text-base font-medium opacity-90 sm:text-lg">
          Beyond Boundaries. Beyond Limits.
          <br />
          Pick your champions and create a team that dominates the game.
        </p>

        {/* Button */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="btn btn-secondary rounded-full px-7 text-base font-bold shadow-lg transition-transform hover:scale-105">
            Claim Free Credit
            <FaArrowRight />
          </button>

          <button className="btn btn-outline rounded-full border-white px-7 text-base font-semibold text-white hover:border-white hover:bg-white hover:text-primary">
            Explore Players
          </button>
        </div>

        {/* Bottom stats */}
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-3 divide-x divide-white/20 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">

          <div>
            <p className="text-2xl font-black">100+</p>
            <p className="text-xs opacity-70 sm:text-sm">
              Players
            </p>
          </div>

          <div>
            <p className="text-2xl font-black">20+</p>
            <p className="text-xs opacity-70 sm:text-sm">
              Teams
            </p>
          </div>

          <div>
            <p className="text-2xl font-black">1M+</p>
            <p className="text-xs opacity-70 sm:text-sm">
              Fans
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;