import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { list } from "../../api/skill";

export const listskill = createAsyncThunk(
    "skill/listskill",
    async() => {
        try {
            const {data} = await list();
            return data
        } catch (error) {
            console.log(error);
        }
    }
)

const skillSlice = createSlice({
    name: "skill",
    initialState: {
        value:  []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(listskill.fulfilled, (state, action)=>{
            state.value = action.payload
        })
    }
})

export default skillSlice.reducer