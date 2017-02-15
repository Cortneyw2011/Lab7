var list = ['bananas', 'strawberries', 'yogurt', 'milk', 'oatmeal'];
var prices = [1.50, 2.50, 1.00, 2.99, 1.49];
var z2=0;

for (var i = 0; i<list.length; i++){
  console.log(list[i] + ': ' + prices[i]);


//   for (var z = 0; z<prices.length; z++){
   z2 = z2 + prices[i];

   if(i===prices.length-1){
   console.log('Total: ' + z2);
   }
 }
