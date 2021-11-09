import { useState, useEffect, useRef } from "react";
import { generateDataset } from "../../data";
import { useSpring, animated } from "react-spring";
import useInterval from "../../hooks/useInterval";

const dataset = generateDataset(50);

const MyAnimatedCircles = () => {
  const [visibleCircles, setVisibleCircles] = useState(
    dataset.filter(() => Math.round(Math.random()))
  );

  useInterval(() => {
    setVisibleCircles(dataset.filter(() => Math.round(Math.random())));
  }, 3200);

  return visibleCircles ? (
    <svg width="600" height="300">
      {dataset.map((d) => (
        <MyAnimatedCircle
          key={d}
          index={d}
          isShowing={visibleCircles.includes(d)}
        />
      ))}
    </svg>
  ) : (
    "Loading..."
  );
};

const MyAnimatedCircle = ({ index, isShowing }) => {
  const wasShowing = useRef(false);

  useEffect(() => {
    wasShowing.current = isShowing;
  }, [isShowing]);

  const style = useSpring({
    config: {
      duration: 1600,
    },
    r: isShowing ? 6 : 0,
    opacity: isShowing ? 1 : 0,
  });

  return (
    <animated.circle
      {...style}
      cx={index[0]}
      cy={index[1]}
      r="12"
      fill={
        !isShowing
          ? "tomato"
          : !wasShowing.current
          ? "cornflowerblue"
          : "lightgrey"
      }
    />
  );
};

export default MyAnimatedCircles;
