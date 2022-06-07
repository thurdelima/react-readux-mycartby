export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
 
 
})


export const formatVal = (num) => {

   let v = num;
  
  return '$' + v.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ',');
  
}



export const formatValToInt = (num) => {

  let v = num;
 
 let valParse =  v.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ',');

 let valInt = parseFloat(valParse);

 

 return valInt;
 
}
