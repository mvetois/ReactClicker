import React, {Component} from "react";

import Button from "react-bootstrap/Button";

interface IProps {
    score: number,
    bonus: number,
    price: number
}

interface IState {
    score: number,
    bonus: number,
    price: number
}

class Clicker extends Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            score: 0,
            bonus: 1,
            price: 10
        };
    }

    public static defaultProps = {
        score: 0,
        bonus: 1,
        price: 10
    };

    AddScore = () => {
        this.setState({
            score: this.state.score + this.state.bonus
        });
    }

    AddBonus = () => {
        this.setState({
            score: this.state.score - this.state.price,
            bonus: this.state.bonus + 1,
            price: Math.round(this.state.price * 1.5)
        });
    }

    render() {
        return (
            <div>
                <p>Score : {this.state.score}</p>
                <p>Bonus : {this.state.bonus}</p>
                <Button variant="primary" onClick={this.AddScore}>Ajouter {this.state.bonus} point{this.state.bonus > 1 ? "s": ""}</Button>{" "}
                <Button variant="primary" onClick={this.AddBonus} disabled={this.state.price > this.state.score}>Acheter un bonus ({this.state.price})</Button>
            </div>
        );
    }
}

export default Clicker;