import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <section
      className="relative min-h-125 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1687879693677-d04e793214a3?q=80&w=1939&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-125 max-w-7xl items-center px-4 sm:px-6 lg:px-8">

        <div className="max-w-2xl text-white">

          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#9cff3b]">
            Green Today, Healthy Tomorrow
          </p>

          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Discover the Beauty
            <br />
            of <span className="text-[#9cff3b]">Trees</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-white/85 sm:text-lg">
            Explore a diverse collection of trees from around the world.
            Learn about their features, benefits and how they make our
            planet greener.
          </p>

          <a
            href="#AllTrees"
            className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#9cff3b] px-6 py-3 font-semibold text-[#063b27] transition hover:bg-[#b5ff6b]"
          >
            Explore Trees
            <FaArrowRight />
          </a>

        </div>
      </div>
    </section>
  );
};

export default Banner;