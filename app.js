function wordCompare([arg1,arg2]){
    let first = arg1.toLowerCase();
    let second = arg2.toLowerCase();

    if (first == second){
        console.log('Same');
    } else{
    console.log('Not same');
    }
}

wordCompare(['CAT', 'Cat']);
