import './App.scss';
import {DefaultLayout} from "./layout/default";
import {MainPage} from "./pages";

const App = () => {
    return (
        <div className="App">
            <DefaultLayout>
                <MainPage />
            </DefaultLayout>
        </div>
    );
}

export default App;
