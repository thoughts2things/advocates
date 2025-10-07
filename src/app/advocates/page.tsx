import { AdvocateSearchBar } from "../components/advocate-search/AdvocateSearch";
import { SearchResults } from "../components/search-results/SearchResults";
import { PageContent } from "../components/page-content/PageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find an Advocate | Solace",
  description:
    "Search for health advocates by specialty, location, or condition",
};

interface AdvocatesPageProps {
  searchParams: {
    q?: string;
    location?: string;
  };
}

async function getAdvocates() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/advocates`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch advocates");
    }

    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching advocates:", error);
    return [];
  }
}

export default async function Advocates({ searchParams }: AdvocatesPageProps) {
  const searchQuery = searchParams.q;
  const location = searchParams.location;
  const advocates = await getAdvocates();

  return (
    <main>
      <div className="w-full bg-[#265b4e] text-[#f5f5f5] py-12 px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-thin mb-6">Find an Advocate</h1>
          <AdvocateSearchBar />
        </div>
      </div>

      <PageContent>
        <SearchResults
          advocates={advocates}
          searchQuery={searchQuery}
          location={location}
        />
      </PageContent>
    </main>
  );
}
