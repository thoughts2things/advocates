import { NavigationHeader } from "./components/NavigationHeader";
import { Hero } from "./components/Hero";
import { AdvocateSearch } from "./components/AdvocateSearch";

export default function Home() {
  return (
    <main>
      <NavigationHeader />
      <Hero title="Find Your Advocate">
        <AdvocateSearch />
      </Hero>
    </main>
  );
}
