import { useEffect, useState } from "react";

// Use this component to make an animation of rolling numbers

// targetNumber should be the last number you want to display
// duration is the time of animation
// step time is the gap it takes to display each number

export const RollingNumber = ({ targetNumber, duration, stepTime }) => {
    const [currentNumber, setCurrentNumber] = useState(0);

    useEffect(() => {
        const totalSteps = duration / stepTime;
        const stepValue = targetNumber / totalSteps;

        const interval = setInterval(() => {
            setCurrentNumber(prevNumber => {
                if (prevNumber >= targetNumber) {
                    clearInterval(interval);
                    return targetNumber;
                }
                return Math.min(prevNumber + stepValue, targetNumber);
            });
        }, stepTime);

        return () => clearInterval(interval);
    }, [targetNumber, duration, stepTime]);

    return <h1 className="text-5xl font-bold font-montserrat">{Math.floor(currentNumber)} +</h1>
};