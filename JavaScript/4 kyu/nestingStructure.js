// Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structures and same corresponding length of nested arrays as the first array.

// For example:
//  should return true
// [ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );          
// [ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );  

//   should return false 
// [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );  
// [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );  

//  should return true
// [ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ); 

//  should return false
// [ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );     
// For your convenience, there is already a function 'isArray(o)' declared and defined that returns true if its argument is an array, false otherwise.
// Return 'true' if and only if 'other' has the same
    // nesting structure as 'this'.

    // Note: You are given a function isArray(o) that returns
    // whether its argument is an array.

function isArray(array) {
    return array.constructor === Array;
}
// isArray can check if the whole object is an array like [1, [1, 1]] but can also be used on an element within the array such as the 
// second index in that array, the [1, 1] portion [2, [2, 2], 2]
// other is the new input we have to account for. Array.protoype. and .this are for what the test cases give us, what we have to compare to

Array.prototype.sameStructureAs = function (other) {
    //if the new input array is not an array return false
    if(!isArray(other)) return false;
    //if the length of the two arrays are not the same return false
    if(this.length != other.length) return false;

    return this.every((element, i) => {
        const otherElement = other[i];
        //if the element is an array and not the same structure as the other array index return false
        if(isArray(element) && !element.sameStructureAs(otherElement)){
            //something like ([ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] ) the first index of each are different
            return false;
        //else if the element is not an array, just a number, and the other element is an array, that's not equal either
        } else if(!isArray(element) && isArray(otherElement)){
            return false;
        }
        //this accounts for all posibilities of falsity, so all other instances will be true
        return true;
    });
};


console.log([ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] ));          
console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] ));  

 // should return false 
console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] ));  
console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] ));  

// should return true
console.log([ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] )); 

// should return false
console.log([ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] ));   