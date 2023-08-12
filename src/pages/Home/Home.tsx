import { Box, Card, Flex, Grid, GridItem, Heading } from '@chakra-ui/react'
import React from 'react'

export default function Home() {
  return (
    <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'} height={'100vh'}>
      <Flex>
        <Heading color={"#0808D3"} size={'4xl'}>VEL</Heading>
        <Heading size={'4xl'}>:</Heading>
        <Heading color={"#0808D3"} size={'4xl'}>CRO</Heading>
      </Flex>
      <Grid templateColumns='repeat(6, 1fr)' gridTemplateRows={'repeat(3, 1fr)'} gap={6}>
        <Card padding={'2rem'}>
          hi
        </Card>
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
      </Grid>
    </Flex>
  )
}
