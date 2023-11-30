
export default function  useCurrencyFormat()  {
  
    function formatValue(value: number) {
        return value.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        });
    }
    const discountValue = (numLessons: number, value: number) =>  {
        let baseDiscount = 0
   
        if (numLessons >=6){
         baseDiscount = 0.1 // 10% off
        
         return {
           amount: formatValue((value - (value*baseDiscount)) * numLessons),
           perClass: formatValue((value - (value*baseDiscount)))
   
         }
       }
       if (numLessons >=4 && numLessons<=5){
         baseDiscount = 0.05 // 5% off
        
         return {
           amount: formatValue((value - (value*baseDiscount)) * numLessons),
           perClass: formatValue((value - (value*baseDiscount)))
   
         }
       }
        if (numLessons >=2 ){
          baseDiscount = 0.03 // 3% off
         
          return {
           amount: formatValue((value - (value*baseDiscount)) * numLessons),
           perClass: formatValue((value - (value*baseDiscount)))
   
         }
        }
        if (numLessons >=0 ){
         baseDiscount = 0 // 0% off
         
         return {
           amount: formatValue((value - (value*baseDiscount)) * numLessons),
           perClass: formatValue((value - (value*baseDiscount)))
   
         }
        }
        
    }
    function formatTimer(value: number): string {
      const hours = Math.floor(value);
      const minutes = Math.round((value % 1) * 60);
  
      // Formatting to HH:mm
      const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  
      if (hours >=1 ) {
        return `${formattedHours}h ${formattedMinutes}min`
      }else {
  
        return `${formattedMinutes}min`;
      }
    }
    
    return {discountValue, formatValue, formatTimer}
}