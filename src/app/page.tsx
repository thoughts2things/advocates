import { NavigationHeader } from "./components/navigation-header/NavigationHeader";
import { Hero } from "./components/hero/Hero";
import { AdvocateSearch } from "./components/advocate-search/AdvocateSearch";
import { AdvocateShowcase } from "./components/advocate-showcase/AdvocateShowcase";
import { PageContent } from "./components/page-content/PageContent";

export default function Home() {
  return (
    <main>
      <Hero title="Find Your Advocate">
        <AdvocateSearch />
      </Hero>
      <PageContent>
        <AdvocateShowcase />
      </PageContent>
    </main>
  );
}
