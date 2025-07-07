const RestrauntPageSkeleton = () => {

  const BannerCardSkeleton = () => {
    return (
      <div className="flex gap-3 overflow-x-auto scrollbar-none no-scrollbar">
        {Array(3)
          .fill(0)
          .map((e, index) => (
            <div
              key={index}
              className="flex flex-col mt-2 p-2 rounded-lg w-80 min-w-max border no-scrollbar skeleton-border-color"
            >
              <div className="my-1 mx-2 h-4 w-16 shine"></div>
              <div className="my-1 mx-2 h-4 w-3/4 shine"></div>
            </div>
          ))}
      </div>
    );
  };

  const CategoryCardSkeleton = () => {
    return Array(7)
      .fill(0)
      .map((e, index) => (
        <div 
          key={index}
          className="w-full p-4 mt-3  my-4 shadow-md flex justify-between border skeleton-border-color">
          <div className="my-1 mx-2 h-6 w-72 shine"></div>
          <div className="my-1 mx-2 h-4 w-4 shine"></div>
        </div>
      ));
  };

  return (
    <div className="restraunt-page-skeleton w-7/12 m-auto p-3">
      <div className="flex justify-between">
        <div className="name m-2 w-56 h-8 shine"></div>
        <div className="m-2 w-32 h-12 shine"></div>
      </div>
      <div className="group-lines flex flex-col justify-start">
        <div className="my-1 mx-2 h-4 w-36 shine"></div>
        <div className="my-1 mx-2 h-4 w-36 shine"></div>
        <div className="my-1 mx-2 h-4 w-36 shine"></div>
      </div>
      <div className="horizontal-line mt-2"></div>

      <div className="mt-3 mb-1 mx-2 h-4 w-36 shine"></div>
      <BannerCardSkeleton />

      <div className="horizontal-line mt-2"></div>
      <CategoryCardSkeleton />
    </div>
  );
};

export default RestrauntPageSkeleton;