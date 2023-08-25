import { Flex, Text } from '@chakra-ui/react';
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

export default function NotificationsList() {
    const navigate = useNavigate();

    return (
        <Flex flexDirection={'column'} gap={3} margin={'2rem 0'}>
            {notifications.map(notif => {
                return(
                    <Flex 
                        cursor={'pointer'}
                        borderRadius={'4px'}
                        backgroundColor={theme.lightGrey}
                        padding={'1rem'}
                        key={notif.id}
                        width={'100%'} 
                        justifyContent={'space-between'} 
                        onClick={() => navigate(`../notifications/notifications-list/${notif.id}`)}>

                        <Flex alignItems={'center'} gap={1}>
                            <Text fontSize='md'>{notif.description}</Text>
                        </Flex>
                    </Flex>
                );
            })}
        </Flex>
    )
}
