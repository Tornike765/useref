import React, {useRef,useState,useEffect} from "react";

const App = () => {
    const inputRef = useRef(null);
    const [counter, setCounter] = useState(null);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isRunning) {
            interval = setInterval(() => {
                setCounter((prev) => prev + 1);
            }, *1000);
        else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <h1>Basic</h1>
            <h2>{counter}</h2>

            <button onClick={() => setIsRunning(!isRunning)}>{isRunning ? "Pause" : "start"}</button>
            <button onClick={() => setCounter(null)}>Restart</button>

            <div>
                <input ref={inputRef} placeholder="Write something..."/>
                <button onClick={focusInput}>focus</button>
            </div>
        </div>
    );
};

export default App;