
//hooks

import React, { useState, useEffect } from "react";

const App = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `You clicked ${count} times`
    })

    return (
        <div className="container">
            <p>You've clicked {count} times!</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}

export default App
