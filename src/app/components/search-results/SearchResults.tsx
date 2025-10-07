import { AdvocateCard } from "../advocate-card/AdvocateCard";

interface SearchResultsProps {
  searchQuery?: string;
  location?: string;
}

export function SearchResults({ searchQuery, location }: SearchResultsProps) {
  const allAdvocates = [
    {
      id: 1,
      name: "Sarah Mitchell",
      location: "Chicago",
      specialties: ["Depression", "Anxiety", "PTSD"],
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Seattle",
      specialties: ["Eating Disorders", "Trauma", "Self-Harm"],
    },
    {
      id: 3,
      name: "Jane Rodriguez",
      location: "Boston",
      specialties: ["Substance Abuse", "Bipolar Disorder", "ADHD"],
    },
    {
      id: 4,
      name: "Robert Davis",
      location: "Austin",
      specialties: ["OCD", "Panic Disorder", "Social Anxiety"],
    },
    {
      id: 5,
      name: "Emily Thompson",
      location: "Chicago",
      specialties: ["Depression", "Grief Counseling", "Family Therapy"],
    },
    {
      id: 6,
      name: "David Kim",
      location: "Seattle",
      specialties: ["Anxiety", "Stress Management", "Mindfulness"],
    },
    {
      id: 7,
      name: "Maria Garcia",
      location: "Austin",
      specialties: ["PTSD", "Veterans Support", "Trauma"],
    },
    {
      id: 8,
      name: "James Wilson",
      location: "Boston",
      specialties: ["ADHD", "Learning Disabilities", "Child Psychology"],
    },
  ];

  // Filter advocates based on search criteria
  const filteredAdvocates = allAdvocates.filter((advocate) => {
    const matchesLocation =
      !location ||
      advocate.location.toLowerCase().includes(location.toLowerCase());

    const matchesQuery =
      !searchQuery ||
      advocate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      advocate.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      advocate.specialties.some((specialty) =>
        specialty.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesLocation && matchesQuery;
  });

  const resultsCount = filteredAdvocates.length;
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

      {filteredAdvocates.length > 0 ? (
        <div className="flex gap-24 justify-start flex-wrap pt-12">
          {filteredAdvocates.map((advocate) => (
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
