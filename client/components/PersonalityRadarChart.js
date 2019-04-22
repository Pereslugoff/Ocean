import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Tooltip
} from "recharts";

const windowWidth = window.outerWidth;

let width;

if (windowWidth < 800) {
  width = 325;
} else {
  width = 425;
}

console.log(windowWidth, width);

const PersonalityRadar = props => {
  const data = props.traits.map(trait => {
    let nodes = trait.split(" - ");
    let score = Math.round(+nodes[1] * 100);
    let name = nodes[0];
    return { name, A: score, fullMark: 100 };
  });
  return (
    <RadarChart outerRadius={90} width={width} height={250} data={data}>
      <PolarGrid />
      <Radar
        name="Score"
        dataKey="A"
        stroke="#ef43e4"
        fill="#ef43e4"
        fillOpacity={0.6}
      />
      <Tooltip
        formatter={(a, b, c) => {
          return [a, c.payload.name];
        }}
      />
    </RadarChart>
  );
};

export default PersonalityRadar;
