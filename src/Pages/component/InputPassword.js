
import React from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormData } from '../../store/act/UserSlice';

const InputPassword = () => {
    const { password } = useSelector((state) => state.user.formData);
    const dispatch = useDispatch();

    const handlePasswordChange = (e) => {
        dispatch(updateFormData({ password: e.target.value }));
    };

    return (
        <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
                type='password'
                value={password}
                onChange={handlePasswordChange}
            />
        </FormControl>
    );
};

export default InputPassword;
