import { FormProvider, useForm } from 'react-hook-form'
import { Steps } from './Stepper'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { PersonalInfo } from './StepComponents/PersonalInfo'
import { Address } from './StepComponents/Address'
import { Contact } from './StepComponents/Contact'

const schema = z
  .object({
    name: z.string().min(1),
    age: z.string().min(1),

    street: z.string().min(1),
    city: z.string().min(1),
    streetNumber: z.string().min(1),

    mobileNumber: z.string().min(1),
    telNumber: z.string().min(1),
  })
  .required()

type FormValues = z.input<typeof schema>

const sourceSteps = [
  {
    label: 'Dados Pessoais',
    Component: <PersonalInfo />,
    fields: ['name', 'age'],
    hasError: false,
  },
  {
    label: 'Dados de Endereço',
    fields: ['street', 'city', 'streetNumber'],
    Component: <Address />,
    hasError: false,
  },
  {
    label: 'Dados de Contato',
    Component: <Contact />,
    fields: ['mobileNumber', 'telNumber'],
    hasError: false,
  },
]

const getSteps = (errors: string[]) => {
  return sourceSteps.map((step) => {
    return {
      ...step,
      hasError: errors.some((error) => step.fields.includes(error)),
    }
  })
}

export function Form() {
  const methods = useForm<FormValues>({
    criteriaMode: 'all',
    mode: 'all',
    defaultValues: {
      name: '',
      age: '',
      street: '',
      city: '',
      streetNumber: '',
      mobileNumber: '',
      telNumber: '',
    },
    resolver: zodResolver(schema),
  })

  if (methods.formState.isSubmitSuccessful) {
    return (
      <Box>
        <Typography variant="h2">Formulário enviado com sucesso!</Typography>
        <Button onClick={() => methods.reset()}>
          Clique aqui para enviar um novo cadastro
        </Button>
      </Box>
    )
  }

  const steps = getSteps(Object.keys(methods.formState.errors))

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
        <Steps items={steps} />
      </form>
    </FormProvider>
  )
}
