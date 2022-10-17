import { useEffect, useState } from "react";

const useCounter = (forwards = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((count) => {
                return forwards ? count + 1 : count -1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [forwards]);

    return counter;
}
export default useCounter;