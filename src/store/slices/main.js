import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    accounts: [],
    questions: [],
    modalName: ''
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
        },

        updateQuestionResults: (state, action) => {
            const {accountId, questionId, result, votes} = action.payload;

            state.accounts = [
                ...state.accounts.map(account => {
                    if (account.id === accountId) {
                        account.questions = account.questions.map(question => {
                            if (question.id === questionId) {
                                question.result = result;
                                question.votes = votes;
                            }
                            
                            return question;
                        });
                    }
                    
                    return account;
                })
            ]
        },

        setModalName: (state, action) => {
            state.modalName = action.payload;
        },
        
        clearModalName: (state) => {
            state.modalName = '';
        }
    }
});

export const { addQuestions, setAccounts, updateQuestionResults, setModalName, clearModalName } = mainSlice.actions;
export default mainSlice.reducer;