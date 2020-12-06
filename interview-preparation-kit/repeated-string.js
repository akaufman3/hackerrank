// Complete the repeatedString function below.
function repeatedString(s, n) {
    //Prep string to represent num of characters/repetitions.
    if ( s === 'a' ) {
        return n;
    }

    const strLen = s.length;
    const numDup = Math.trunc( n / strLen );
    const numExtraChar = n % strLen;
    let aCount = 0;
    
    //Count number of a in base string set.
    for ( let i = 0; i < s.length; i++ ) {  
        if ( s[i] === 'a' ) {
            aCount++;
        }
    };
    
    //Multiply number of a occurances by number of full string set repeats.
    aCount = aCount * numDup;
    
    //Count a's in remainder portion of string.
    const remainderChar =  s.slice(0, numExtraChar);
    for ( let i = 0; i < remainderChar.length; i++ ) {  
        if ( remainderChar[i] === 'a' ) {
            aCount++;
        }
    };

    return aCount;  
}
