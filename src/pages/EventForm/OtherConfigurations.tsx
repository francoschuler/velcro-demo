import { Flex, FormControl, FormLabel, Input, Switch, Textarea } from '@chakra-ui/react'
import React from 'react'
import { theme } from '../../theme'

export default function OtherConfigurations() {
  return (
    <Flex flexDirection={'column'} gap={'1rem'}>
        <Input type='number' placeholder='Edad límite' focusBorderColor={theme.main}/>
        <FormControl display='flex' alignItems='center'>
            <FormLabel htmlFor='email-alerts'>
                Activar chat
            </FormLabel>
            <Switch/>
        </FormControl>
        <Textarea placeholder='Descripción detallada' resize={'none'} focusBorderColor={theme.main}/>
        <Textarea placeholder='Código de vestimenta' resize={'none'} focusBorderColor={theme.main}/>
        <FormControl display='flex' alignItems='center'>
            <FormLabel htmlFor='email-alerts'>
                Activar notificaciones
            </FormLabel>
            <Switch/>
        </FormControl>
        <FormControl display='flex' alignItems='center'>
            <FormLabel htmlFor='email-alerts'>
                Activar código QR
            </FormLabel>
            <Switch/>
        </FormControl>
    </Flex>
  )
}
