import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const DashboardSkeleton = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Header skeleton */}
      <div className="flex items-center justify-between">
        <Skeleton className="h-8 w-1/3 rounded-lg" />
        <Skeleton className="h-8 w-16 rounded-lg" />
      </div>

      {/* Summary cards skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-md space-y-4"
          >
            <Skeleton className="h-5 w-1/2 rounded-lg" />
            <Skeleton className="h-8 w-full rounded-lg" />
            <Skeleton className="h-4 w-3/4 rounded-lg" />
          </div>
        ))}
      </div>

      {/* Table skeleton */}
      <div className="space-y-4">
        <Skeleton className="h-6 w-1/4 rounded-lg" />
        <div className="border rounded-lg overflow-hidden">
          <div className="grid grid-cols-4 gap-2 p-4 bg-gray-100">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
          </div>
          <div className="space-y-2 p-4">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="grid grid-cols-4 gap-2">
                <Skeleton className="h-6 w-full rounded-lg" />
                <Skeleton className="h-6 w-full rounded-lg" />
                <Skeleton className="h-6 w-full rounded-lg" />
                <Skeleton className="h-6 w-full rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSkeleton;
