import { AdvocateCard } from "../advocate-card/AdvocateCard";

interface Advocate {
  id: number;
  firstName: string;
  lastName: string;
  city: string;
  degree: string;
  specialties: string[];
  yearsOfExperience: number;
  phoneNumber: number;
}

interface SearchResultsProps {
  advocates: Advocate[];
  searchQuery?: string;
  location?: string;
}

export function SearchResults({
  advocates,
  searchQuery,
  location,
}: SearchResultsProps) {
  const resultsCount = advocates.length;
  const hasFilters = searchQuery || location;

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-thin mb-2">
          {hasFilters ? "Search Results" : "All Advocates"}
        </h2>
        <p className="text-gray-600">
          {resultsCount} {resultsCount === 1 ? "advocate" : "advocates"} found
          {searchQuery && ` for "${searchQuery}"`}
          {location && ` in ${location}`}
        </p>
      </div>

      {advocates.length > 0 ? (
        <div className="flex gap-24 justify-start flex-wrap pt-12">
          {advocates.map((advocate) => (
            <AdvocateCard
              key={advocate.id}
              advocate={advocate}
              orientation="horizontal"
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-xl text-gray-600 mb-4">
            No advocates found matching your search criteria.
          </p>
          <p className="text-gray-500">
            Try adjusting your search terms or clearing filters.
          </p>
        </div>
      )}
    </div>
  );
}
