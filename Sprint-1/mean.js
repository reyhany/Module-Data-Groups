function mean(arr){
if(arr.length === 0) return 0 ;

let sum = 0;                             //start value
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    
}
return sum/arr.length;
} 

module.exports = mean;




