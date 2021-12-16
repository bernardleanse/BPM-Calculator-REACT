import { Button } from '@mui/material'
import React from 'react'


const ResetButton = ({reset}) => {
  return (
    <Button onClick={reset}>Reset</Button>
  )
}

export default ResetButton
