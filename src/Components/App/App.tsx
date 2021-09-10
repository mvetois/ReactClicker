import React, {Component} from "react";
import "./App.css";

import Clicker from "../Clicker/Clicker";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Clicker />
                </header>
            </div>
        );
    }
}

export default App;
