"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Card, Dialog } from "@/once-ui/components";
import { Flex, Heading, Text, Button } from "@/once-ui/components";
import { about } from "@/app/resources/content";

export default function Experiences() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<number | null>(null);

  const openExperience = (index: number) => {
    setActive(index);
    setOpen(true);
  };

  const experiences = about.work.experiences || [];

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {experiences.map((exp, i) => (
          <Card key={i} className="p-4 cursor-pointer" onClick={() => openExperience(i)}>
            <Flex direction="column" center>
              <div className="w-20 h-20 relative mb-3">
                {exp.logo ? (
                  // Next/Image requires domains or local files under /public
                  <Image src={exp.logo} alt={`${exp.company} logo`} fill className="object-contain" />
                ) : (
                  <div className="w-20 h-20 bg-gray-200 rounded-full" />
                )}
              </div>
              <Heading variant="heading-strong-s" className="text-sm text-center">
                {exp.company}
              </Heading>
              <Text className="text-xs text-center mt-1">{exp.role}</Text>
            </Flex>
          </Card>
        ))}
      </div>

      {active !== null && (
        <Dialog
          isOpen={open}
          onClose={() => setOpen(false)}
          title={experiences[active].company}
          description={`${experiences[active].role} • ${experiences[active].timeframe}`}
        >
          <div>
            <Heading variant="heading-strong-s">Achievements</Heading>
            <ul className="mt-3">
              {experiences[active].achievements.map((a, idx) => (
                <li key={idx} className="mb-2 text-sm text-gray-700">{a}</li>
              ))}
            </ul>
            {experiences[active].link && (
              <div className="mt-6">
                <Button href={experiences[active].link} target="_blank" rel="noopener noreferrer">
                  View more
                </Button>
              </div>
            )}
          </div>
        </Dialog>
      )}
    </div>
  );
}
