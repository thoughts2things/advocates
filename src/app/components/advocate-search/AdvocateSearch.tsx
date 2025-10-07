"use client";

import Link from "next/link";
import { useState } from "react";

export function AdvocateSearch() {
  // @TODO: Debounce Search
  const [searchText, setSearchText] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  return (
    <div className="space-y-4 p-8">
      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="condition, specialty, procedure, or name"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#265b4e] w-96 text-black"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <input
          type="text"
          placeholder="location"
          list="locations"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#265b4e] text-black"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        {/* @TODO: Make Dynamic and Improve Design */}
        <datalist id="locations">
          <option value="New York" />
          <option value="San Francisco" />
          <option value="Los Angeles" />
          <option value="Chicago" />
        </datalist>

        <Link
          href={"/advocates"}
          className="px-6 py-2 bg-[#1d4639] text-white rounded-md hover:bg-[#f5f5f5] hover:text-[#1d4639] focus:outline-none focus:ring-2 focus:ring-[#265b4e]"
        >
          Search
        </Link>
      </div>
    </div>
  );
}
