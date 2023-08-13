import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import StoreIcon from '../../assets/icons/StoreIcon'
import GlobeIcon from '../../assets/icons/GlobeIcon'
import { Card, Flex } from '@chakra-ui/react'
import React from 'react';

function EventsList() {

    const [category, setCategory] = React.useState<string>('')

    const categories: {icon: ReactJSXElement, name: string}[] = [
        {icon: <StoreIcon/>, name: 'Food'},
        {icon: <GlobeIcon />, name: 'Travel'},
        {icon: <GlobeIcon />, name: 'Travel'},
        {icon: <GlobeIcon />, name: 'Travel'},
    ]

    const events = [
        {
            id: '1',
            name: 'Cenita piso',
            status: 'public',
            maxParticipants: 14,
            participants: 7,
        }
    ]

    return (
        <Flex gap={4} margin={'0 1rem'}>
            {categories.map(cat => {
                return (
                    <Card
                    padding={'1rem'} 
                    variant={'elevated'} 
                    cursor={'pointer'}
                    onClick={() => setCategory(cat.name)}
                    >
                        {cat.icon}
                    </Card>
                );
                })}
        </Flex>
    )
}

export default EventsList