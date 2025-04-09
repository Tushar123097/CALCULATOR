//🔍 What it does:
//This selects all the elements with the
//  class .btn (which are your calculator buttons) and stores
//  them in the buttons variable as a NodeList (like an array of elements).
let buttons = document.querySelectorAll('.btn');
let inputBox = document.querySelector('input');

let string = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if(value === 'AC')
        {
          string = '';
          inputBox.value = '';
        }else if(value === '=')
        {
          try
          {
            string = eval(string).toString();
            inputBox.value = string;
          }catch(err)
          {
             inputBox.value = 'Error';
             string = '';
          }
        }else{
            string = string + value;
            inputBox.value = string;
        }
    })
})