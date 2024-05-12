// import React from 'react'
// import { FormControl, FormLabel, Input } from '@chakra-ui/react'

// const InputLastName = ({ lastName, setLastName }) => {
//     return (
//         <FormControl>
//             <FormLabel>Last Name</FormLabel>
//             <Input
//                 type='text'
//                 value={lastName}
//                 onChange={(e) => setLastName(e.target.value)}
//             />
//         </FormControl>
//     )
// }

// export default InputLastName

// InputLastName.js
import React from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormData } from '../../store/act/UserSlice';

const InputLastName = () => {
    const { lastName } = useSelector((state) => state.user.formData);
    const dispatch = useDispatch();

    const handleLastNameChange = (e) => {
        dispatch(updateFormData({ lastName: e.target.value }));
    };

    return (
        <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input
                type='text'
                value={lastName}
                onChange={handleLastNameChange}
            />
        </FormControl>
    );
};

export default InputLastName;
