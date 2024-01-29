import Link from "../components/Link";
import QuickActions from "../components/QuickActions/QuickActions";

export default function Actions({ lights, lightsAreOnCount, handleToggleAllOff, handleToggleAllOn }) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        lights={lights}
        lightsAreOnCount={lightsAreOnCount}
        onHandleToggleAllOff={handleToggleAllOff}
        onHandleToggleAllOn={handleToggleAllOn}
      />
    </>
  );
}
