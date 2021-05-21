function checkYuGiOh(n) {

    if (isNaN(n) === true) {
        console.log(`invalid parameter: ${n}`);
        return;
    }

    const arr = [];
    for (let i = 1; i<= n; i++) {
     if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
        arr.push("Yu-Gi-Oh");
     } else if (i % 2 === 0 && i % 3 === 0) {
        arr.push("Yu-Gi");
     } else if (i % 2 === 0 && i % 5 === 0) {
        arr.push("Yu-Oh");
     } else if (i % 3 === 0 && i % 5 === 0) {
        arr.push("Gi-Oh");
     } else if (i % 2 === 0) {
        arr.push("Yu");
     } else if (i % 3 === 0) {
        arr.push("Gi");
     } else if (i % 5 === 0) {
        arr.push("Oh");
     } else {
        arr.push(i);
     }


     console.log(arr);
    }
}

checkYuGiOh("5")
checkYuGiOh("10")
checkYuGiOh("fizzbuzz is meh")