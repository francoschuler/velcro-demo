import { Flex, Icon } from '@chakra-ui/react';
import { theme } from '../../theme';
import { useNavigate } from 'react-router-dom';
import SVG from "react-inlinesvg";
import {ReactComponent as HomeIcon} from '../../assets/newIcons/home.svg';
import {ReactComponent as MapIcon} from '../../assets/newIcons/map.svg';
import {ReactComponent as EyeIcon} from '../../assets/newIcons/eye.svg'
import {ReactComponent as ProfileIcon} from '../../assets/newIcons/profile.svg'

export default function Nav() {
    
    const navigate = useNavigate();
    const pathname = window.location.pathname;
  
    return (
        <Flex 
            justifyContent={'space-between'} 
            gap={'1rem'} 
            overflow={'hidden'} 
            position={'sticky'} 
            bottom={0} 
            width={'100%'}
            padding={'1rem'} 
            backgroundColor={theme.lightGrey}
         >
            <Icon 
                onClick={() => navigate('/home')}
                boxSize={'3rem'} 
                width={'3rem'}
                height={'3rem'}
                backgroundColor={pathname === '/home' ? theme.main : 'white'}
                borderRadius={'8px'} 
                padding={2}
                cursor={'pointer'}
            >
                <HomeIcon color={pathname === '/home' ? 'white' : theme.main} />
            </Icon>

            <Icon
                onClick={() => navigate('/map')}
                boxSize={'3rem'} 
                width={'3rem'}
                height={'3rem'}
                color={pathname === '/map' ? 'white' : theme.main}
                backgroundColor={pathname === '/map' ? theme.main : 'white'}
                borderRadius={'8px'} 
                padding={2}
                cursor={'pointer'}
            >
                <MapIcon color={pathname === '/map' ? 'white' : theme.main} />
            </Icon>

            <Icon
                onClick={() => navigate('/create-event')}
                boxSize={'3rem'} 
                width={'3rem'}
                height={'3rem'}
                color={pathname === '/create-event' ? 'white' : theme.main} 
                backgroundColor={pathname === '/create-event' ? theme.main : 'white'}
                borderRadius={'8px'} 
                padding={2}
                cursor={'pointer'}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </Icon>

            <Icon 
                onClick={() => navigate('/events-list')}
                boxSize={'3rem'} 
                width={'3rem'}
                height={'3rem'}
                color={pathname === '/events-list' ? 'white' : theme.main} 
                backgroundColor={pathname === '/events-list' ? theme.main : 'white'}
                borderRadius={'8px'} 
                padding={2}
                cursor={'pointer'}
            >
               
               <EyeIcon color={pathname === '/events-list' ? 'white' : theme.main} />
            </Icon>

            <Icon
                onClick={() => navigate('/profile')}
                boxSize={'3rem'} 
                width={'3rem'}
                height={'3rem'}
                color={pathname === '/profile' ? 'white' : theme.main} 
                backgroundColor={pathname === '/profile' ? theme.main : 'white'}
                borderRadius={'8px'} 
                padding={2}
                cursor={'pointer'}
            >
                
                <ProfileIcon color={pathname === '/profile' ? 'white' : theme.main} />
            </Icon>

        </Flex>
    )
}
