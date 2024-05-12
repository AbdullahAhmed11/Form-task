// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const loginUser = createAsyncThunk(

// )
// const userSlice = createSlice({
//     name: "user",
//     initialState: {
//         loading: false,
//         user: null,
//         error: null,
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(loginUser.pending, (state) => {
//                 state.loading = true;
//                 state.user = null;
//                 state.error = null;
//             })
//             .addCase(loginUser.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.user = action.payload;
//                 state.error = null;
//             })
//             .addCase(loginUser.rejected, (state, action) => {
//                 state.loading = false;
//                 state.user = null;
//                 console.log(action.error.message);
//                 if (action.error.message === "Request failed with status code 401") {
//                     state.error = "Access Denied"
//                 } else {

//                     state.error = action.error.message;
//                 }
//             })
//     }
// })
// export default userSlice.reducer

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    formData: {
        name: '',
        lastName: '',
        password: '',
        phonenb: ''
    }
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateFormData: (state, action) => {
            state.formData = { ...state.formData, ...action.payload };
        },
        clearFormData: (state) => {
            state.formData = initialState.formData;
        }
    }
});

export const { updateFormData, clearFormData } = userSlice.actions;

export default userSlice.reducer;
