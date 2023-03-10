import { createSlice } from '@reduxjs/toolkit';


const authSlice = createSlice({
    name: 'authentication',
    initialState: {
        user: {},
        isLoggedIn: false,
    },
    reducers: {
        onLogin(state, action) {
            state.user = action.payload
            state.isLoggedIn = true;
            localStorage.setItem('currentLogin', JSON.stringify(state.user));


        },
        onLogout(state) {
            state.isLoggedIn = false
            state.user= {}
            localStorage.setItem('currentLogin', JSON.stringify([]));

        }
    }
});
export const { onLogin, onLogout } = authSlice.actions
export default authSlice.reducer
