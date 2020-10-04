import React, { useState } from "react";

export default function Counter(props) {
    const [num, setNum] = useState(0);
    return (
        <div>
        <p>Click the button to increment {props.name}: {num}</p>
        <button type="button" onClick={() => setNum(num + 1)}>Click me</button>
        </div>
    );
}
