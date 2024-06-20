import { useEffect, useState } from "react";

export function TestUseEffectTitle() {
  console.log("TestUseEffectTitle");

  const [title, setTitle] = useState("Title page");
  const [anotherState, setAnotherState] = useState("Another state");
  const [Y, setY] = useState(0);

  useEffect(() => {
    console.log("title");
    document.title = title;
  }, [title]);

  useEffect(() => {
    const originalTitle = document.title;
    return () => {
      document.title = originalTitle;
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      setY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div style={{ marginTop: "1rem" }}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div style={{ marginTop: "1rem" }}>
        <input
          type="text"
          value={anotherState}
          onChange={(e) => setAnotherState(e.target.value)}
        />
      </div>
      <div style={{ marginTop: "1rem" }}>ScollTop {Y.toFixed()}</div>
    </>
  );
}
