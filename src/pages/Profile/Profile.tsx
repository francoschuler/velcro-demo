import { Box, Button, Flex, Icon, Text, Textarea } from '@chakra-ui/react'
import {ReactComponent as ProfileIcon} from '../../assets/newIcons/perfil.svg';
import styled from '@emotion/styled';
import { theme } from '../../theme';

const StyledProfileIcon = styled(ProfileIcon)`
  & path {
    width: '30rem';
  }
`;

export default function Profile() {
  return (
    <Box>
        <Flex gap={8}>
            <Icon color={theme.main} boxSize={'8rem'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
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
