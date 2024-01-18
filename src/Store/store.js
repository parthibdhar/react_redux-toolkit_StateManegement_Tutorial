import {configureStore} from '@reduxjs/toolkit';
import userSlices from './SLices/UserSlice';

export const store = configureStore({
    reducer: {
        users: userSlices,
        
    }
});

