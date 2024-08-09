import { Box, Heading, Text } from '@chakra-ui/react';

const ChakraBox = () => {
    return (
        <Box p={4} bg="gray.50">
            <Heading as="h1" size="xl">
                Welcome to Chakra UI
            </Heading>
            <Text mt={4}>
                Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.
            </Text>
        </Box>
    )
}
export default ChakraBox;