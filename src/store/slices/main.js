import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    accounts: [],
    questions: []
}

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        addQuestions: (state, action) => {
            state.questions = action.payload;
        },
        
        setAccounts: (state, action) => {
            state.accounts = action.payload;
        }
    }
});

export const { addQuestions, setAccounts } = mainSlice.actions;
export default mainSlice.reducer;