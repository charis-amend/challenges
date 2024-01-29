import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "@/components/BoxWithStyledComponents.js";

export default function HomePage() {
  return (
    <div>
      {/* the default green box: */}
      <BoxWithClassName />
      {/* making same box black: */}
      <BoxWithClassName $makeBoxBlackProp />


      {/* having a default orange box: */}
      <BoxWithStyledComponents />
      {/* making other box blue: */}
      <BoxWithStyledComponents $makeOtherBoxBlueProp />
    </div>
  );
}
