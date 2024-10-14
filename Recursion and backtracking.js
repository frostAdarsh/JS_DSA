//Recurion is when a function keeps calling itself until a base condition is met.
//function keep calling itself to solve problem

function printNto1(n){
    if(n===0){
        return;
    }
    console.log(n);
    printNto1(n-1)
}

printNto1(5)