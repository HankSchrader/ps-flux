import React from "react";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import {Route} from 'react-router-dom'
function App() {

    // Old way to do it, if you are not using Browser Router.
    // function getPage() {
    //     const route = window.location.pathname;
    //     if (route === "/courses") return <CoursesPage/>;
    //     if (route === "/about") return <AboutPage/>;
    //     return <HomePage/>
    // }

    return (<div className="container-fluid">
            <Header/>
            <Route path="/" exact component={HomePage}/>
            <Route path="/courses" component={CoursesPage}/>
            <Route path="/about" component={AboutPage}/>
        </div>
    )
}

export default App
