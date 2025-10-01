 let a=9;
        let b=9;
        let c=3;
        let d=5;

        // Arithmetic
        document.writeln(a+b)
        document.writeln(a-b)
        document.writeln(a*b)
        document.writeln(a/b)
        document.writeln(a%b)

        document.writeln("<br>")

        //	Increment
        document.writeln(d++)
        
        //Decrement
        document.writeln(d--)
        
        document.writeln("<br>")

        // Comparison
        document.writeln(a==b)
        document.writeln(a!=c)
        document.writeln(a>c)
        document.writeln(a>=c)
        document.writeln(a<c)
        document.writeln(a<=c)

        document.write("<br>")

        //Logical
        document.writeln(a=b && a>c)
        document.writeln(a!=b && c<a)

        document.writeln("<br>")

        document.writeln(a==b || c==a)

        document.writeln("<br>")

        //Ternary or conditional
        let age = 19;
        let CanVote = (age >= 20)? "yes":"no";
        document.writeln(CanVote)