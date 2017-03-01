/**
 * Created by carlkane1987 on 28/2/17.
 */
import React from 'react';
import './index.css';

class Cell extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state={
            weight:0,
        }
    }
    componentDidMount(){
        this.setState({
            weight:250*this.props.value.size.length*this.props.value.size.width*this.props.value.size.height/1000000
        })
    }
    render() {
        return (
            <div className="cell-container">
                {/*<div className="panel-left">img</div>*/}
                <div className="panel-right">
                    <div className="cell-title">{this.props.value.title}</div>
                    <div className="cell-size">
                        {this.props.value.size.length}(cm)*{this.props.value.size.width}(cm)*{this.props.value.size.height}(cm)
                    </div>
                    <div className="cell-weight">{this.state.weight.toFixed(2)} kg</div>
                </div>
            </div>
        )
    }
}
export default Cell;