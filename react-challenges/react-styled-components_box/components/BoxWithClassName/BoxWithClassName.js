export default function BoxWithClassName({ $makeBoxBlackProp }) {
  return (
    <div
      className={`greenbox-with-classname${$makeBoxBlackProp ? " greenbox-with-classname--black" : ""
        }`}
    ></div>
  );
}

