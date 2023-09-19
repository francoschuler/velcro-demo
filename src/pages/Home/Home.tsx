import { Card, Flex, Grid, Icon } from '@chakra-ui/react'
import {ReactComponent as EyeIcon} from '../../assets/newIcons/eye.svg'
import { useNavigate } from "react-router-dom";
import { ReactElement } from 'react'
import {ReactComponent as MapIcon} from '../../assets/newIcons/map.svg';
import {ReactComponent as PlusIcon} from '../../assets/newIcons/plus.svg';
import { theme } from '../../theme'


export default function Home() {
  const navigate = useNavigate();


  const routes: {icon: ReactElement, path: string}[] = [
    {icon: <MapIcon color={theme.main}/>, path: '/map'},
    {icon: <PlusIcon color={theme.main}/>, path: '/create-event'},
    {icon: <EyeIcon color={theme.main}/>, path: '/event-explorer'}
  ]

  return (
    <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
      <Grid templateColumns='repeat(1, 1fr)' gap={6}>
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
