import { useEffect, useState } from "react";

export function TestUseEffectTimer() {
  console.log("TestUseEffectTimer");

  const [duration, setDuration] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(duration);

  const handleChange = (value: number) => {
    setDuration(value);
    setSecondsLeft(value);
  };

  useEffect(() => {
    console.log("TestUseEffectTimer > useEffect [duration]");
    const timer = setInterval(() => {
      console.log("TestUseEffectTimer > setInterval id", timer);
      setSecondsLeft((value) => {
        if (value <= 1) {
          clearInterval(timer);
          return 0;
        }
        return value - 1;
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
