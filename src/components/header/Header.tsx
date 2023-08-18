import { Flex, Heading } from '@chakra-ui/react'
import styled from '@emotion/styled';
import { theme } from '../../theme';

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
        <Flex>
            <Heading color={theme.main} size={'3xl'}>VEL</Heading>
            <Heading size={'3xl'}>:</Heading>
            <Heading color={theme.main} size={'3xl'}>CRO</Heading>
        </Flex>
    </HeaderContainer>

  )
}

export default Header