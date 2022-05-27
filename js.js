//პირველი ტასკი
var group1=["one", "two","three", "four", "five", "six"];

for(var i=0; i<group1.lenght; i++){
  console.log(group1[i]);
}

//for ( var index in group1){
//    document.write(group1[index]+ "</br>");
//}

//var x=1;
//do{
//    document.write(x*x+"</br>");
//    x++
//}
///while(x<=10);

//var numbers = [1,2,3,4,5,6,7,8,9,10];
//for (var i=0; i<numbers.length; i++){
  //  if (numbers[i]>10)
    //break;
    //document.write(numbers[i]+ "</br>");
//} 
//მეორე ტასკი


//მესამე ტასკი

var arr= [15,53,22,198,10,28,16,70,33,951]
var result=arr.filter ((n) => n%2 ==1)
document.write(result);