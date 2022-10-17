import { useEffect, useState } from "react";

const useCounter = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((count) => count + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return counter;
}
export default useCounter;