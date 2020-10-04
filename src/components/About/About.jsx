import React, { useState } from "react";
import "./About.css";

export default function About(props) {
    const [open, setOpen] = useState(false);
    if (open) {
        return (
            <div>
            <h1 class="about-header" onClick={() => setOpen(false)}>v {props.title}</h1>
            <div>
            {props.children}
            </div>
            </div>
        );
    } else {
        return (
            <div>
            <h1 class="about-header" onClick={() => setOpen(true)}>&gt; {props.title}</h1>
            </div>
        );
    }
}
