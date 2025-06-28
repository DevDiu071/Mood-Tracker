import React from "react";
import {
  ResponsiveContainer,
  YAxis,
  XAxis,
  LineChart as LineGraph,
  Line,
  Tooltip,
  Legend,
} from "recharts";
const data = [
  { date: "March 31", hours: 5, mood: "sad" },
  { date: "April 02", hours: 7, mood: "calm" },
  { date: "April 04", hours: 3, mood: "sad" },
  { date: "April 06", hours: 5, mood: "neutral" },
  { date: "April 07", hours: 6, mood: "neutral" },
  { date: "April 09", hours: 9, mood: "happy" },
  { date: "April 10", hours: 4, mood: "calm" },
  { date: "April 12", hours: 6, mood: "sad" },
  { date: "April 13", hours: 7, mood: "neutral" },
  { date: "April 14", hours: 3, mood: "sad" },
  { date: "April 15", hours: 9, mood: "happy" },
];

function LineChart() {
  return (
    <div>
      <ResponsiveContainer width={"100%"} height={350}>
        <LineGraph
          data={data}
          margin={{ top: 0, bottom: 0, right: 0, left: 0 }}
        >
          <YAxis
            dataKey={"hours"}
            axisLine={true}
            tickLine={true}
            fontSize={13}
            padding={{ top: 0, bottom: 0 }}
            stroke="#60A5FA"
            tickFormatter={(value) => `${value} hours`}
          />
          <XAxis
            dataKey={"date"}
            axisLine={false}
            tickLine={true}
            fontSize={13}
            padding={{ left: 0, right: 0 }}
            stroke="#60A5FA"
          />
          <Line
            type="monotone"
            dataKey="hours"
            stroke="#60A5FA"
            strokeWidth={3}
            dot={false}
          />
          <Tooltip />
        </LineGraph>
      </ResponsiveContainer>
    </div>
  );
}

export default LineChart;
