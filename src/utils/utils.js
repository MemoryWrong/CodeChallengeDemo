/**
 * Created by carlkane1987 on 27/2/17.
 */

export function getAverage(array) {
    var initialWeights = 0;
    for (var i = 0; i < array.length; i++) {
        console.log(calWeight(array[i]))
        initialWeights = initialWeights + calWeight(array[i]);
    }
    return initialWeights / array.length;
}

export function calWeight(obj) {
    var weight = (obj.size.width / 100) * (obj.size.height / 100) * (obj.size.length / 100) * 250;
    return weight;
}

export function filterArray(array,filter) {
    var tempArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i].category == filter) {
            console.log('yes it is Air Conditioner');
            tempArray.push(array[i])
        }
    }
    console.log(tempArray)
    return tempArray;
}

