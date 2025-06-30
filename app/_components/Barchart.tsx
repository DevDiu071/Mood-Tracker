"use client";
import {
  Bar,
  YAxis,
  XAxis,
  BarChart as BarGrahp,
  ResponsiveContainer,
  Cell,
  ReferenceLine,
} from "recharts";

import React from "react";
import EmojiLabel from "./EmojiLabel";

const data = [
  { date: "March 31", hours: 5, mood: 2 },
  { date: "April 02", hours: 7, mood: 1 },
  { date: "April 10", hours: 5, mood: -1 },
  { date: "April 12", hours: 9, mood: 2 },
  { date: "April 13", hours: 7, mood: 1 },
  { date: "April 10", hours: 5, mood: -1 },
  { date: "April 12", hours: 6, mood: 0 },
  { date: "April 13", hours: 7, mood: 1 },
  { date: "April 14", hours: 3, mood: -2 },
  { date: "April 15", hours: 1, mood: -2 },
];

function Barchart() {
  return (
    <div>
      <ResponsiveContainer width={"100%"} height={330}>
        <BarGrahp data={data} margin={{ top: 0, right: 0, bottom: 5, left: 0 }}>
          <YAxis
            dataKey={"hours"}
            axisLine={false}
            tickLine={false}
            fontSize={14}
            stroke="#57577B"
            padding={{ top: 0, bottom: 0 }}
            tick={({ x, y, payload }) => {
              let label = "";
              if (payload.value >= 9) label = "9+ hours";
              else if (payload.value >= 7) label = "7–8 hours";
              else if (payload.value >= 5) label = "5–6 hours";
              else if (payload.value >= 3) label = "3–4 hours";
              else label = "0–2 hours";

              return (
                <g transform={`translate(${x - 70}, ${y})`}>
                  {/* Image (icon) */}
                  <image
                    href="/assets/images/icon-sleep.svg" // 👈 Replace with your actual image path
                    x={0}
                    y={-7}
                    width={8.75}
                    height={10}
                  />
                  {/* Text next to image */}
                  <text
                    x={20}
                    y={4}
                    textAnchor="start"
                    fill="#57577B"
                    fontSize={14}
                  >
                    {label}
                  </text>
                </g>
              );
            }}
            ticks={[1, 3, 5, 7, 9]} // This decides where the labels appear
            width={80}
            domain={[0, 10]}
          />
          {[1, 3, 5, 7, 9].map((y, i) => (
            <ReferenceLine key={i} y={y} stroke="#ddd" strokeWidth={1} />
          ))}
          <XAxis
            dataKey={"date"}
            tickLine={false}
            axisLine={false}
            fontSize={14}
            stroke="#57577B"
            padding={{ left: 15, right: 0 }}
            tick={({ x, y, payload }) => {
              const [month, date] = payload.value.split(" ");
              return (
                <text
                  x={x}
                  y={y + 15}
                  textAnchor="middle"
                  fill="#57577B"
                  fontSize={12}
                >
                  <tspan x={x} dy={"-0.4em"}>
                    {month}
                  </tspan>
                  <tspan className="font-bold " x={x} dy={"1.4em"}>
                    {date}
                  </tspan>
                </text>
              );
            }}
          />
          <Bar
            dataKey="hours"
            radius={[50, 50, 25, 25]}
            barSize={40}
            label={(props) => (
              <EmojiLabel
                x={props.x}
                y={props.y}
                width={props.width}
                mood={data[props.index].mood}
              />
            )}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  entry.mood === 2
                    ? "#FFC97C" // Yellow
                    : entry.mood === 1
                    ? "#89E780" // Green
                    : entry.mood === 0
                    ? "#B8B1FF" // Blue
                    : entry.mood === -1
                    ? "#89CAFF" // Purple
                    : "#FF9B99" // Red
                }
              />
            ))}
          </Bar>
          {/* <CartesianGrid horizontal={true} vertical={false} /> */}
        </BarGrahp>
      </ResponsiveContainer>
    </div>
  );
}

export default Barchart;
