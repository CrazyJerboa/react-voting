import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    questions: []
}

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        addQuestions: (state, action) => {
            state.questions = action.payload;
        }
    }
});

export const { addQuestions } = mainSlice.actions;
export default mainSlice.reducer;