let activities = [
    ['Work', 9],
    ['Eat', 1],
    ['Pray', 2],
    ['Play', 1],
    ['Sleep', 7]
];

/*console.table(activities);
console.log(activities[0][1]);
console.log(activities[0]);*/

// iterando una array de arrays con un bucle for que declara 2 variables (y tiene 2 condiciones de incremento)

for(i = 0,j = 0; i < activities.length; i++, j++){
    console.log(`[${i}][${j}] ${activities[i][j]} / \t [${i}][${j+1}] ${activities[i][j+1]}`)
    j -= 1
}



