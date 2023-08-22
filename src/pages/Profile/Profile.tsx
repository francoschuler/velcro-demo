import { Box, Button, Flex, Icon, Text, Textarea } from '@chakra-ui/react'
import {ReactComponent as ProfileIcon} from '../../assets/newIcons/profile.svg';
import styled from '@emotion/styled';
import { theme } from '../../theme';


export default function Profile() {
  return (
    <Box>
        <Flex gap={8}>
            <Icon boxSize={'5rem'}>
                <ProfileIcon color={theme.main}/>
            </Icon>
            <Flex flexDirection={'column'}>
                <Text fontSize={'md'}> @nilococodrilo </Text>
                <Text fontSize={'md'}> Nilo Martínez </Text>
                <Text fontSize={'md'}> San Fernando </Text>
                <Text fontSize={'md'}> 26 Años </Text>
            </Flex>
        </Flex>
        <Textarea mt={8} placeholder='Descripción (146 caracteres)' resize={'none'} focusBorderColor={theme.main}/>

        <Flex flexDirection={'column'} gap={4} mt={4}>
            <Button
                variant='outline'
                w={'100%'}

            > 
                AJUSTES
            </Button>
            <Button
                variant='outline'
                w={'100%'}
            > 
                AMIGOS
            </Button>
            <Button
                variant='outline'
                w={'100%'}
            > 
                HISTORIAL
            </Button>
            <Button
                variant='outline'
                w={'100%'}
            > 
                EDITAR PERFIL
            </Button>
        </Flex>
    </Box>
  )
}
