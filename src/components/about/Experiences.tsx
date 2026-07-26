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
      {/* Grid similar to arinkhanna.com: responsive 1/2/3 columns with roomy cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((exp, i) => (
          <Card
            key={`${exp.company}-${i}`}
            className="p-6 cursor-pointer hover:scale-[1.02] transition-transform duration-200"
            onClick={() => openExperience(i)}
          >
            <Flex direction="column" center>
              <div className="w-28 h-28 relative mb-4 flex items-center justify-center">
                {exp.logo ? (
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 80px, 112px"
                  />
                ) : (
                  <div className="w-20 h-20 bg-gray-200 rounded-full" />
                )}
              </div>
              <Heading variant="heading-strong-s" className="text-base text-center">
                {exp.company}
              </Heading>
              <Text className="text-sm text-center mt-1">{exp.role}</Text>
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
