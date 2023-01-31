import { Box, Typography } from '@mui/material'

import { FormInput } from '../FormInput'

export const Address = () => {
  return (
    <Box marginY={10}>
      <Typography variant="h6">Address Data</Typography>

      <Box display="flex" flexDirection="column" gap={5} marginTop={3}>
        <FormInput name="street" label="Street" />
        <FormInput name="streetNumber" label="StreetNumber" />
        <FormInput name="city" label="City" />
      </Box>
    </Box>
  )
}
