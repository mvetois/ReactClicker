import React, {Component} from "react";

import Button from "react-bootstrap/Button";

interface IProps {
    score: number
}

interface IState {
    score: number
}

class Clicker extends Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            score: 0
        };
    }
    public static defaultProps = {
        score: 0
    };
    AddScore = () => {
        this.setState({ score: this.state.score + 1 });
    }

    render() {
        return (
            <div>
                {this.state.score}<br/>
                <Button variant="primary" onClick={this.AddScore}>Ajouter</Button>
            </div>
        );
    }
}

export default Clicker;