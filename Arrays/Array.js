var names=["Sai","Sunag","Arisu","Arii"];
document.writeln(names)
document.writeln("<br>");
//length
document.writeln("length of arrays: "+names.length);
document.writeln("<br>");
//index
document.writeln("index of 1st name is 0:"+names[0]);

// loops in arrays(for)
for(let i = 0; i<names.length; i++){
    document.writeln("<br>");
    document.writeln(names[i]);
}

//for - of loop
document.writeln("<br>");
let electranics =["iphone","mouse","laptop","samsung"];
for(let product of electranics)
{
    
    document.writeln(product.toUpperCase());
}