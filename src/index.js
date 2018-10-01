module.exports = function getZerosCount(number, base) {
  // your implementation
  let chislo=base;
  let del=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,83,89,97,101,103,107,109,113,127];
  let idel=0;
  let power=new Array();
  for(let i=0;i<base/2;i++)
  {
    power[i]=0;
  }
  let arr = [];
    
    for(let i = 2; i <= chislo; i++){
      while(chislo % i == 0 && chislo > 1){
        arr.push(i);
        chislo = chislo / i;
        power[i]++;
      }
        if(chislo/i == 1){
          arr.push(chislo);
        }
      }
  for( let i=0; i<base/2; i++)
  {
    if(power[i]==0) power[i]=9;
  }
  let minu=0;
  for (let i=0; i<power.length; i++)
  {
    if (power[i]<power[minu])
    minu=i;
  }
 const delt=arr[minu];
 let count=0;
 for(let i=delt; i<=number; i=i*delt)
 {
   count+=Math.floor(number/i);
 }
  return count;
}