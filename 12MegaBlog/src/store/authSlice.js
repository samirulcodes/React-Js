import { createSlice } from "@reduxjs/toolkit";

// this slice is for track authentication that user is authenticated or not

const initialState = {
    status : false,
    userData: null
}

// reducer- is a functionality
// slice- almost bigger version  of reducer
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
     }
})

export const {login, logout} = authSlice.actions; //actions-> login , logout is a actions

export default authSlice.reducer;