import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Flex, Text, Button, Spacer } from "@chakra-ui/react";
import Login from './Login';

const Home = () => {
    const userDate = localStorage.getItem('user')
    const user = JSON.parse(userDate);

    return (
        <Box>
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                padding="1rem"
                bg="blue.500"
                color="white"
            >
                <Flex align="center">
                    <Text fontSize="lg" fontWeight="bold">
                        Hello
                    </Text>
                </Flex>

                <Spacer />


                <Box>
                    {
                        user ? (
                            <>
                                <Flex
                                    gap="10px"
                                >
                                    <p>Firstname: {user.name}</p>
                                    <p>Lastname: {user.lastName}</p>
                                    <p>Phone: {user.phonenb}</p>
                                </Flex>
                            </>
                        ) : (
                            <Link to="/login">
                                <Button colorScheme="teal" mr="4">
                                    Register
                                </Button>
                            </Link>
                        )
                    }
                </Box>
            </Flex>
        </Box>
    )
}

export default Home