import { Box, Icon } from '@chakra-ui/react'
import React from 'react'
import { theme } from '../../theme'
import {ReactComponent as FingerIcon} from '../../assets/newIcons/finger.svg';
import { useNavigate } from 'react-router-dom';

export default function Welcome() {

    const [loading, setLoading] = React.useState(true);
    const navigate = useNavigate();

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000)
    }, []);

  return (
    <Box
        backgroundColor={theme.main}
        position={'absolute'}
        top={0}
        left={0}
        width={'100%'}
        height={'100vh'}
        overflow={'hidden'}
        
    >
        {loading && 
            <Box
                color={'white'}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                justifyContent={'center'}
                height={'100%'}
            >
                <Box
                fontFamily={'ArcadeClassic'}
                letterSpacing={2}
                fontSize={'20px'}>
                    Loading
                </Box>
                <Box
                fontFamily={'ArcadeClassic'}
                letterSpacing={2}
                fontSize={'20px'}>
                    ...
                </Box>
            </Box>
        }

        {!loading && 
            <Box
            color={'white'}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            height={'100%'}
            cursor={'pointer'}
            onClick={() => navigate('/home')}
        >
            <Box
            fontFamily={'ArcadeClassic'}
            letterSpacing={2}
            fontSize={'40px'}>
                START HERE
            </Box>
            <Icon boxSize={'4rem'}>
                <FingerIcon/>
            </Icon>
        </Box>
        
        }

    </Box>
  )
}
