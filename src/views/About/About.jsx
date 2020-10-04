import React from "react";
import "./About.css";
import About from "../../components/About/About.jsx";

export default function AboutScreen() {
  return (
    <div className="screen-background">
      <About title="Web development skills">
        I am too cool to use &lt;detail&gt; tags and make things accessible.
      </About>

      <About title="Education">
        I learned how to add numbers when I was 5
      </About>
    </div>
  );
}
