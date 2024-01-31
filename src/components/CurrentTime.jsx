import React, { useEffect, useState } from 'react'


const CurrentTime = () => {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }
  })
  return (
    <div>
      Current Time : {time.toLocaleDateString()} - {time.toLocaleTimeString()}
    </div>
  )
}

export default CurrentTime

