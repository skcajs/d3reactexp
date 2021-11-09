import { useParams } from "react-router-dom";
import { getD3Example } from "../data";

export default function Invoice() {
  let params = useParams();
  let d3example = getD3Example(params.exampleId);
  return <main style={{ padding: "1rem" }}>{d3example.component}</main>;
}
