import { TextField } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'

type Props = {
  name: string
  label: string
}

export const FormInput = ({ label, name }: Props) => {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField label={label} error={!!fieldState.error} {...field} />
      )}
    />
  )
}
