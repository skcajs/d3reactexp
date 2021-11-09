import { useState } from "react";
import { generateDataset } from "../../data";
import useInterval from "../../hooks/useInterval";

const MyCircles = () => {
  const [dataset, setDataset] = useState(generateDataset());
  useInterval(() => {
    const newDataset = generateDataset();
    setDataset(newDataset);
  }, 2000);
  return (
    <svg width="600" height="300">
      {dataset.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="6" />
      ))}
    </svg>
  );
};

export default MyCircles;
