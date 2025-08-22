export default async function DocsPage({ params }) {
  const { slug } = await params; // ye ek array hota hai

  // Agar user sirf /docs kholta hai
  if (!slug) {
    return <h1>Welcome to Docs Home Page</h1>;
  }

  // Array ko " → " se join karenge for display
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>You are reading:</h1>
      <p style={{ fontSize: "18px", color: "blue" }}>{slug.join(" → ")}</p>
    </div>
  );
}
