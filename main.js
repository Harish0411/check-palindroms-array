//check howmany palindrom in the array

let arr = [121, 46, 2002, 345, 988, 220022, 45];
let palindrom = [];
let notPalindrom =[];

for(i=0; i<arr.length; i++){
    
     let a=arr[i],temp=arr[i],c=0;
	
     while(a>0){
	     b = a%10;
		 a = parseInt(a/10);
		 c = c*10 + b;
	  }
	  if(c == temp){
	     palindrom.push(temp);
		}
	  else{
	    notPalindrom.push(temp);
     }
}
 console.log(arr);
 console.log(`${palindrom.length} palindrom are there in ${arr}`);
 console.log(`${notPalindrom.length} non-palindrom are there in ${arr}`);