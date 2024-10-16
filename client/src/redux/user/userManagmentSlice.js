
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    totalUser: 0,
    loading: false,
    error: null,
    currentUser: null,
};

const userManagementSlice = createSlice({
    name: 'userManagement',
    initialState,
    reducers: {
        fetchUsersStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchUsersSuccess: (state, action) => {
            state.users = action.payload;
            state.userCount = action.payload.length; 
            state.loading = false;
            state.error = null;
        },
        fetchUsersFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        
      
    },
});

export const {
    fetchUsersStart,
    fetchUsersSuccess,
    fetchUsersFailure,    
    
} = userManagementSlice.actions;

export default userManagementSlice.reducer;
