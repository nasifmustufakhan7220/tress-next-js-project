

const TreesSkeleton = () => {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Heading Skeleton */}
      <div className="mb-8">
        <div className="h-12 w-48 animate-pulse rounded-md bg-gray-200" />

        <div className="mt-4 h-4 w-full max-w-2xl animate-pulse rounded-md bg-gray-200" />
      </div>

      {/* Cards Skeleton */}
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white"
          >
            {/* Image */}
            <div className="h-52 w-full animate-pulse bg-gray-200" />

            {/* Content */}
            <div className="space-y-4 p-5">
              {/* Category */}
              <div className="h-3 w-20 animate-pulse rounded bg-gray-200" />

              {/* Title */}
              <div className="h-6 w-3/4 animate-pulse rounded bg-gray-200" />

              {/* Description */}
              <div className="space-y-2">
                <div className="h-3 w-full animate-pulse rounded bg-gray-200" />
                <div className="h-3 w-5/6 animate-pulse rounded bg-gray-200" />
              </div>

              {/* Button */}
              <div className="h-10 w-32 animate-pulse rounded-lg bg-gray-200" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TreesSkeleton;