/**
 * CoreServices — MasterNode's 3 flagship service offerings
 *
 * 1. AI-Powered Applications
 * 2. Automation Agents & Agentic AI
 * 3. AIM PA (AI Master Personal Assistant)
 */

import { Layers, Bot, Crown } from "lucide-react";
import { coreServices } from "@/data/coreServices";
import { SectionWrapper, SectionHeader } from "@/components/shared/section-wrapper";
import { CoreServiceCard } from "./CoreServiceCard";

const SERVICE_ICONS = [Layers, Bot, Crown];

export function CoreServices() {
  return (
    <SectionWrapper id="case-studies" bgEffect="mesh-2">
      <SectionHeader
        eyebrow="What We Build"
        title="MasterNode"
        titleAccent="Core Services."
        subtitle="Three powerhouse offerings designed to put AI to work for your business — whether you need stunning applications, tireless automation, or an elite AI-augmented executive assistant."
      />

      <div className="grid gap-8 lg:grid-cols-3">
        {coreServices.map((cs, i) => (
          <CoreServiceCard key={cs.id} service={cs} icon={SERVICE_ICONS[i]} />
        ))}
      </div>
    </SectionWrapper>
  );
}
