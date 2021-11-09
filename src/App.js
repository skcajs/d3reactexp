import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>D3 with React Experimental Project</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link style={{ padding: "1rem" }} to="/intro">
          Introduction
        </Link>
        <Link style={{ padding: "1rem" }} to="/invoices">
          Invoices
        </Link>
        <Link style={{ padding: "1rem" }} to="/d3examples">
          D3 Examples
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}
