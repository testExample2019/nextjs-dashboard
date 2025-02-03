export default function DashboardSkeleton() {
  return (
    <div className={`flex h-screen bg-white`}>
      {/* Sidebar Skeleton */}
      <SideNavSkeleton />
      {/* Main Content Skeleton */}
      <div className="flex-1 flex flex-col">
        {/* Header Skeleton */}
        <header className="bg-white p-3 flex justify-between items-center border-b border-grey-border">
          <div className="h-6 bg-gray-300 rounded w-1/4 animate-pulse"></div>
        </header>

        {/* Content Skeleton */}
        <div className="bg-white border-l border-grey-border flex-1 overflow-auto p-6 space-y-6">
          {/* Upcoming Payments Skeleton */}
          <UpcomingPaymentsSkeleton />
          {/* Positions Table Skeleton */}
          <PositionsTableSkeleton />
          {/* Covenants Tracking Skeleton */}
          <CovenantsTrackingSkeleton />
        </div>
      </div>
    </div>
  );
}

export function DealCardSkeleton() {
  return (
    <div className="space-y-4 shadow-md rounded p-2">
      <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2 animate-pulse"></div>
      <div className="h-2 bg-gray-300 rounded w-full animate-pulse"></div>
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
    <section className={`w-full`}>
      <div className="h-6 bg-gray-300 rounded w-1/4 mb-4 animate-pulse"></div>
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded shadow-sm space-y-2"
          >
            <div className="h-4 bg-gray-300 rounded w-1/2 animate-pulse"></div>
            <div className="h-6 bg-gray-300 rounded w-1/4 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-1/3 animate-pulse"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function UpcomingPaymentsSkeleton() {
  return (
    <section>
      <div className="h-6 bg-gray-300 rounded w-1/4 mb-4 animate-pulse"></div>
      <div className="flex">
        <div className="w-3/4 space-y-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="space-y-2 shadow-md rounded bg-white p-4"
            >
              <div className="h-4 bg-gray-300 rounded w-1/2 animate-pulse"></div>
              <div className="h-4 bg-gray-300 rounded w-1/4 animate-pulse"></div>
              <div className="h-4 bg-gray-300 rounded w-1/3 animate-pulse"></div>
            </div>
          ))}
        </div>
        <div className="w-1/4 bg-white rounded shadow-sm p-4 ml-4">
          <div className="h-4 bg-gray-300 rounded w-full mb-4 animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded w-full mb-4 animate-pulse"></div>

          <div className="grid grid-cols-7 gap-4">
            {Array.from({ length: 31 }).map((_, index) => (
              <div
                key={index}
                className="h-6 w-6 bg-gray-300 rounded animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PositionsTableSkeleton() {
  return (
    <section className={"w-full"}>
      <div className="h-6 bg-gray-300 rounded w-1/4 mb-4 animate-pulse"></div>
      <TableSkeleton />
    </section>
  );
}

export function TableSkeleton() {
  return (
    <div className={"w-full"}>
      <div className="bg-white rounded shadow-sm">
        <div className="p-4">
          <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
        </div>
        <div className="p-4 space-y-4">
          <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

export const SideNavSkeleton = () => (
  <aside className="w-64 bg-white shadow-md">
    <div className="flex justify-between space-x-4 py-2 px-4 border-b border-grey-border">
      <div className="h-8 bg-gray-300 rounded w-16 animate-pulse"></div>
      <div className="h-8 bg-gray-300 rounded w-16 animate-pulse"></div>
    </div>
    <div className="p-4">
      {/* Skeleton for Deals List */}
      <DealCardsSkeleton />
    </div>
  </aside>
);
