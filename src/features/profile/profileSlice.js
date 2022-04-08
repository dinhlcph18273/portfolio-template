import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { list } from "../../api/profile";

export const listProfile = createAsyncThunk(
    "profile/listProfile",
    async() =>  {
        try {
            const {data} = await list()
            return data
        } catch (error) {
            
        }
    }
)
export const editProfile = createAsyncThunk(
    "profile/editProfile",
    async() =>  {
        try {
            // const {data} = await 
        } catch (error) {
            
        }
    }
)
export const createProfile = createAsyncThunk(
    "profile/createProfile",
    async() =>  {
        try {
            // const {data} = await 
        } catch (error) {
            
        }
    }
)
export const removeProfile = createAsyncThunk(
    "profile/removeProfile",
    async() =>  {
        try {
            // const {data} = await 
        } catch (error) {
            
        }
    }
)
export const readProfile = createAsyncThunk(
    "profile/readProfile",
    async() =>  {
        try {
            // const {data} = await 
        } catch (error) {
            
        }
    }
)


const profileSlice = createSlice({
    name: "profile",
    initialState: {
        value: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(listProfile.fulfilled, (state,action)=> {
            state.value = action.payload
        })
    }
})

export default profileSlice.reducer