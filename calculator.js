var buttons = document.getElementsByClassName('button') ;
var display1 = document.getElementById('display') ;

var operand1 = 0 ;
var operand2 = 0 ;
var operator = 0 ;
var o9 = buttons[5].getAttribute('data-value') ;
console.log(o9) ;
console.log(buttons) ;



for(var i = 0 ; i  < buttons.length ; i++ )
{
    buttons[i].addEventListener('click' , function()
    {
    
        
        var value = this.getAttribute('data-value') ;
        // console.log(value) ;
        if ( value == '+' || value == '-' || value == '*' || value == '/' )
        {
            operand1 = parseFloat(display.innerText) ;
            
            display.innerText = "" ;
            operator = value ;
        }
        else if ( value == "AC")
        {
            display.innerText = "" ;
        }
        else if ( value == "+/-")
        {
            var dv = parseFloat(display.innerText) ;
            dv = -1 * dv ;
            display.innerText = "" ;
            display.innerText += dv ;
        }
        else if ( value == '%' )
        {
            operand1 = parseFloat(display.innerText) ;
            operator = '%' ;
            display.innerText = "" ;
        }
        else if ( value == '=' )
        {
            operand2 = parseFloat(display.innerText) ;
            if ( operator == '/' && operand2 == 0 )
            {
                    display.innerText = 'Error' ;
            }
            else{

                var result = eval(operand1 + " " + operator + operand2 ) ;
                display.innerText = "" ;
                display.innerText += result ;
                operand1 = result ;
                operand2 = 0 ;
                operator = 0 ;
            }

        }
        else
        {
            display.innerText += value ;
        }
        
    } ) ;
    
}