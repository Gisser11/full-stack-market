import React, {useContext} from 'react';
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";


const App = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>
                Нажми на мен
            </button>
            <br/>
            hello <br/>
            <h1>Нихуя себе шрифт прикольный</h1>
        </div>
    );
};

export default App;