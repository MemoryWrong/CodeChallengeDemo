/**
 * Created by carlkane1987 on 27/2/17.
 */
import React from "react";
import http from '../../service/http';
import {filterArray, getAverage} from '../../utils/utils';
import Cell from '../cell/cell';
import './index.css';

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            test: '',
            globalArray: [],
            airConditioners: [],
            averageOfProducts: 0,
        }
    }

    componentDidMount() {
        console.log('did mounting1....')
        this.initArray('/api/products/1');
    }

    /**
     * init global array
     */
    initArray(id) {
        http.getListData(id).then((json) => {
            console.log('json next : ' + json.next);

            console.log(json.objects)
            /**
             * merge global arrays
             * */
            this.state.globalArray = this.state.globalArray.concat(json.objects);
            if (json.next && json.next != undefined && json.next != null) {
                /**
                 * calling api loop
                 */
                this.initArray(json.next);

            } else {
                /**
                 * filter Air Conditioners
                 * */
                console.log(this.state.globalArray)
                let temp = filterArray(this.state.globalArray, 'Air Conditioners');
                /**
                 * calculate average
                 * */
                let average = getAverage(temp);
                console.log('average: ' + average)
                this.setState({
                    averageOfProducts: average,
                    airConditioners:temp
                })

                return;
            }
        })
    }

    renderCells() {
        var temp = []
        for(var i =0;i<this.state.airConditioners.length;i++){
            console.log(this.state.airConditioners[i])
            temp.push(
                <Cell value={this.state.airConditioners[i]} key={i}/>
            )
        }
        return temp;
    }

    render() {
        return (
            <div className="container">
                <div className="main-title">
                    <div className="main-title">
                        "Air Conditioners"
                    </div>
                    <div>
                        average cubic weight for all Air Conditioners: {this.state.averageOfProducts.toFixed(2)} kg
                    </div>
                </div>
                <div className="list-container">
                    {
                        this.renderCells()
                    }
                </div>
            </div>
        )
    }
}

export default List;
