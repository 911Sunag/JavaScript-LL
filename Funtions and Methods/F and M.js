function myname(){
    console.log("hello sunag");
}
myname();

function myclass(msg){
    console.log(msg); //parameter

}
myclass("eleven"); //argumrnt

function myclasss(msg , num){
    console.log(msg,num); //parameter

}
myclasss("eleven "+22 ); //argumrnt

function sum(a,b){
    console.log(a+b);
     
}

// count vowles
function countVoweks(strg){
    let count=0;
    for(const char of strg){
        if( char === "a"|| 
            char === "e"||
            char === "i"|| 
            char === "o"|| 
            char === "u" )
        {
           count++;
        }

    }
    console.log(count);

}
// awrrow 
const countvv = (str) => {
     let count=0;
    for(const char of str){
        if( char === "a"|| 
            char === "e"||
            char === "i"|| 
            char === "o"|| 
            char === "u" )
        {
           count++;
        }

    }
    return count;

};