import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { create, list, read, remove, update } from "../../api/profile";

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
    async(profile) =>  {
        try {
            const {data} = await update(profile)
            return data
        } catch (error) {
            console.log(error);
        }
    }
)
export const createProfile = createAsyncThunk(
    "profile/createProfile",
    async(profile) =>  {
        try {
            const {data} = await create(profile)
            return data
        } catch (error) {
            
        }
    }
)
export const removeProfile = createAsyncThunk(
    "profile/removeProfile",
    async(id) =>  {
        try {
            const {data} = await remove(id)
            return data
        } catch (error) {
            
        }
    }
)
export const readProfile = createAsyncThunk(
    "profile/readProfile",
    async(id) =>  {
        try {
            const {data} = await read(id)
            return data
        } catch (error) {
            
        }
    }
)


const profileSlice = createSlice({
    name: "profile",
    initialState: {
        value: [],
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(listProfile.fulfilled, (state,action)=> {
            state.value = action.payload
        })
        builder.addCase(createProfile.fulfilled, (state, action)=>{
            state.value.push(action.payload)
        })
        builder.addCase(removeProfile.fulfilled, (state, action)=>{
            state.value = state.value.filter(item=> item._id !== action.payload._id)
        })
        builder.addCase(readProfile.fulfilled,(state,action)=>{
            state.value = action.payload
        })
        builder.addCase(editProfile.fulfilled,(state, action)=>{
            state.value = state.value.map(item =>
                item._id === action.payload._id ? action.payload : item)
        })
    }
})

export default profileSlice.reducer