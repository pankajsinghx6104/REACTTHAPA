import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const TodoDate = () => {
  const [dateTime, setDateTime] = useState("");
    useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
   <h2 className="date-time">{dateTime}</h2>
  )
}

export default TodoDate
