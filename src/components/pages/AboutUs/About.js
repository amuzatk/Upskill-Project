import React from "react";
import { Bounce } from "react-awesome-reveal";

import "./About.css";

export default function About() {
  return (
    <div>
      <h1>About Page</h1>

      <Bounce>
        <p className="p1">
          I would have loved to implement a nice job, unfortunately TIME didn't
          permit. <br /> I would be glad if considered for the internship to
          give me room for learning more from your professionals. <br /> Thanks
          for the challenge and looking forward to joining your team. <br />{" "}
          Regards.
        </p>

        <p className="p2">Kindly have a look at its mobile responsiveness.</p>
      </Bounce>
    </div>
  );
}
