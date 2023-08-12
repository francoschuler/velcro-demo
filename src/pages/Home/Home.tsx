import { Card, Flex, Grid, Heading, background } from '@chakra-ui/react'
import MapIcon from '../../assets/icons/MapIcon'
import PlusIcon from '../../assets/icons/PlusIcon'
import EyeIcon from '../../assets/icons/EyeIcon'
import BellIcon from '../../assets/icons/BellIcon'
import UserIcon from '../../assets/icons/UserIcon'
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'} height={'100vh'}>
      <Flex>
        <Heading color={"#0808D3"} size={'4xl'}>VEL</Heading>
        <Heading size={'4xl'}>:</Heading>
        <Heading color={"#0808D3"} size={'4xl'}>CRO</Heading>
      </Flex>
      <Grid templateColumns='repeat(2, 1fr)' gap={6} mt={10}>
        <Card padding={'2rem'} variant={'elevated'} onClick={() => navigate('/map')}>
          <MapIcon/>
        </Card>
        <Card padding={'2rem'} variant={'elevated'}>
          <PlusIcon/>
        </Card>
        <Card padding={'2rem'} variant={'elevated'}>
          <EyeIcon/>
        </Card>
        <Card padding={'2rem'} variant={'elevated'}>
          <BellIcon/>
        </Card>
        <Card padding={'2rem'} variant={'elevated'}>
          <UserIcon/>
        </Card>
      </Grid>
    </Flex>
  )
}
