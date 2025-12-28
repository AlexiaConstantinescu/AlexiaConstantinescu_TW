
import React, { useState } from "react";

const App = () => {
    const [status, setStatus] = useState("idle");

    return (
        <div className="container">

            {status === "idle" && <p>Apasa un buton</p>}

            {status === "loading" && <p>Se incarca...</p>}

            {status === "success" && <p>Succes</p>}

            {status === "error" && <p>Eroare</p>}

            <button onClick={() => setStatus("loading")}>Loading</button>
            <button onClick={() => setStatus("success")}>Success</button>
            <button onClick={() => setStatus("error")}>Error</button>
            <button onClick={() => setStatus("idle")}>Reset</button>

        </div>
    );
};

export default App;
