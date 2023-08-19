import { Icon } from '@chakra-ui/react'
import styled from '@emotion/styled';
import {ReactComponent as VelcroIcon} from '../../assets/newIcons/Velcro.svg';

const HeaderContainer = styled.header`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    height: 6rem;
    position: sticky;
`;

function Header() {
  return (
    <HeaderContainer>
        <Icon boxSize={'20rem'}>
            <VelcroIcon />
        </Icon>
    </HeaderContainer>

  )
}

export default Header