
import React, { useState } from 'react';
import { FormControl, FormLabel } from '@chakra-ui/react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'; // Import CSS for default styling
import { useDispatch, useSelector } from 'react-redux';
import { updateFormData } from '../../store/act/UserSlice';

const InputPhoneNumber = () => {
    const { phonenb } = useSelector((state) => state.user.formData);
    const dispatch = useDispatch();
    const [selectedCountry, setSelectedCountry] = useState('US'); // Default country code

    const handlePhoneNumberChange = (value) => {
        dispatch(updateFormData({ phonenb: value }));
    };
    const handleCountryChange = (newCountry) => {
        setSelectedCountry(newCountry);
        if (phonenb) {
            const countryCode = PhoneInput.getCountryCallingCode(newCountry);
            const formattedPhone = `+${countryCode}${phonenb}`;
        }
    };

    return (
        <FormControl>
            <FormLabel>Phone Number</FormLabel>
            <PhoneInput
                value={phonenb}
                onChange={handlePhoneNumberChange}
                placeholder="Enter phone number"
                defaultCountry="US"
                country={selectedCountry}
                onCountryChange={handleCountryChange}
                international
            />
        </FormControl>
    );
};

export default InputPhoneNumber;

