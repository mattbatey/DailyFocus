import React, { useEffect, useState } from 'react';

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    };

    return (
        <div className="clock">{formatTime(time)}</div>
    );
};

export default Clock;