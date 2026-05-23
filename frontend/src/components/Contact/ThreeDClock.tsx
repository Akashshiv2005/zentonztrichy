import React, { useState, useEffect } from "react";
import "./ThreeDClock.css";

const DIGIT_BARS = [
  ['end', 'top'],
  ['side', 'top', 'left'],
  ['side', 'top', 'right'],
  ['middle'],
  ['side', 'bottom', 'left'],
  ['side', 'bottom', 'right'],
  ['end', 'bottom']
];

const Digit: React.FC<{ digit: string }> = ({ digit }) => (
  <div className="metty-digit" data-digit={digit}>
    {DIGIT_BARS.map((classes, i) => (
      <span key={i} className={classes.join(" ")} />
    ))}
  </div>
);

const ClockDigits: React.FC<{ h: string; m: string; s: string }> = ({ h, m, s }) => (
  <div className="metty-digits-group">
    <div className="metty-digit-pair">
      <Digit digit={h[0]} />
      <Digit digit={h[1]} />
    </div>
    <div className="metty-colon-dots" />
    <div className="metty-digit-pair">
      <Digit digit={m[0]} />
      <Digit digit={m[1]} />
    </div>
    <div className="metty-colon-dots" />
    <div className="metty-digit-pair">
      <Digit digit={s[0]} />
      <Digit digit={s[1]} />
    </div>
  </div>
);

const ThreeDClock: React.FC = () => {
  const [time, setTime] = useState({ h: "00", m: "00", s: "00", p: "AM" });

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const fmt = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
      });
      const parts = fmt.formatToParts(now);
      let h = "00", m = "00", s = "00", p = "AM";
      parts.forEach(px => {
        if (px.type === "hour") h = px.value.padStart(2, "0");
        if (px.type === "minute") m = px.value.padStart(2, "0");
        if (px.type === "second") s = px.value.padStart(2, "0");
        if (px.type === "dayPeriod") p = px.value;
      });
      setTime({ h, m, s, p });
    };
    update();
    const tid = setInterval(update, 1000);
    return () => clearInterval(tid);
  }, []);

  return (
    <div className="metty-wrapper">
      <div className="metty-camera-wrapper">
        {/* Main Clock Layer - Solo for maximum performance */}
        <div className="metty-clock-main">
          <ClockDigits {...time} />
        </div>
      </div>
    </div>
  );
};

export default ThreeDClock;
