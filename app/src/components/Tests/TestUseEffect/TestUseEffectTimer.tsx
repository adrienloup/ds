import { useEffect, useState } from "react";

export function TestUseEffectTimer() {
  console.log("TestUseEffectTimer");

  const [duration, setDuration] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(duration);

  const handleChange = (v: number) => {
    setDuration(v);
    setSecondsLeft(v);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((v) => {
        if (v <= 1) {
          clearInterval(timer);
          return 0;
        }
        return v - 1;
      });
    }, 1e3);

    return () => {
      clearInterval(timer);
    };
  }, [duration]);

  return (
    <div style={{ marginTop: "2rem" }}>
      <div style={{ marginBottom: "1rem" }}>Countdown {secondsLeft}</div>
      <input
        type="text"
        value={duration}
        onChange={(e) => handleChange(Number(e.target.value))}
        placeholder="Timer"
      />
    </div>
  );
}
