import { Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Icon, Image, Text } from "@chakra-ui/react"

import StoreIcon from '../../assets/icons/StoreIcon';
import { theme } from "../../theme";
import UserGroupIcon from "../../assets/icons/UserGroupIcon";
import PinIcon from "../../assets/icons/PinIcon";
import { useNavigate } from "react-router-dom";

function EventDetail() {
    
    const navigate = useNavigate();

    const plusIcon = <Icon boxSize={6}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </Icon>
   
    return (
        <>
           <Card maxW={'100%'}>
                <CardHeader>
                    <Flex>
                        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                            <StoreIcon/>

                            <Box>
                                <Text fontSize='lg'>Torneo de Pádel</Text>
                                <Text color={theme.textSecondary}> 20:00 - 22:00 Madrid Centro </Text>
                            </Box>
                        </Flex>
                        <Flex alignItems={'center'} gap={2}>
                            <Flex alignItems={'center'}>
                                <Text fontSize='md' fontWeight={600}>10</Text>
                                <Text fontSize='sm'>/17</Text>
                            </Flex>
                            <UserGroupIcon/>
                        </Flex>
                        
                    </Flex>
                    <Text color={theme.textSecondary} fontStyle={'italic'} mt={2}> Este plan no tiene restricción de edad </Text>
                </CardHeader>
                
                <CardBody>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptatem nihil est hic veniam animi dolor quam unde quaerat? Ex aut sit, inventore eos voluptatibus nisi dolores voluptates debitis similique.
                    </Text>
                </CardBody>
                <Image
                    objectFit='cover'
                    src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Chakra UI'
                />

                <CardFooter
                    flexDirection={'column'}
                    gap={4}
                >
                    <Flex alignItems={'center'} gap={2}>
                        <Icon boxSize={6}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                        </Icon>
                        <Text> Creado por @nilococodrilo </Text>
                    </Flex>
                    <Flex alignItems={'center'} gap={2}>
                        <Icon boxSize={6}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                            </svg>
                        </Icon>
                        <Text> Plan abierto, únete y chatea! </Text>
                    </Flex>
                    <Button 
                        width={'fit-content'} 
                        leftIcon={<PinIcon />} 
                        backgroundColor={theme.main} 
                        color={'white'}
                        onClick={() => navigate('/map')}
                    >   
                        Abrir en mapas
                    </Button>
                
                </CardFooter>
            </Card>
            <Flex alignItems={'center'} justifyContent={'center'} mt={'2rem'}>
                <Button
                    variant='outline'
                    width={'fit-content'} 
                    leftIcon={plusIcon} 
                    backgroundColor={'white'} 
                    color={theme.main}
                    border={`2px solid ${theme.main}`}
                > 
                    Unirse al chat 
                </Button>
            </Flex>
        </>
       
    )
}

export default EventDetail