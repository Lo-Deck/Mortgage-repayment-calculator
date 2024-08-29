const myForm = document.querySelector('.myForm');
const containerInput = document.querySelectorAll('.container-input');
const labelRadio = document.querySelectorAll('.label-radio');
const result = document.querySelector('.result');


console.log(myForm);
console.log(containerInput);


const setComma = (string) => {

    string = string.toFixed(2);

    string = string.split('').reverse();

    for(let i = 0; i < string.length; i++){

        if(i === 6 || i === 10)
        {
            string.splice(i, 0, ',');
        }
        
    }

    string = string.reverse().join('');
    return string;

}



labelRadio.forEach( (item, index) => {
 
    item.addEventListener('change', () => {

        for(let i = 0; i < labelRadio.length; i++){

            if(i === index){
                labelRadio[i].style.background =  'hsla(61, 70%, 52%, 0.5)';
                labelRadio[i].style.border = '0.0625rem solid #d8db2f';
            }
            else{
                labelRadio[i].style.background =  '';
                labelRadio[i].style.border = '0.0625rem solid #6b94a8';
            }

        }
        
    });

});


let perMonth = 0;
let interest = 0;


myForm.addEventListener('submit', (e) => {

    for(let i = 1; i < myForm.length-1; i++){

        if(!myForm[i].validity.valid){
            
            if(i === 5 || i === 6){
    
                if(!myForm[i].parentElement.parentElement.lastElementChild.classList.contains('error-radio')){

                    const createElement = `<span class="error-radio">This field is required</span>`;
                    myForm[i].parentElement.parentElement.insertAdjacentHTML('beforeend', createElement);

                }

            }

            else{

                if(!myForm[i].parentElement.parentElement.lastElementChild.classList.contains('error')){

                    const createElement = `<span class="error">This field is required</span>`;
                    myForm[i].parentElement.parentElement.insertAdjacentHTML('beforeend', createElement);
                    myForm[i].nextElementSibling.style.background = '#d73328';
                    myForm[i].nextElementSibling.style.color = '#fff';
                    myForm[i].parentElement.style.border = '0.0625rem solid #d73328';

                }

            }

        }
            

        else if(i === myForm.length-2 && (!myForm[2].validity.valid || !myForm[3].validity.valid || !myForm[4].validity.valid)){

            break;

        }

        else{
            
            if( i > 1 && i < 5)
            {

                myForm[i].parentElement.style.border = '0.0625rem solid #6b94a8';
                myForm[i].nextElementSibling.style.background = '#e4f4fd';
                myForm[i].nextElementSibling.style.color = '#4e6e7e';

                if(myForm[i].parentElement.parentElement.lastElementChild.classList.contains('error')){

                    myForm[i].parentElement.parentElement.lastElementChild.remove();

                }

            }

            if(i === 5 || i === 6){

                console.log(i);

                if(myForm[i].parentElement.parentElement.lastElementChild.classList.contains('error-radio')){

                    myForm[i].parentElement.parentElement.lastElementChild.remove();

                }

            }


            if(i === myForm.length-2){

                perMonth = (myForm[2].value * ((myForm[4].value/100)/12))/(1-(1+((myForm[4].value/100)/12))**-(myForm[3].value*12));

                let totalLoan =  (perMonth - myForm[2].value / (myForm[3].value * 12)) * myForm[3].value * 12;
                totalLoan += Number(myForm[2].value);
         
                interest =  perMonth - myForm[2].value / (myForm[3].value * 12); 

                interest = setComma(interest);

                perMonth = setComma(perMonth);

                totalLoan = setComma(totalLoan);
        
                const payment = myForm[5].checked ? `${perMonth}` : `${interest}`;

                const addElementResult = `<div class="result-paiement">
                                            <h2 class="title-result text-bold">Your results</h2>
                                            <p class="text text-result">Your results are shown below based on the information you provided. 
                                            To adjust the results, edit the form and click “calculate repayments” again.</p>
                                            <div class="display-figure">
                                            <p class="text">Your monthly repayments<span id="monthly-paiement">£${payment}</span></p>
                                            <hr class="line">
                                            <p class="text">Total you'll repay over the term<span id="total-loan">£${totalLoan}</span></p>
                                            </div>
                                        </div>`;
            
                result.children[0].remove();
                result.insertAdjacentHTML('afterbegin', addElementResult);                    

            }

        }

    }

    e.preventDefault();

});



myForm.addEventListener('reset', () => {

    labelRadio.forEach((item) => {

        item.style.background =  '';
        item.style.border = '0.0625rem solid #6b94a8';

    });

    if(result.children[0].classList.contains('result-paiement')){

        console.log('fffffffff');

        result.children[0].remove();

        const add = `<div class="container-text">
                        <img class="image-result" src="./images/illustration-empty.svg" alt="illustration-calculator">
                        <h2 class="title-result text-bold">Results shown here</h2>
                        <p class="text text-result">Complete the form and click “calculate repayments” to see what 
                        your monthly repayments would be.</p>
                    </div>`;

        result.insertAdjacentHTML('afterbegin', add);

    }

});



Array.from(myForm).forEach( (item, index) => {

    item.addEventListener('change', () => {

        if(item.checked && index === 5 && result.children[0].classList.contains('result-paiement')){

            document.getElementById('monthly-paiement').innerText = `£${perMonth}`;

        }
        else if(item.checked && index === 6 && result.children[0].classList.contains('result-paiement')){

            document.getElementById('monthly-paiement').innerText = `£${interest}`;

        }

    });

});
