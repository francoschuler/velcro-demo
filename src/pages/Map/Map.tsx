import { Box, Flex, Icon } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {ReactComponent as StoreIcon} from '../../assets/newIcons/store.svg';
import { theme } from '../../theme';

export default function Map() {

  const navigate = useNavigate();
  
  return (
    <Box height='calc(100vh - 15rem)'  position={'relative'}>
        <iframe
            style={{height: '100%', width: '100%'}}
            title='map'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng'
        />
        <Flex 
            justifyContent={'center'}
            position={'absolute'} 
            bottom={10} 
            left={'45%'} 
            zIndex={10} 
            onClick={() => navigate('/events-list')}
            width={'3rem'}
            height={'3rem'}
        >
          <Icon boxSize={16} backgroundColor={theme.main} padding={3} borderRadius={'50%'}>
            <StoreIcon color='white'/>
          </Icon>
        </Flex>
    </Box>
  )
}
