/*


    Hur fungerar det?
    Jo, vi börjar med att ta det sista indexet av en lista med nummer
    därefter gör vi mindre arrays som innehåller chunks som är större elelr mindre av talet

*/

let unsorted = [5, 3, 18, 1, 58, 588, 2, 7, 9 ,10 ,15, 28, -3, -61, 561, 5]



function sort(arr, pivot) {
    let arr1 = [];
    let arr2 = [];
    if (arr.length< 2) { return arr }
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[arr.length - 1]) {
            arr1.push(arr[i]);
        } else arr2.push(arr[i]);
    }

    return [...sort(arr1), arr[arr.length - 1] ,...sort(arr2)];

}

console.log(JSON.stringify(sort(unsorted)));
