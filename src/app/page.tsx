import { Hero } from "./components/hero/Hero";
import { AdvocateSearchBar } from "./components/advocate-search/AdvocateSearch";
import { AdvocateShowcase } from "./components/advocate-showcase/AdvocateShowcase";
import { PageContent } from "./components/page-content/PageContent";

export default function Home() {
  return (
    <main>
      <Hero
        title="We're Here for You"
        description="Find the right advocate to help you with your health journey"
      >
        <AdvocateSearchBar />
      </Hero>
      <PageContent>
        <AdvocateShowcase />
      </PageContent>
    </main>
  );
}
