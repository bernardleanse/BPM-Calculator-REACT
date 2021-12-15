import { Button } from '@mui/material'
import React from 'react'



const BpmButton = ({incrementClicks}) => {
  const handleClick = () => {
    incrementClicks()
  }
  return (
   
  <Button className="bpm-button" onClick={handleClick}>
    Click Here
  </Button>
  
    
  )
}

export default BpmButton
