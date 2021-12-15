import { Button } from '@mui/material'
import React from 'react'



const BpmButton = ({incrementClicks, startTimer, updateBpmState}) => {
  const handleClick = () => {
    startTimer()
    incrementClicks()
    updateBpmState()
  }
  return (
   
  <Button className="bpm-button" onClick={handleClick}>
    Click Here
  </Button>
  
    
  )
}

export default BpmButton
