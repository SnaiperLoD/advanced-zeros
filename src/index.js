module.exports = function getZerosCount(number, base) {
  // your implementation
  let chislo=base;
 
  let arr = [];
    for(let i = 2; i <= chislo; i++){
      while(chislo % i == 0 && chislo > 1){
        arr.push(i);
        chislo = chislo / i;
      }
        if(chislo/i == 1){
          arr.push(chislo);
        }
      }
 let max=0;
 for(let i=0; i<arr.length; i++)
 {
   if(arr[i]>max) max=arr[i];
 }
 let count=0;
 for(let i=max; i<=number; i=i*max)
 {
   count+=Math.floor(number/i);
 }
 return count;
}