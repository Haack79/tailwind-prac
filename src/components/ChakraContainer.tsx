
import React from 'react';
import { Container, Flex } from '@chakra-ui/react';
import ChakraBox from './ChakraBox';

const ChakraContainer = () => {
    return (
        <Container bg={'#f8fafd'} maxW={'Container.3xl'} height={'100vh'} p={'0'}>
            <Flex height={'100vh'} alignItems={'center'} justifyContent={'center'}>
                <ChakraBox/>
            </Flex>
        </Container>
    )
}
export default ChakraContainer;