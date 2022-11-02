
function primecheck(num){
let count=0;
for(let x=0; x<=num; x++){
if(num%2==0){
count++;
}
}
if(count==2){
return true;
}
return false;
}
let ans=primecheck(13);
if(ans==true){
console.log("prime");
}else{
console.log("not a prime");