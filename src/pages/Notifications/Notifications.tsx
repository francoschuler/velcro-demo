import { Button, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function Notifications() {

    const navigate = useNavigate();

    return (
        <Flex flexDirection={'column'} gap={4} mt={4}>
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
