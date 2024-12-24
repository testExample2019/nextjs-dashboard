// Loading animation
const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm w-full`}
    >
      <div className="flex p-3">
        <div className="h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
      </div>
      <div className="flex items-center justify-between truncate rounded-xl bg-white p-4">
        <div className="h-7 w-10 rounded-md bg-gray-200" />
        <div className="h-7 w-20 rounded-md bg-gray-200" />
      </div>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  );
}

export function DealCardSkeleton() {
  return (
    <div className="space-y-4 shadow-md rounded-medium p-2">
      <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2 animate-pulse"></div>
      <div className="h-2 bg-gray-200 rounded-full w-full animate-pulse"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2 animate-pulse"></div>
    </div>
  );
}

export function DealCardsSkeleton() {
  return (
    <div className="space-y-4">
      <DealCardSkeleton />
      <DealCardSkeleton />
    </div>
  );
}

export function CovenantsTrackingSkeleton() {
  return (
    <section className={"w-full"}>
      <div className="h-6 bg-gray-300 rounded-medium w-1/4 mb-4 animate-pulse"></div>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded shadow space-y-2">
          <div className="h-4 bg-gray-300 rounded w-1/2 animate-pulse"></div>
          <div className="h-6 bg-gray-300 rounded w-1/4 animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded w-1/3 animate-pulse"></div>
        </div>
        <div className="p-4 bg-white rounded shadow space-y-2">
          <div className="h-4 bg-gray-300 rounded w-1/2 animate-pulse"></div>
          <div className="h-6 bg-gray-300 rounded w-1/4 animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded w-1/3 animate-pulse"></div>
        </div>
        <div className="p-4 bg-white rounded shadow space-y-2">
          <div className="h-4 bg-gray-300 rounded w-1/2 animate-pulse"></div>
          <div className="h-6 bg-gray-300 rounded w-1/4 animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded w-1/3 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

export function UpcomingPaymentsSkeleton() {
  return (
    <section>
      <div className="h-6 bg-gray-300 rounded-medium w-1/4 mb-4 animate-pulse"></div>
      <div className="flex">
        <div className="w-3/4 space-y-4">
          <div className="space-y-2 shadow-md rounded-medium bg-white p-4">
            <div className="h-4 bg-gray-300 rounded w-1/2 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-1/4 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-1/3 animate-pulse"></div>
          </div>
          <div className="space-y-2 shadow-md  rounded-medium bg-white p-4">
            <div className="h-4 bg-gray-300 rounded w-1/2 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-1/4 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-1/3 animate-pulse"></div>
          </div>
        </div>
        <div className="w-1/4 bg-white rounded-medium shadow p-4 ml-4">
          <div className="h-4 bg-gray-300 rounded w-full mb-4 animate-pulse"></div>
          <div className="grid grid-cols-7 gap-2">
            <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
            {/* Calendar Skeleton */}
            <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TableSkeleton() {
  return (
    <section>
      <div className="h-6 bg-gray-300 rounded-medium w-1/4 mb-4 animate-pulse"></div>
      <div className="bg-white rounded shadow">
        <div className="p-4">
          <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
        </div>
        <div className="p-4 space-y-4">
          <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
export const SideNavSkeleton = () => (
  <aside className="w-64 bg-white shadow-md">
    <div className="p-4 border-b">
      <div className="h-10 bg-gray-300 rounded-medium w-full animate-pulse"></div>
    </div>
    <div className="p-4">
      {/* Skeleton for Deals List */}
      <DealCardsSkeleton />
    </div>
  </aside>
);

export default function DashboardSkeleton() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar Skeleton */}
      <SideNavSkeleton />
      {/* Main Content Skeleton */}
      <div className="flex-1 flex flex-col">
        {/* Header Skeleton */}
        <header className="bg-white p-5 flex justify-between items-center">
          <div className="h-6 bg-gray-300 rounded-medium w-1/4 animate-pulse"></div>
          <div className="flex space-x-4">
            <div className="h-8 bg-gray-300 rounded-medium w-16 animate-pulse"></div>
            <div className="h-8 bg-gray-300 rounded-medium w-16 animate-pulse"></div>
          </div>
        </header>

        {/* Content Skeleton */}
        <div className="flex-1 overflow-auto p-6 space-y-10">
          {/* Covenants Tracking Skeleton */}
          <CovenantsTrackingSkeleton />
          {/* Upcoming Payments Skeleton */}
          <UpcomingPaymentsSkeleton />
          {/* Positions Table Skeleton */}
          <TableSkeleton />
        </div>
      </div>
    </div>
  );
}
