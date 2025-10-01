        //if

        let Numbers = 20;

        if(Numbers >= 20){
                document.writeln("Entered Number is a Postive Number")
             
        }

        //if-else

        let age =16;
        
        if(age>=18){
            document.writeln("<br>")    
            document.writeln("You Can Drive a car")
        }
        else{
            document.writeln("<br>")
            document.writeln("You can't drive a car")
        }

        //if-else-if

        let score = 45;
        
        if(score >= 50){
                document.writeln("<br>")
                document.writeln("Your Passed With A Grade")
        }
        else if(score >= 40)
        {
                document.writeln("<br>")
                document.writeln("Your Passed With B Grade");
        }
        else if(score >= 30)
        {
                document.writeln("<br>")
                document.writeln("Your Passed With C Grade");
        }
        else if(score >= 20)
        {
                document.writeln("<br>")
                document.writeln("Your Passed With D Grade")
        }
        else
        {
                document.writeln("<br>")
                document.writeln("Good Luck Next Time")
        }

        //Switch Case

        let day = 0;

        switch(day)
        {

                case 1:
                       document.writeln("<br>") 
                       document.writeln("Monday")
                       break;

                case 2:
                       document.writeln("<br>") 
                       document.writeln("Tueday")
                       break;
                case 3:
                        document.writeln("<br>")
                        document.writeln("Wednesday")
                        break;
                case 4:
                        document.writeln("<br>")
                        document.writeln("Thursday")
                        break;
                case 5:
                        document.writeln("<br>")
                        document.writeln("Friday")
                        break;
                case 6:
                        document.writeln("<br>")
                        document.writeln("Saturday")
                        break;
                case 7:
                        document.writeln("<br>")
                        document.writeln("Sunday")
                        break;
                default:
                        document.writeln("<br>")
                document.writeln("Please Enter Day Between 1-7 Only")        
        }