import { Button, Flex, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { theme } from '../../theme';

export default function Notifications() {

    const navigate = useNavigate();

    return (
            <Flex flexDirection={'column'} gap={4} mt={4}>
                <Flex flexDirection={'column'} gap={3} margin={'2rem 0'}>
                    <Flex 
                        borderRadius={'4px'}
                        backgroundColor={theme.lightGrey}
                        padding={'1rem'}
                        key={crypto.randomUUID()}
                        width={'100%'} 
                        justifyContent={'space-between'}>

                        <Flex alignItems={'center'} gap={1}>
                            <Text fontSize='md' display={'flex'} gap={1}>
                                <Text color={theme.main} fontWeight={'bold'}>25</Text> 
                                <Text>mensajes sin leer en el chat</Text> 
                                <Text color={theme.main} fontWeight={'bold'}>Torneo Pádel</Text> 
                            </Text>
                        </Flex>
                    
                    </Flex>
                    <Flex 
                        borderRadius={'4px'}
                        backgroundColor={theme.lightGrey}
                        padding={'1rem'}
                        key={crypto.randomUUID()}
                        width={'100%'} 
                        justifyContent={'space-between'}>

                        <Flex alignItems={'center'} gap={1}>
                        <Text fontSize='md' display={'flex'} gap={1}>
                                <Text color={theme.main} fontWeight={'bold'}>3</Text> 
                                <Text>solicitudes pendientes de</Text> 
                                <Text color={theme.main} fontWeight={'bold'}>Aceptar</Text> 
                            </Text>
                        </Flex>
                    </Flex>
            </Flex>
            <Button
                variant='outline'
                w={'100%'}
                onClick={() => navigate('../notifications/notifications-list', {replace: true})}
                fontFamily={'ArcadeClassic'}
                letterSpacing={2}
                fontSize={'20px'}
            > 
                SOLICITUDES
            </Button>
            <Button
                variant='outline'
                w={'100%'}
                fontFamily={'ArcadeClassic'}
                letterSpacing={2}
                fontSize={'20px'}
            > 
                CHATS
            </Button>
            <Button
                variant='outline'
                w={'100%'}
                fontFamily={'ArcadeClassic'}
                letterSpacing={2}
                fontSize={'20px'}
            > 
                AMIGOS
            </Button>
            <Button
                variant='outline'
                w={'100%'}
                fontFamily={'ArcadeClassic'}
                letterSpacing={2}
                fontSize={'20px'}
            > 
                AJUSTES
            </Button>
        </Flex>
    )
}
