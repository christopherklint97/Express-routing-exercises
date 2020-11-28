function mean(arr) {
    let sum = 0;
    for (let n of arr) {
        sum += n;
    }

    return sum / 2;
}

function median(arr) {
    let arrSort = arr.sort();
    let mid = Math.ceil(arr.length / 2);

    return arr.length % 2 == 0 ? (arrSort[mid] + arrSort[mid - 1]) / 2 : arrSort[mid - 1];
}

function mode(arr) {
    return arr.sort((a, b) =>
        arr.filter(v => v === a).length
        - arr.filter(v => v === b).length
    ).pop();
}

module.exports = {
    mean,
    median,
    mode
}