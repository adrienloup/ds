import { useEffect, useRef, useState } from "react";

export function TestUseRefHeight() {
  console.log("TestUseRefHeight");
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      console.log(ref.current.offsetHeight);
      setHeight(ref.current.offsetHeight);
    }
  }, []);

  return (
    <div style={{ marginTop: "2rem" }}>
      <div ref={ref}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eum iure
        quod expedita, facere labore nostrum impedit hic deleniti amet nemo
        velit tempore iste pariatur molestiae repellat alias earum libero.
      </div>
      <div style={{ marginTop: "1rem" }}>Height {height}</div>
    </div>
  );
}
