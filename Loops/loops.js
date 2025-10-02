// for Loop
for(let i = 0; i <= 10 ; i++){
    document.writeln("<br>");
    document.writeln("Number from 1-10: " + i);
}
document.writeln("<br>");
for(let x=10; x >= 0; x--){
    document.writeln("<br>");
    document.writeln("Number from 10-1: "+ x);
}
document.writeln("<br>");
for(let z = 1; z <= 20; z++){
    document.writeln("<br>");
    document.writeln("Numbers from 1-15: ");
    if(z===16)
    {
        break;
    }
    else
    {
      document.writeln(z);
    }
}
document.writeln("<br>");

//while loops

let a=1;
while(a < 11){
    document.writeln("<br>");
    document.writeln(a);
    a++
}

// Most used loops