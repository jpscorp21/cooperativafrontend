import { Box, Paper, Typography } from '@material-ui/core'
import React from 'react'

export interface WrapperCardProps {
  title?: string;  
}


const WrapperCard = ({children, title}: React.PropsWithChildren<WrapperCardProps>) => {

  const titleContent = title && title.trim().length ? 
    <Typography sx={{px: 2, py: 2}} variant="h5" component="h5">{title}</Typography> 
    : null

  return (
    <Box sx={{pt: 2}}>
      <Paper elevation={1} sx={{mx: 2}}>      
        {titleContent}
        {children}
      </Paper>
    </Box>
  )
}

export default WrapperCard
