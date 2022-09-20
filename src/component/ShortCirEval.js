import React, { useState } from 'react'

const ShortCirEval = () => {
  const [demo, setDemo] = useState("");
  return (
    <div>
        <h2>
            {demo || 
            <>
            <h1>hello</h1>
            </>}
        </h2>
        <h2>
            {demo && 
            <>
            <h1>Priya</h1>
            </>}
        </h2>
    </div>
  )
}

export default ShortCirEval