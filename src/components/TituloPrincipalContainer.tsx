import { Box, Typography } from '@material-ui/core'
import React from 'react'

const TituloContainer = ({children}: React.PropsWithChildren<{}>) => {
    return (
      <Box px={2} pt={3} pb={3}>
        <Typography variant="h5" component="h5">
          {children}
        </Typography> 
      </Box>
    )
}

export default TituloContainer
