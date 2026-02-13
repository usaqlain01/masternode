/**
 * ServicesGrid — All MasterNode service offerings in a responsive grid
 */

import { services } from "@/data/services";
import { SectionWrapper, SectionHeader } from "@/components/shared/section-wrapper";
import { ServiceCard } from "./ServiceCard";

export function ServicesGrid() {
  return (
    <SectionWrapper id="services" bgEffect="mesh-1">
      <SectionHeader
        eyebrow="What We Do"
        title="Enterprise AI Solutions."
        titleAccent="Startup Speed."
        subtitle="From strategy to deployment, we cover the entire AI lifecycle — so you can focus on running your business while we build the intelligence behind it."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
