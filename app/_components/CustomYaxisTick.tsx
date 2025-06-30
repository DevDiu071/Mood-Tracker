export const CustomYAxisTick = ({ x, y, payload }) => {
  const offset = -8; // shift label upward by 8px

  let label = "";
  const value = payload.value;
  if (value >= 9) label = "9+ hours";
  else if (value >= 7) label = "7–8 hours";
  else if (value >= 5) label = "5–6 hours";
  else if (value >= 3) label = "3–4 hours";
  else label = "0–2 hours";

  return (
    <text x={x - 10} y={y + offset} textAnchor="end" fontSize={12}>
      {label}
    </text>
  );
};
