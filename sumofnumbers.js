/**
 *
 * Created by School on 9/18/16.
 */
let testData = [1, 2, 3];

function sumFor(list){
  let sum = 0;
  for(let item of list){
    sum += item;
  }
  return sum;
}

console.log(`sum for ${sumFor(testData)}`);


function sumWhile(list){
  let sum = 0;
  let i = 0;
  while(i<list.length){
    sum += list[i];
    i++;
  }
  return sum;
}

console.log(`sum while ${sumWhile(testData)}`);


function sumRecursion(list){
  if(list.length == 0){
    return 0;
  } else {
    return list[0] + sumRecursion(list.slice(1, list.length));
  }
}

console.log(`recursion ${sumRecursion(testData)}`);


function sumTheSimpleWay(list){
  return _.reduce(list, function(memo, num) { return memo + num;} , 0);
}

console.log(`The simple way ${sumTheSimpleWay(testData)}`);
