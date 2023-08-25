import { Button, Flex, Text } from '@chakra-ui/react';
import React from 'react'
import { theme } from '../../theme';
import { useNavigate } from 'react-router-dom';

const notifications = [
    {
        id: '1',
        status: 'pending',
        description: '@nilococodrilo te ha enviado una solicitud para el plan Cenita Bienvenida el Sábado 29 en Cáceres'
    },
    {
        id: '2',
        status: 'accepted',
        description: '@nilococodrilo ha aceptado tu solicitud de unión al plan plan Cenita Bienvenida el Sábado 29 en Cáceres'
    },
    {
        id: '3',
        status: 'rejected',
        description: '@nilococodrilo ha rechazado tu solicitud de unión al plan plan Cenita Bienvenida el Sábado 29 en Cáceres'
    },
    
]

export default function Notifications() {

    const navigate = useNavigate();

    return (
        <Flex flexDirection={'column'} gap={4} mt={4}>
            <Button
                variant='outline'
                w={'100%'}
                onClick={() => navigate('../notifications/notifications-list', {replace: true})}

            > 
                SOLICITUDES
            </Button>
            <Button
                variant='outline'
                w={'100%'}
            > 
                CHATS
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
                AJUSTES
            </Button>
        </Flex>
    )
}
