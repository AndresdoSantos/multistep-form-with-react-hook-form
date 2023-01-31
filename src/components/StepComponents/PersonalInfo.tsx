import { Box, Typography } from '@mui/material'

import { FormInput } from '../FormInput'

export const PersonalInfo = () => {
  return (
    <Box marginY={10}>
      <Typography variant="h6">Dados pessoais</Typography>

      <Box display="flex" flexDirection="column" gap={5} marginTop={3}>
        <FormInput name="name" label="Name" />
        <FormInput name="age" label="Age" />
      </Box>
    </Box>
  )
}
