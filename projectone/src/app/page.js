import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="" style={{ padding: "20px" }}>
      <Link href="/docs/javascript">JavaScript</Link> |{" "}
      <Link href="/docs/javascript/array">JavaScript Array</Link> |{" "}
      <Link href="/docs/javascript/array/map">JS Array Map</Link>
    </nav>
  );
}
