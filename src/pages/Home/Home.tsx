import { Card, Flex, Grid, Icon } from '@chakra-ui/react'
import {ReactComponent as EyeIcon} from '../../assets/newIcons/eye.svg'
import {ReactComponent as BellIcon} from '../../assets/newIcons/bell.svg'
import {ReactComponent as ProfileIcon} from '../../assets/newIcons/profile.svg'
import { useNavigate } from "react-router-dom";
import { ReactElement } from 'react'
import {ReactComponent as MapIcon} from '../../assets/newIcons/map.svg';
import { theme } from '../../theme'


export default function Home() {
  const navigate = useNavigate();

  const plusIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>


  const routes: {icon: ReactElement, path: string}[] = [
    {icon: <MapIcon color={theme.main}/>, path: '/map'},
    {icon: plusIcon, path: '/create-event'},
    {icon: <EyeIcon color={theme.main}/>, path: '/events-list'},
    {icon: <BellIcon color={theme.main}/>, path: '/notifications'},
    {icon: <ProfileIcon color={theme.main}/>, path: '/profile'},
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
                  <Icon boxSize={'3rem'}>
                    {route.icon}
                  </Icon>
                </Card>
            );
        })}
      </Grid>
    </Flex>
  )
}
