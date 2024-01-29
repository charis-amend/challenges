import Link from "../components/Link";

export default function HomePage({ lightsAreOnCount }) {
  return (
    <div>
      <h1>Home</h1>
      <p>{lightsAreOnCount} light(s) are on.</p>
      <p>
        <Link href="/rooms">Rooms All Lights →</Link>
      </p>
      <p>
        <Link href="/actions">Quick actions →</Link>
      </p>
    </div>
  );
}
