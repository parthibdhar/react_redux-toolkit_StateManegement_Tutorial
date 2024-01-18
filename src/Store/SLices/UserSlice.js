import {createSlice} from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';


const initialState = {
    users: [
        {
            id: '1',
            name: 'Parthib Dhar',
            
        },
        {
            id: '2',
            name: 'Debayan Mukharjee',
            
        }
    ]
}


const addAUser = (state, action) => {
    const user = {
        id: nanoid(),
        name: action.payload,
    }

    state.users.push(user);
    console.log("User added: ", user);
};

const deleteAUser = (state, action) => {
    const userIdToRemove = action.payload;
    state.users = state.users.filter((user) => user.id !== userIdToRemove);
    console.log('User removed: ', userIdToRemove);
    
}

const deleteAllUsers = (state) => {
    state.users = [];
    console.log('All users removed');

}

export const userSlices = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        addUser: addAUser,
        removeUser: deleteAUser,
        removeAllUsers: deleteAllUsers
    },
});

 console.log(userSlices.reducer);

export const {addUser, removeUser, removeAllUsers} = userSlices.actions;
export default userSlices.reducer;