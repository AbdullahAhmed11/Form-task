
import React from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormData } from '../../store/act/UserSlice';

const InputFirstName = () => {
    const { name } = useSelector((state) => state.user.formData);
    const dispatch = useDispatch();

    const handleNameChange = (e) => {
        dispatch(updateFormData({ name: e.target.value }));
    };

    return (
        <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input
                type='text'
                value={name}
                onChange={handleNameChange}
            />
        </FormControl>
    );
};

export default InputFirstName;
