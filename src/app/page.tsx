import Banner from '@/components/Banner/Banner';
import TreesSkeleton from '@/components/Skeleton/TreesSkeleton';
import Trees from '@/components/Trees/Trees';
import React, { Suspense } from 'react';

const HomePage = () => {
  return (
    <div>
      <Banner/>
      <Suspense fallback={<TreesSkeleton/>}>
        <Trees/>
      </Suspense>
    </div>
  );
};

export default HomePage;