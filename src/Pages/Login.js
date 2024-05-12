import React, { useState } from 'react';
import { Box, Button, VStack } from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateFormData } from '../store/act/UserSlice';
import InputFirstName from './component/InputFirstName';
import InputLastName from './component/InputLastName';
import InputPassword from './component/InputPassword';
import InputPhoneNumber from './component/InputPhoneNumber';

const Login = () => {
    const [errorForm, setErrorForm] = useState('');
    const { name, lastName, password, phonenb } = useSelector((state) => state.user.formData);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !lastName || !password || !phonenb) {
            setErrorForm("Please fill in all fields.");
            return;
        }
        dispatch(updateFormData(name, lastName, password, phonenb));
        localStorage.setItem('user', JSON.stringify({ name, password, lastName, phonenb }));
        navigate('/');
    };

    return (
        <Box
            width="100%"
            height="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <VStack
                as="form"
                width="50%"
                spacing="10px"
                onSubmit={handleSubmit}
            >
                <InputFirstName />
                <InputLastName />
                <InputPhoneNumber />
                <InputPassword />
                <Button type="submit">Login</Button>
                {errorForm && <p>{errorForm}</p>}
            </VStack>
        </Box>
    );
};

export default Login;
