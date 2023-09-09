import { Box, Button, Card, CardBody, CardHeader, Flex, Icon, Text } from '@chakra-ui/react'
import { theme } from '../../theme'

import {ReactComponent as BellIcon} from '../../assets/newIcons/bell.svg';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

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

export default function NotificationDetails() {

    const [notification, setNotification] = useState<any>(null)
    const navigate = useNavigate();

    const { idNotification } = useParams();

    useEffect(() => {

        if(idNotification) {
            setNotification(notifications.find((notif) => {
                return notif.id === idNotification;
            }))
        }
      
    }, [idNotification])

    const getNotificationStatus = () => {
        if(notification){
            switch(notification.status) {
                case 'pending':
                    return <Text color={theme.textSecondary}> Pendiente </Text>
                case 'accepted':
                    return <Text color='green'> Aceptada </Text>
                case 'rejected':
                    return <Text color='red'> Rechazada </Text>
                default:
                    return 'Error'
            }
        }
    }
    

    return (
        <>
        <Card maxW={'100%'}>
            <CardHeader>
                <Flex>
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                        <Icon boxSize={'2rem'}>
                            <BellIcon color={theme.main}/>
                        </Icon>

                        <Box>
                            <Text fontSize='lg'>Notificación</Text>
                            {getNotificationStatus()}
                        </Box>
                    </Flex>
                </Flex>
            </CardHeader>
            
            <CardBody>
                <Text>
                    {notification?.description}
                </Text>
            </CardBody>
        </Card>
        <Flex flexDirection={'column'} gap={4} mt={4}>
            <Button
                variant='outline'
                w={'100%'}
                fontFamily={'ArcadeClassic'}
                letterSpacing={2}
                fontSize={'20px'}
            > 
                ACEPTAR
            </Button>
            {notification?.status === 'pending' && 
                <Button
                    variant='outline'
                    w={'100%'}
                    fontFamily={'ArcadeClassic'}
                    letterSpacing={2}
                    fontSize={'20px'}
                > 
                    RECHAZAR
                </Button>
            }
            {notification?.status === 'pending' && 
                <Button
                    variant='outline'
                    w={'100%'}
                    fontFamily={'ArcadeClassic'}
                    letterSpacing={2}
                    fontSize={'20px'}
                    onClick={() => navigate('/profile')}
                > 
                    VER PERFIL
                </Button>
            }

            {notification?.status === 'accepted' && 
                <Button
                    variant='outline'
                    w={'100%'}
                    fontFamily={'ArcadeClassic'}
                    letterSpacing={2}
                    fontSize={'20px'}
                > 
                    VER DETALLES
                </Button>
            }

            {notification?.status === 'rejected' && 
                <Button
                    variant='outline'
                    w={'100%'}
                    fontFamily={'ArcadeClassic'}
                    letterSpacing={2}
                    fontSize={'20px'}
                > 
                    BUSCAR PLANES SIMILARES
                </Button>
            }
        </Flex>
    </>
    )
}
