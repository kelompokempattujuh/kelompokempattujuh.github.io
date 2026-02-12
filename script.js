const data = [10, 5, 8, 1, 7, 3];
const sortedData = [...data].sort((a, b) => a - b);

// 1. Linear Search
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}

// 2. Binary Search (Wajib Data Terurut)
function binarySearch(arr, target) {
    let low = 0, high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) return mid;
        arr[mid] < target ? low = mid + 1 : high = mid - 1;
    }
    return -1;
}

// 3. Bubble Sort
function bubbleSort(arr) {
    let tempArr = [...arr];
    for (let i = 0; i < tempArr.length; i++) {
        for (let j = 0; j < tempArr.length - i - 1; j++) {
            if (tempArr[j] > tempArr[j + 1]) {
                [tempArr[j], tempArr[j + 1]] = [tempArr[j + 1], tempArr[j]];
            }
        }
    }
    return tempArr;
}

// 4. Merge Sort
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    
    return ((l, r) => {
        let res = [];
        while (l.length && r.length) res.push(l[0] < r[0] ? l.shift() : r.shift());
        return [...res, ...l, ...r];
    })(left, right);
}

// 5. Quick Sort
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    const pivot = arr[arr.length - 1];
    const left = arr.filter((x, i) => x <= pivot && i !== arr.length - 1);
    const right = arr.filter(x => x > pivot);
    return [...quickSort(left), pivot, ...quickSort(right)];
}

function runAll() {
    const output = document.getElementById('output');
    output.innerHTML = `
        <b>Linear Search (Target 7):</b> Indeks ${linearSearch(data, 7)}<br>
        <b>Binary Search (Target 7):</b> Indeks ${binarySearch(sortedData, 7)} (pada data terurut)<br><br>
        <b>Bubble Sort:</b> [${bubbleSort(data)}]<br>
        <b>Merge Sort:</b> [${mergeSort(data)}]<br>
        <b>Quick Sort:</b> [${quickSort(data)}]
    `;
}
