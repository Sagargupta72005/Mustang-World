import HeroSkeleton from "./homeskeleton/HeroSkeleton";
import TextPressureSkeleton from "./homeskeleton/TextPressureSkeleton";
import Skeleton from "./Skeleton";

export default function skeletonPage() {
  return (
    <div className="px-6 md:px-12 lg:px-40 py-20">
        <HeroSkeleton />
      <TextPressureSkeleton />
    </div>
  );
}
