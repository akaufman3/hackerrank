function jumpingOnClouds(c) {
    let numMove = 0;
    
    //Only loop up until second to last item in so you dont over increment the moves.
    for (var i = 0; i < ( c.length - 1 ); i++){
        if ( (i + 2) < c.length && c[(i + 2)] == 0 ) {
            numMove++;
            i++;
        } else {
            numMove++;
        }
    }

    return numMove;
}
