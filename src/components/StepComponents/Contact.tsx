import { Box, Typography } from '@mui/material'

import { FormInput } from '../FormInput'

export const Contact = () => {
  return (
    <Box marginY={10}>
      <Typography variant="h6">Contact Data</Typography>

      <Box display="flex" flexDirection="column" gap={5} marginTop={3}>
        <FormInput name="mobileNumber" label="Mobile Number" />
        <FormInput name="telNumber" label="Tel. Number" />
      </Box>
    </Box>
  )
}
