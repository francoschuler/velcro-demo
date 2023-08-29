import { Flex, Icon } from '@chakra-ui/react';
import { theme } from '../../theme';
import { useNavigate } from 'react-router-dom';
import {ReactComponent as HomeIcon} from '../../assets/newIcons/home.svg';
import {ReactComponent as MapIcon} from '../../assets/newIcons/map.svg';
import {ReactComponent as EyeIcon} from '../../assets/newIcons/eye.svg'
import {ReactComponent as ProfileIcon} from '../../assets/newIcons/profile.svg';
import {ReactComponent as BoxIcon} from '../../assets/newIcons/box.svg';
import {ReactComponent as BellIcon} from '../../assets/newIcons/bell.svg';

export default function Nav() {
    
    const navigate = useNavigate();
    const pathname = window.location.pathname;
    console.log(pathname);
    

    if(pathname !== '/welcome') {
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
                    onClick={() => navigate('/notifications')}
                    boxSize={'3rem'} 
                    width={'3rem'}
                    height={'3rem'}
                    backgroundColor={pathname === '/notifications' ? theme.main : 'white'}
                    borderRadius={'8px'} 
                    padding={2}
                    cursor={'pointer'}
                >
                    <BellIcon color={pathname === '/notifications' ? 'white' : theme.main}/>
                </Icon>
    
                {pathname !== '/home' &&
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
                }
    
                {pathname !== '/home' &&
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
                        <BoxIcon color={pathname === '/create-event' ? 'white' : theme.main} />
                    </Icon>
                }
    
                {pathname !== '/home' &&
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
                }
    
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

    return <></>;
  
    
}
