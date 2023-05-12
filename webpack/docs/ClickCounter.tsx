import { useState } from 'react'

const ClickCounter = () => {
  const [click, setClick] = useState(0)
  return (
    <div>
      <button
        onClick={() => {
          setClick(click + 1)
        }}>
        {click}
      </button>
    </div>
  )
}

export default ClickCounter
