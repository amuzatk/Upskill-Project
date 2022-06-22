import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBatteryFull,
  faWifi,
  faSignal,
} from "@fortawesome/free-solid-svg-icons";

import "./Timer.css";

export default function Timer() {
  var showDate = new Date();

  var displayTodaysDate =
    showDate.getDate() +
    "/" +
    (showDate.getMonth() + 1) +
    "/" +
    showDate.getFullYear();

  var dt = showDate.toDateString();

  var displayTime = showDate.getHours() + ":" + showDate.getMinutes();

  return (
    <div className="tim">
      <div className="timing">{displayTime}</div>

      <ul className="items">
        <li className="signal">
          <FontAwesomeIcon icon={faSignal} color=" #181818" fontSize={20} />
        </li>

        <li className="wifi">
          <FontAwesomeIcon icon={faWifi} color=" #181818" fontSize={20} />
        </li>

        <li className="bat">
          <FontAwesomeIcon
            icon={faBatteryFull}
            color=" #181818"
            fontSize={22}
          />
        </li>
      </ul>
    </div>
  );
}
