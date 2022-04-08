import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { list } from "../../api/project";


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
    }
})

export default projectSlice.reducer