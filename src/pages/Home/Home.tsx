import { Card, Flex, Grid } from '@chakra-ui/react'
import MapIcon from '../../assets/icons/MapIcon'
import PlusIcon from '../../assets/icons/PlusIcon'
import EyeIcon from '../../assets/icons/EyeIcon'
import BellIcon from '../../assets/icons/BellIcon'
import UserIcon from '../../assets/icons/UserIcon'
import { useNavigate } from "react-router-dom";
import { ReactElement } from 'react'

export default function Home() {
  const navigate = useNavigate();

  const routes: {icon: ReactElement, path: string}[] = [
    {icon: <MapIcon/>, path: '/map'},
    {icon: <PlusIcon/>, path: ''},
    {icon: <EyeIcon/>, path: '/events-list'},
    {icon: <BellIcon/>, path: ''},
    {icon: <UserIcon/>, path: '/profile'},
  ]

  return (
    <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'} mt={'6rem'}>
      <Grid templateColumns='repeat(2, 1fr)' gap={6}>
        {routes.map(route => {
            return (
                <Card 
                padding={'2rem'} 
                variant={'elevated'} 
                cursor={'pointer'}
                onClick={() => navigate(route.path)}
                >
                {route.icon}
                </Card>
            );
        })}
      </Grid>
    </Flex>
  )
}
