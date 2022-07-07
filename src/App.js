import './App.scss';
import {addQuestions} from "./store/slices/main";
import {useDispatch, useSelector} from "react-redux";
import {DefaultLayout} from "./layout/default";
import {MainPage} from "./pages";

const App = () => {
    const dispatch = useDispatch();
    const questions = useSelector((state) => state.main.questions);
    
    const addQuestion = () => {
        dispatch(addQuestions(['Вопрос 1', 'Вопрос 2']));
    }
    
    return (
        <div className="App">
            <button onClick={addQuestion}>Добавить вопросы</button>

            { questions.map(question => {
                return <p>{question}</p>
            }) }
            
            <DefaultLayout>
                <MainPage />
            </DefaultLayout>
        </div>
    );
}

export default App;
