/**
 * Team — Leadership team profiles grid
 */

import { team } from "@/data/team";
import { SectionWrapper, SectionHeader } from "@/components/shared/section-wrapper";
import { TeamCard } from "./TeamCard";

export function Team() {
  return (
    <SectionWrapper id="team">
      <SectionHeader
        eyebrow="Our Team"
        title="Built by People Who've"
        titleAccent="Done It Before."
        subtitle="Our leadership team brings decades of experience from Google DeepMind, Uber, Meta, McKinsey, and top research labs. We don't just advise — we build."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </SectionWrapper>
  );
}
