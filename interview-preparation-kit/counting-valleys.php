function countingValleys($steps, $path) {
    $vallies = 0;
    $altitude = 0;

    for ($i = 0; $i < $steps; $i++) {
        //Subtract one for decent (can go into neg).
        if ( $path[$i] == 'D' ) {
            $altitude--;
        } else {
            $altitude++;
            
            //If you have returned to 0 you have exited the valley.
            if ( $altitude == 0 ) {
                $vallies++;
            }
        }
    }
    
   return $vallies;

}
