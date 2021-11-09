import { useState, useEffect, useRef } from "react";
import { generateDataset } from "../../data";
import { useSpring, animated } from "react-spring";
import useInterval from "../../hooks/useInterval";

const dataset = generateDataset(50);

const MyMovingCircles = () => {
  const [visibleCircles, setVisibleCircles] = useState(
    dataset.filter(() => Math.round(Math.random()))
  );
  useInterval(() => {
    setVisibleCircles(dataset.filter(() => Math.round(Math.random())));
  }, 5000);
  return visibleCircles ? (
    <svg width="600" height="300">
      {dataset.map((d) => (
        <MyMovingCircle
          key={d}
          index={d}
          isShowing={visibleCircles.some((circle) => circle[2] === d[2])}
        />
      ))}
    </svg>
  ) : (
    "Loading..."
  );
};

function MyMovingCircle({ index, isShowing }) {
  const wasShowing = useRef(false);

  useEffect(() => {
    wasShowing.current = isShowing;
  }, [isShowing]);

  const [lastIndex, setLastIndex] = useState([index[0], index[1]]);
  const [currentIndex, setCurrentIndex] = useState([
    index[0] + (Math.round(Math.random()) * 2 - 1) * Math.random() * 50,
    index[1] + (Math.round(Math.random()) * 2 - 1) * Math.random() * 50,
  ]);
  useInterval(() => {
    setLastIndex(currentIndex);
    setCurrentIndex([
      currentIndex[0] +
        (Math.round(Math.random()) * 2 - 1) * Math.random() * 10,
      currentIndex[1] +
        (Math.round(Math.random()) * 2 - 1) * Math.random() * 10,
    ]);
  }, 100);

  const styles = useSpring({
    opacity: isShowing ? 1 : 0,
    from: { x: lastIndex[0], y: lastIndex[1] },
    to: {
      x: currentIndex[0],
      y: currentIndex[1],
    },
  });

  return isShowing ? (
    <svg>
      <animated.circle
        style={{ ...styles }}
        r="5"
        cx="0"
        cy="0"
        fill={!wasShowing.current ? "darkgrey" : "lightgrey"}
      />
    </svg>
  ) : (
    ""
  );
}
export default MyMovingCircles;
