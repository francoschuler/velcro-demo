import { Flex, Icon } from '@chakra-ui/react';
import { theme } from '../../theme';
import { useNavigate } from 'react-router-dom';

export default function Nav() {
    
    const navigate = useNavigate();
    const pathname = window.location.pathname;
  
    return (
        <Flex justifyContent={'space-between'} gap={'1rem'} overflow={'hidden'} position={'fixed'} bottom={0} width={'100%'} padding={'1rem'} backgroundColor={theme.lightGrey}>
            <Icon 
                onClick={() => navigate('/home')}
                boxSize={'3rem'} 
                width={'3rem'}
                height={'3rem'}
                color={pathname === '/home' ? 'white' : theme.main} 
                backgroundColor={pathname === '/home' ? theme.main : 'white'}
                borderRadius={'8px'} 
                padding={2}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
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
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
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
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
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
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
            </Icon>

        </Flex>
    )
}
