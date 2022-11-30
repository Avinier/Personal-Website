import React from "react";

const SKILLDATA = [
  {
    id: 1,
    skill: "React",
    domain: "Frontend Web Dev",
    level: "Intermediate",
  },
  {
    id: 2,
    skill: "React",
    domain: "Frontend Web Dev",
    level: "Intermediate",
  },
  {
    id: 3,
    skill: "React",
    domain: "Frontend Web Dev",
    level: "Intermediate",
  },
  {
    id: 4,
    skill: "React",
    domain: "Frontend Web Dev",
    level: "Intermediate",
  },
  {
    id: 5,
    skill: "React",
    domain: "Frontend Web Dev",
    level: "Intermediate",
  },
  {
    id: 6,
    skill: "React",
    domain: "Frontend Web Dev",
    level: "Intermediate",
  },
];
export default function SkillTable() {
  const tableBorder =
    "border-dashed border-pastel--purple border-2 text-slate-50";

  return (
    <table>
      <tr className="font-content">
        <th className={`w-[30%] ${tableBorder}`}>Skill</th>
        <th className={`w-[40%] ${tableBorder}`}>Domain</th>
        <th className={`w-[30%] ${tableBorder}`}>Level</th>
      </tr>
      {SKILLDATA.map((skillitem) => {
        return (
          <tr key={skillitem.id} className="font-content">
            <td className={`w-[20%] text-center ${tableBorder}`}>
              {skillitem.skill}
            </td>
            <td className={`w-[40%] text-center ${tableBorder} px-5 py-1`}>
              {skillitem.domain}
            </td>
            <td className={`w-[40%] text-center ${tableBorder}`}>
              {skillitem.level}
            </td>
          </tr>
        );
      })}
    </table>
  );
}
