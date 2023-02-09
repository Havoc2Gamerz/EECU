function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
    }

    let display = document.getElementById('display');

    let buttons = Array.from(document.getElementsByClassName('button'));
    
    buttons.map( button => {
        button.addEventListener('click', (e) => {
            switch(e.target.innerText){
                case 'C':
                    display.innerText = '';
                    break;
                case '=':
                    try{
                        display.innerText = eval(display.innerText);
                    } catch {
                        display.innerText = "Error"
                    }
                    break;
                case '←':
                    if (display.innerText){
                       display.innerText = display.innerText.slice(0, -1);
                    }
                    break;
                default:
                    display.innerText += e.target.innerText;
            }
        });
    });