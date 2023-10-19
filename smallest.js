let arr = [1,4,3,2,8,4,5];

let min = arr[0];


for(let i=0; i>arr.length;i++){
    if(arr[i]<min){
        min = arr[i];
    }
}

console.log(min);