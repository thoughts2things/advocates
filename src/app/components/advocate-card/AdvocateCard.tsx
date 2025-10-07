"use client";

import Link from "next/link";

interface AdvocateCardProps {
  advocate: any; // @TODO: add Advocate type
  orientation: "horizontal" | "vertical";
}

export function AdvocateCard({ advocate, orientation }: AdvocateCardProps) {
  return (
    <div className="relative bg-[#eff4f2] rounded-2xl shadow-md p-6 flex flex-col items-center w-80">
      <div className="absolute top-[-60px] w-40 h-40 bg-gray-300 rounded-full flex items-center justify-center">
        <span className="text-gray-500 text-sm">Photo</span>
      </div>

      <h3 className="text-xl font-semibold text-center mb-2 pt-[80px]">
        {advocate.firstName} {advocate.lastName}
      </h3>

      <p className="text-gray-700 text-center mb-2">{advocate.city}</p>

      <p className="text-sm italic text-gray-600 text-center mb-4 line-clamp-1">
        {Array.isArray(advocate.specialties)
          ? advocate.specialties.join(", ")
          : advocate.specialties}
      </p>

      <Link
        href={`/advocates/${advocate.id}`}
        className="px-6 py-2 bg-[#265b4e] text-white rounded-md hover:bg-[#1d4639] focus:outline-none focus:ring-2 focus:ring-[#265b4e] mt-2"
      >
        View Profile
      </Link>
    </div>
  );
}
