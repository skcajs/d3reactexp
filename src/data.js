import MySvg from "./components/mysvgs/mysvg";
import MyCircle from "./components/mysvgs/mycircle";
import MyCircles from "./components/mysvgs/mycircles";
import MyAnimatedCircles from "./components/mysvgs/myanimatedcircles";
import MyMovingCircles from "./components/mysvgs/mymovingcirlces";

let invoices = [
  {
    name: "Santa Monica",
    number: 1995,
    amount: "$10,800",
    due: "12/05/1995",
  },
  {
    name: "Stankonia",
    number: 2000,
    amount: "$8,000",
    due: "10/31/2000",
  },
  {
    name: "Ocean Avenue",
    number: 2003,
    amount: "$9,500",
    due: "07/22/2003",
  },
  {
    name: "Tubthumper",
    number: 1997,
    amount: "$14,000",
    due: "09/01/1997",
  },
  {
    name: "Wide Open Spaces",
    number: 1998,
    amount: "$4,600",
    due: "01/27/2998",
  },
];

let d3Examples = [
  {
    name: "Golden square",
    id: "goldsquare",
    component: <MySvg />,
  },
  {
    name: "Circle",
    id: "circle",
    component: <MyCircle />,
  },
  {
    name: "Circles",
    id: "circles",
    component: <MyCircles />,
  },
  {
    name: "Animated Circles",
    id: "animatedcircles",
    component: <MyAnimatedCircles />,
  },
  {
    name: "Moving Circles",
    id: "movingcircles",
    component: <MyMovingCircles />,
  },
];

export function getInvoices() {
  return invoices;
}

export function getInvoice(number) {
  return invoices.find((invoice) => invoice.number === number);
}

export function getD3Examples() {
  return d3Examples;
}

export function getD3Example(id) {
  return d3Examples.find((example) => example.id === id);
}

export function generateDataset(n = 10, x = 600, y = 300) {
  return Array(n)
    .fill(0)
    .map((p, i) => [
      Math.random() * (x - 30) + 15,
      Math.random() * (y - 30) + 15,
      i,
    ]);
}

export function permutateDataset(dataset) {
  return dataset.map((p, i) => [
    p[0] + (Math.round(Math.random()) * 2 - 1) * Math.random(),
    p[1] + (Math.round(Math.random()) * 2 - 1) * Math.random(),
    i,
  ]);
}
