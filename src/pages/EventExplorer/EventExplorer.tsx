import { Box, Card, CardFooter, CardHeader, Flex, Icon, Text } from '@chakra-ui/react'
import { theme } from '../../theme'

import {ReactComponent as HeartIcon} from "../../assets/newIcons/heart.svg";
import {ReactComponent as TrashIcon} from "../../assets/newIcons/trash.svg";
import {ReactComponent as GroupIcon} from "../../assets/newIcons/group.svg";
import { EventModel, events } from '../../data/Events';
import { useEffect, useState } from "react";

export default function EventExplorer() {

    const [currentEvent, setCurrentEvent] = useState<EventModel>(events[0]);
    const [currentIndex, setCurrentIndex] = useState(0)

    const navigateOnEvents = (n: number) => {
        const index = currentIndex + n;
        if(index >= events.length) {
            setCurrentEvent(events[0]);
            setCurrentIndex(0);
        } else if (index < 0){
            setCurrentEvent(events[events.length - 1])
            setCurrentIndex(events.length - 1);
        } else {
            setCurrentEvent(events[index]);
            setCurrentIndex(index);
        }
    }

  return (
    <div>
        <Card maxW={'100%'}>
                <CardHeader>
                    <Flex>
                        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>

                            <Box>
                                <Text fontSize='lg'>{currentEvent.name}</Text>
                                <Text color={theme.textSecondary}> 20:00 - 22:00 Madrid Centro </Text>
                            </Box>
                        </Flex>
                        <Flex alignItems={'center'} gap={2}>
                            <Flex alignItems={'center'}>
                                <Text fontSize='md' fontWeight={600}>{currentEvent.participants}</Text>
                                <Text fontSize='sm'>/{currentEvent.maxParticipants}</Text>
                            </Flex>
                            <GroupIcon/>
                        </Flex>
                        
                    </Flex>
                    {currentEvent.ageRestriction ?
                        <Text color={theme.textSecondary} fontStyle={'italic'} mt={2}> +{currentEvent.ageRestriction} años </Text>

                        :
                        <Text color={theme.textSecondary} fontStyle={'italic'} mt={2}> Este plan no tiene restricción de edad </Text>

                    }                    
                    <Text mt={2}> {currentEvent.description} </Text>
                </CardHeader>

                <CardFooter
                    flexDirection={'column'}
                    pt={0}
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
                
                </CardFooter>
            </Card>

            <Flex alignItems={'center'} justifyContent={'space-between'} mt={3}>
                <Icon
                        border={`1px solid ${theme.main}`}
                        boxSize={'3rem'} 
                        width={'3rem'}
                        height={'3rem'}
                        borderRadius={'8px'} 
                        padding={2}
                        cursor={'pointer'}
                        onClick={() => navigateOnEvents(-1)}
                    >
                        <TrashIcon color={theme.main}/>
                </Icon>

                <Icon
                        backgroundColor={theme.main}
                        boxSize={'3rem'} 
                        width={'3rem'}
                        height={'3rem'}
                        borderRadius={'8px'} 
                        padding={2}
                        cursor={'pointer'}
                        onClick={() => navigateOnEvents(1)}
                    >
                        <HeartIcon color='white'/>
                </Icon>
            </Flex>

           
    </div>
  )
}
