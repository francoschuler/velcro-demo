import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { Card, Flex, Icon, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import { theme } from '../../theme';
import {ReactComponent as FoodIcon} from '../../assets/newIcons/food.svg';
import {ReactComponent as DrinkIcon} from '../../assets/newIcons/drink.svg';
import {ReactComponent as PetIcon} from '../../assets/newIcons/pet.svg';
import {ReactComponent as PlaneIcon} from '../../assets/newIcons/plane.svg';
import {ReactComponent as GroupIcon} from '../../assets/newIcons/group.svg';
import {ReactComponent as LockIcon} from '../../assets/newIcons/lock.svg';
import {ReactComponent as KeyIcon} from '../../assets/newIcons/unlock.svg';

function EventsList() {

    const navigate = useNavigate();

    const categories: {icon: ReactJSXElement, name: string}[] = [
        {icon: <FoodIcon color={theme.main}/>, name: 'Food'},
        {icon: <DrinkIcon color={theme.main}/>, name: 'Travel'},
        {icon: <PetIcon color={theme.main} />, name: 'Travel2'},
        {icon: <PlaneIcon color={theme.main}/>, name: 'Travel3'},
    ]

    const events = [
        {
            id: '1',
            name: 'Cenita piso',
            private: true,
            maxParticipants: 14,
            participants: 7,
        },
        {
            id: '2',
            name: 'Bizcocho casero',
            private: false,
            maxParticipants: 14,
            participants: 7,
        },
        {
            id: '3',
            name: 'Cenita piso',
            private: false,
            maxParticipants: 14,
            participants: 3,
        },
        {
            id: '4',
            name: 'Comida Bienvenida',
            private: true,
            maxParticipants: 14,
            participants: 12,
        },
        {
            id: '5',
            name: 'Oferta Familiar la Mafia',
            private: true,
            maxParticipants: 14,
            participants: 8,
        },
        {
            id: '6',
            name: 'Comida cerro',
            private: true,
            maxParticipants: 14,
            participants: 5,
        },
        {
            id: '7',
            name: 'Pasta italiana',
            private: true,
            maxParticipants: 14,
            participants: 2,
        }
    ]

    return (
        <>
            <Flex gap={4} margin={'0 1rem'} justifyContent={'space-between'}>
                {categories.map(cat => {
                    return (
                        <Card
                            key={cat.name}
                            flex={'1'}
                            alignItems={'center'}
                            padding={'1rem'} 
                            variant={'elevated'} 
                            cursor={'pointer'}
                        >
                            <Icon boxSize={'2rem'}>
                                {cat.icon}
                            </Icon>
                        </Card>
                    );
                    })
                }
            </Flex>

            <Flex flexDirection={'column'} gap={3} margin={'2rem 0'}>
                {events.map(event => {
                    return(
                        <Flex 
                            cursor={'pointer'}
                            borderRadius={'4px'}
                            backgroundColor={theme.lightGrey}
                            padding={'1rem'}
                            key={event.id}
                            width={'100%'} 
                            justifyContent={'space-between'} 
                            onClick={() => navigate(`/events-list/${event.id}`)}>

                            <Flex alignItems={'center'} gap={1}>
                                <Text fontSize='md'>{event.name}</Text>
                                <Icon boxSize={5}>
                                    {event.private ? <LockIcon/> : <KeyIcon/>}
                                </Icon>
                            </Flex>
                            <Flex 
                                alignItems={'center'} 
                                gap={2}
                            >
                                <Flex alignItems={'center'}>
                                    <Text fontSize='md' fontWeight={600}>{event.participants}</Text>
                                    <Text fontSize='sm'>/{event.maxParticipants}</Text>
                                </Flex>
                                <GroupIcon/>
                            </Flex>
                        </Flex>
                    );
                })}
            </Flex>
        </>
       
    )
}

export default EventsList