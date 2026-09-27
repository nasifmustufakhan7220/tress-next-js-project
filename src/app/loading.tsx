const HomePageLoading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f6faf7]">
      <div className="flex flex-col items-center">

        {/* Loader */}
        <div className="relative flex h-20 w-20 items-center justify-center">
          <div className="absolute h-20 w-20 animate-spin rounded-full border-4 border-[#dceee3] border-t-[#063b27]" />

          <div className="text-3xl">
            🌿
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="mt-6 text-xl font-bold text-[#063b27]">
          Loading Trees
        </h2>

        <p className="mt-2 text-sm text-[#696969]">
          Growing your experience...
        </p>
      </div>
    </div>
  );
};

export default HomePageLoading;