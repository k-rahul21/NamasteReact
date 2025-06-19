import CardSkeleton from "../CardSkeleton/CardSkeleton";
import HeaderSkeleton from "../Header/HeaderSkeleton";
import QuickFilterSkeleton from "../QuickFilters/QuickFilterSkeleton";

const SkeletonListing = () => {
  return (
    <div className="ml-5">
      <HeaderSkeleton/>
      <div className="flex mt-5 gap-2">
        {Array(6)
        .fill(0)
        .map((e, index) => (
          <QuickFilterSkeleton key={index}/>
        ))}
      </div>
      <div className="flex flex-wrap mt-5 gap-5">
      {Array(15)
        .fill(0)
        .map((e, index) => (
          <CardSkeleton key={index} />
        ))}
    </div>
    </div>
    
  );
};

export default SkeletonListing;