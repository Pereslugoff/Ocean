import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Tooltip
} from "recharts";

// [ 'openness - 0.9673090433832561',
//   'conscientiousness - 0.43458489741544115',
//   'extraversion - 0.09352659273513364',
//   'agreeableness - 0.00011902869179691855',
//   'neuroticism - 0.9534791615098828' ]

// const data = [
//   {
//     subject: "Openness",
//     A: 96,
//     fullMark: 100
//   },
//   {
//     subject: "Conscientiousness",
//     A: 43,
//     fullMark: 100
//   },
//   {
//     subject: "Extraversion",
//     A: 93,
//     fullMark: 100
//   },
//   {
//     subject: "Agreeablesness",
//     A: 0,
//     fullMark: 100
//   },
//   {
//     subject: "Neuroticism",
//     A: 95,
//     fullMark: 100
//   }
// ];

//   ["openness - 0.998059944644803", "conscientiousness - 0.6148708300835475", "extraversion - 0.037876201514994046", "agreeableness - 0.06531220404013804", "neuroticism - 0.6001621234563344"]

// let dummy = ["openness - 0.998059944644803", "conscientiousness - 0.6148708300835475", "extraversion - 0.037876201514994046", "agreeableness - 0.06531220404013804", "neuroticism - 0.6001621234563344"]

const PersonalityRadar = props => {
  const data = props.traits.map(trait => {
    let nodes = trait.split(" - ");
    let score = Math.round(+nodes[1] * 100);
    let name = nodes[0];
    return { name, A: score, fullMark: 100 };
  });
  console.log(data);
  return (
    <RadarChart outerRadius={90} width={425} height={250} data={data}>
      <PolarGrid />
      {/* <PolarAngleAxis dataKey="name" /> */}
      <Radar
        name="Score"
        dataKey="A"
        stroke="#ef43e4"
        fill="#ef43e4"
        fillOpacity={0.6}
      />
      <Tooltip
            formatter={(a, b, c) => {
              return [a, c.payload.name]
            }}
      />
    </RadarChart>
  );
};

export default PersonalityRadar;
