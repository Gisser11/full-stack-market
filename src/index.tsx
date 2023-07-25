import {render} from "react-dom"
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import './styles/index.scss'
import ThemeProvider from "./theme/ThemeProvider";
import React from "react";

// @ts-ignore
// @ts-ignore
render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)