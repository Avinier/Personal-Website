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
  const tableBorder = "border border-pastel--purple border-1 text-slate-50";

  return (
    <table className="w-fit mx-auto dark:text-main">
      <tr className="font-content dark:text-main">
        <th className={`w-[30%] ${tableBorder}`}>Skill</th>
        <th className={`w-[40%] ${tableBorder}`}>Domain</th>
        <th className={`w-[30%] ${tableBorder}`}>Level</th>
      </tr>
      {SKILLDATA.map((skillitem) => {
        return (
          <tr key={skillitem.id} className="font-content dark:text-main">
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
