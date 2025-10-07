import { AdvocateSearchBar } from "../components/advocate-search/AdvocateSearch";
import { SearchResults } from "../components/search-results/SearchResults";
import { PageContent } from "../components/page-content/PageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find an Advocate | Solace",
  description:
    "Search for mental health advocates by specialty, location, or condition",
};

interface AdvocatesPageProps {
  searchParams: {
    q?: string;
    location?: string;
  };
}

export default async function Advocates({ searchParams }: AdvocatesPageProps) {
  const searchQuery = searchParams.q;
  const location = searchParams.location;

  return (
    <main>
      <div className="w-full bg-[#265b4e] text-[#f5f5f5] py-12 px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-thin mb-6">Find an Advocate</h1>
          <AdvocateSearchBar />
        </div>
      </div>

      <PageContent>
        <SearchResults searchQuery={searchQuery} location={location} />
      </PageContent>
    </main>
  );
}
