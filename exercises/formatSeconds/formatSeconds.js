/**
 * Takes an integer representing a number of seconds as input and
 * returns a formatted string representing the same amount of time.
 *
 * See the examples of the format below.
 *
 * @example
 * formatSeconds(45);      // => '45s'
 * formatSeconds(175);     // => '2m 55s'
 * formatSeconds(1234);    // => '20m 34s'
 * formatSeconds(10815);   // => '3h 0m 15s';
 * formatSeconds(12345);   // => '3h 25m 45s'
 * formatSeconds(1210459); // => '2w 0h 14m 19s'
 *
 * @param {number} seconds - An integer amount of time (in seconds)
 * @returns {string} The same amount of time but formatted.
 */

function formatSeconds(num) {
  let lessThanAMinute = num<60;
  let moreThanAMinute = num>60;
  let minute = sixtySeconds;
  
  if(num<60){
      return lessThanAMinute;
  
  }else{
      if(num>60)
  return moreThanAMinute
  }
  
  if(num=lessThanAMinute){
      return(num + 's')
  
      
      }
  }
  
  
  if (require.main === module) {
      console.log('Running sanity checks for selectLessThan:');
    console.log(formatSeconds(45)); 
  
    }
    
    module.exports = formatSeconds;