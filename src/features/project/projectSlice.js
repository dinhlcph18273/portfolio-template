import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { list, read, remove } from "../../api/project";


export const Listproject = createAsyncThunk(
    "project/ListProject",
    async()=>{
        try {
            const {data} = await list();
            return data
        } catch (error) {
            console.log(error);
        }
    }
)

export const Readproject = createAsyncThunk(
    "project/Readproject",
    async(id)=>{
        try {
            const {data} = await read(id);
            return data
        } catch (error) {
            console.log(error);
        }
    }
)

export const Removeproject = createAsyncThunk(
    "project/Removeproject",
    async(id)=>{
        try {
            const {data} = await remove(id)
            return data
        } catch (error) {
            
        }
    }
)

const projectSlice = createSlice({
    name: "project",
    initialState: {
        value:  []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(Listproject.fulfilled, (state, action)=>{
            state.value = action.payload
        })
        builder.addCase(Readproject.fulfilled, (state,action)=>{
            state.value = action.payload
        })
        builder.addCase(Removeproject.fulfilled, (state, action)=>{
            state.value = state.value.filter(item=> item._id !== action.payload._id)
        })
    }
})

export default projectSlice.reducer