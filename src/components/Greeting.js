import React from 'react';

const Greeting = () => {
    const getGreetingMessage = () => {
        const hours = new Date().getHours();
        if (hours < 12) {
            return "Good Morning!";
        } else if (hours < 18) {
            return "Good Afternoon!";
        } else {
            return "Good Evening!";
        }
    };

    return (
        <div className="greeting">{getGreetingMessage()}</div>
    );
};

export default Greeting;