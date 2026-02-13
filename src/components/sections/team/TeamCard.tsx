/**
 * TeamCard — Individual team member profile card
 */

import { Linkedin, Twitter } from "lucide-react";
import type { TeamMember } from "@/data/team";

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="group rounded-2xl border border-mn-slate/40 bg-mn-navy/60 p-6 text-center transition hover:border-mn-electric/30 hover:shadow-lg hover:shadow-mn-electric/5">
      <div className="mx-auto mb-5 h-24 w-24 overflow-hidden rounded-full border-2 border-mn-slate/40 bg-mn-slate/20 transition group-hover:border-mn-electric/40">
        <img src={member.avatar} alt={member.name} className="h-full w-full object-cover" />
      </div>

      <h3 className="font-display text-lg font-bold text-mn-white">{member.name}</h3>
      <p className="mt-0.5 text-sm font-medium text-mn-electric">{member.title}</p>
      <p className="mt-3 text-xs leading-relaxed text-mn-muted">{member.bio}</p>

      <div className="mt-4 flex flex-wrap justify-center gap-1.5">
        {member.credentials.map((cred) => (
          <span key={cred} className="rounded-md bg-mn-slate/50 px-2 py-0.5 text-[10px] font-medium text-mn-muted">
            {cred}
          </span>
        ))}
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {member.linkedin && (
          <a href={member.linkedin} aria-label={`${member.name} LinkedIn`}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-mn-muted transition hover:bg-mn-slate/50 hover:text-mn-electric">
            <Linkedin className="h-4 w-4" />
          </a>
        )}
        {member.twitter && (
          <a href={member.twitter} aria-label={`${member.name} Twitter`}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-mn-muted transition hover:bg-mn-slate/50 hover:text-mn-electric">
            <Twitter className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
}
