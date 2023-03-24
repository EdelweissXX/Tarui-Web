import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import style from "./index.module.scss";

function Time() {
  const [time, setTime] = useState<any>();
  useEffect(() => {
    setTime(dayjs(new Date()).format("HH:mm:ss"));
    setInterval(() => {
      setTime(dayjs(new Date()).format("HH:mm:ss"));
    }, 1000);
  });

  return <span className={style.time}>{time}</span>;
}

export default Time;
