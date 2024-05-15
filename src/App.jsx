import HomePage from "./views/pages/Home.Page.jsx";
import {HomeContext} from "./contexts/Home.Context.jsx";

const App = () => {
    return (
        <>
            <HomeContext>
                <HomePage/>
            </HomeContext>
        </>
    );
};

export default App;