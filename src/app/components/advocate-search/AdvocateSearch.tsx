"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export function AdvocateSearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchText, setSearchText] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  useEffect(() => {
    setSearchText(searchParams.get("q") || "");
    setLocation(searchParams.get("location") || "");
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams();
    if (searchText) params.set("q", searchText);
    if (location) params.set("location", location);

    router.push(`/advocates?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className="w-full">
      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="condition, specialty, procedure, or name"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#265b4e] flex-1 text-black"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <input
          type="text"
          placeholder="location"
          list="locations"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#265b4e] w-48 text-black"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        {/* @TODO: Make Dynamic and Improve Design */}
        <datalist id="locations">
          <option value="Chicago" />
          <option value="Seattle" />
          <option value="Boston" />
          <option value="Austin" />
          <option value="New York" />
          <option value="San Francisco" />
          <option value="Los Angeles" />
        </datalist>

        <button
          type="submit"
          className="px-6 py-2 bg-[#1d4639] text-white rounded-md hover:bg-[#f5f5f5] hover:text-[#1d4639] focus:outline-none focus:ring-2 focus:ring-[#265b4e]"
        >
          Search
        </button>
      </div>
    </form>
  );
}
