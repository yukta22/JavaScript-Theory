function OddFilteraSync(arr, callback){
  
  var oddNums =	arr.filter(function(num){
  	return num%2;
  });

  var err = arr.length == 0 ? new Error('arr length 0 is not allowed'):null;

  setTimeout(function(){
    callback(err,oddNums);
  },2000);
  console.log("Done")
}

var numbers = [1,2,4,5,6,7,8,9,10];
// var numbers = [];

OddFilteraSync(numbers,function(err,data){
  
  if(err) throw err;
  console.log('data:' ,data);
  console.log("Actually Done");
});