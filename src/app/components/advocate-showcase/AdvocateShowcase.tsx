import { AdvocateCard } from "../advocate-card/AdvocateCard";

export function AdvocateShowcase() {
  const mockAdvocates = [
    {
      name: "Sarah Mitchell",
      location: "Chicago",
      specialties: ["Depression", "Anxiety", "PTSD"],
    },
    {
      name: "Michael Chen",
      location: "Seattle",
      specialties: ["Eating Disorders", "Trauma", "Self-Harm"],
    },
    {
      name: "Jane Rodriguez",
      location: "Boston",
      specialties: ["Substance Abuse", "Bipolar Disorder", "ADHD"],
    },
    {
      name: "Robert Davis",
      location: "Austin",
      specialties: ["OCD", "Panic Disorder", "Social Anxiety"],
    },
  ];

  return (
    <div>
      <h2 className="text-4xl font-thin mb-6">Advocate Showcase</h2>
      <div className="flex gap-12 justify-evenly flex-wrap pt-24">
        {mockAdvocates.map((advocate) => (
          <AdvocateCard advocate={advocate} orientation="horizontal" />
        ))}
      </div>
    </div>
  );
}
