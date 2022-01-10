const getCurrentRate = async (from, to) => {
       
    const response = await fetch(`https://api.exchangerate.host/latest?base=${from}&symbols=${to}`);
    const data = await response.json();
    console.log(data);
    return data
    }
     
 
 const fromRub = document.querySelector('.from_rub');
 const fromUsd = document.querySelector('.from_usd');
 const fromEur = document.querySelector('.from_eur');
 const fromGbp = document.querySelector('.from_gbp');
 console.log(fromGbp);
 console.log(fromRub);
 
 const toRub = document.querySelector('.to_rub');
 const toUsd = document.querySelector('.to_usd');
 const toEur = document.querySelector('.to_eur');
 const toGbp = document.querySelector('.to_gbp');
 
 const inputFrom = document.querySelector('.calc__input_box__from');
 const inputTo = document.querySelector('.calc__input_box__to');
 const rateFrom = document.querySelector('.calc__from__rate');
 const rateTo = document.querySelector('.calc__to__rate');
 


 getCurrentRate('RUB', 'USD')
 .then(response => {
    rateFrom.innerHTML = `1 RUB = ${response.rates.USD} USD`;
    inputTo.value = inputFrom.value * response.rates.USD;
 })
 .catch((err) => {
   rateFrom.innerHTML = `Что-то пошло не так`;
})
getCurrentRate('USD', 'RUB')
 .then(response => {
    rateTo.innerHTML = `1 USD = ${response.rates.RUB} RUB`;
 }) 
 .catch((err) => {
   rateFrom.innerHTML = `Что-то пошло не так`;
})
  
 //RUB

fromRub.addEventListener('click', () => {
   fromRub.classList.add('active')
   fromEur.classList.remove('active')
   fromUsd.classList.remove('active')
   fromGbp.classList.remove('active')

   if (toEur.classList[1] == 'active') {
      getCurrentRate('RUB', 'EUR')
         .then(response => {
            
            rateFrom.innerHTML = `1 RUB = ${response.rates.EUR} EUR`;
            inputTo.value = inputFrom.value * response.rates.EUR;
         })
         .catch((err) => {
            rateFrom.innerHTML = `Что-то пошло не так`;
         })
         
      getCurrentRate('EUR', 'RUB')
         .then(response => {
            rateTo.innerHTML = `1 EUR = ${response.rates.RUB} RUB`;
         })
         .catch((err) => {
            rateFrom.innerHTML = `Что-то пошло не так`;
         })
   } else if (toUsd.classList[1] == 'active') {
      getCurrentRate('RUB', 'USD')
         .then(response => {
            rateFrom.innerHTML = `1 RUB = ${response.rates.USD} USD`;
            inputTo.value = inputFrom.value * response.rates.USD;
         })
         .catch((err) => {
            rateFrom.innerHTML = `Что-то пошло не так`;
         })
      getCurrentRate('USD', 'RUB')
         .then(response => {
            rateTo.innerHTML = `1 USD = ${response.rates.RUB} RUB`;
         })
         .catch((err) => {
            rateFrom.innerHTML = `Что-то пошло не так`;
         })
   } else if (toGbp.classList[1] == 'active') {
      getCurrentRate('RUB', 'GBP')
         .then(response => {
            rateFrom.innerHTML = `1 RUB = ${response.rates.GBP} GBP`;
            inputTo.value = inputFrom.value * response.rates.GBP;
         })
         .catch((err) => {
            rateFrom.innerHTML = `Что-то пошло не так`;
         })
      getCurrentRate('GBP', 'RUB')
         .then(response => {
            rateTo.innerHTML = `1 GBP = ${response.rates.RUB} RUB`;
         })
         .catch((err) => {
            rateFrom.innerHTML = `Что-то пошло не так`;
         })
   } else if (toRub.classList[1] == 'active') {
      rateFrom.innerHTML = `1 RUB = 1 RUB`;
      inputTo.value = inputFrom.value;
      rateTo.innerHTML = `1 RUB = 1 RUB`;
   }
})

toRub.addEventListener('click', () => {
   toEur.classList.remove('active')
   toGbp.classList.remove('active')
   toUsd.classList.remove('active')
   toRub.classList.add('active')

   if (fromEur.classList[1] == 'active') {
      getCurrentRate('RUB', 'EUR')
         .then(response => {
            rateFrom.innerHTML = `1 RUB = ${response.rates.EUR} EUR`;
            inputTo.value = inputFrom.value / response.rates.EUR;
         })
         .catch((err) => {
            rateFrom.innerHTML = `Что-то пошло не так`;
         })
      getCurrentRate('EUR', 'RUB')
         .then(response => {
            rateTo.innerHTML = `1 EUR = ${response.rates.RUB} RUB`;
         })
         .catch((err) => {
            rateFrom.innerHTML = `Что-то пошло не так`;
         })
   } else if (fromUsd.classList[1] == 'active') {
      getCurrentRate('RUB', 'USD')
         .then(response => {
            rateFrom.innerHTML = `1 RUB = ${response.rates.USD} USD`;
            inputTo.value = inputFrom.value / response.rates.USD;
         })
         .catch((err) => {
            rateFrom.innerHTML = `Что-то пошло не так`;
         })
      getCurrentRate('USD', 'RUB')
         .then(response => {
            rateTo.innerHTML = `1 USD = ${response.rates.RUB} RUB`;
         })
         .catch((err) => {
            rateFrom.innerHTML = `Что-то пошло не так`;
         })
   } else if (fromGbp.classList[1] == 'active') {
      getCurrentRate('RUB', 'GBP')
         .then(response => {
            rateFrom.innerHTML = `1 RUB = ${response.rates.GBP} GBP`;
            inputTo.value = inputFrom.value / response.rates.GBP;
         })
         .catch((err) => {
            rateFrom.innerHTML = `Что-то пошло не так`;
         })
      getCurrentRate('GBP', 'RUB')
         .then(response => {
            rateTo.innerHTML = `1 GBP = ${response.rates.RUB} RUB`;
         })
         .catch((err) => {
            rateFrom.innerHTML = `Что-то пошло не так`;
         })
   } else if (fromRub.classList[1] == 'active') {
      rateFrom.innerHTML = `1 RUB = 1 RUB`;
      inputTo.value = inputFrom.value;
      rateTo.innerHTML = `1 RUB = 1 RUB`;
   }
})
  
 //USD
 
fromUsd.addEventListener('click', () => {
   fromRub.classList.remove('active')
   fromEur.classList.remove('active')
   fromUsd.classList.add('active')
   fromGbp.classList.remove('active')

   if (toEur.classList[1] == 'active') {
      getCurrentRate('USD', 'EUR')
         .then(response => {
            rateFrom.innerHTML = `1 USD = ${response.rates.EUR} EUR`;
            inputTo.value = inputFrom.value / response.rates.EUR;
         })
         .catch((err) => {
            rateFrom.innerHTML = `Что-то пошло не так`;
         })
      getCurrentRate('EUR', 'USD')
         .then(response => {
            rateTo.innerHTML = `1 EUR = ${response.rates.USD} USD`;
         })
         .catch((err) => {
            rateFrom.innerHTML = `Что-то пошло не так`;
         })
   } else if (toRub.classList[1] == 'active') {
      getCurrentRate('USD', 'RUB')
         .then(response => {
            rateFrom.innerHTML = `1 USD = ${response.rates.RUB} RUB`;
            inputTo.value = inputFrom.value * response.rates.RUB;
         })
         .catch((err) => {
            rateFrom.innerHTML = `Что-то пошло не так`;
         })
      getCurrentRate('RUB', 'USD')
         .then(response => {
            rateTo.innerHTML = `1 RUB = ${response.rates.USD} USD`;
         })
         .catch((err) => {
            rateFrom.innerHTML = `Что-то пошло не так`;
         })
   } else if (toGbp.classList[1] == 'active') {
      getCurrentRate('USD', 'GBP')
         .then(response => {
            rateFrom.innerHTML = `1 USD = ${response.rates.GBP} GBP`;
            inputTo.value = inputFrom.value * response.rates.GBP;
         })
         .catch((err) => {
            rateFrom.innerHTML = `Что-то пошло не так`;
         })
      getCurrentRate('GBP', 'USD')
         .then(response => {
            rateTo.innerHTML = `1 GBP = ${response.rates.USD} USD`;
         })
         .catch((err) => {
            rateFrom.innerHTML = `Что-то пошло не так`;
         })
   } else if (toUsd.classList[1] == 'active') {
      rateFrom.innerHTML = `1 USD = 1 USD`;
      inputTo.value = inputFrom.value;
      rateTo.innerHTML = `1 USD = 1 USD`;
   }
})

toUsd.addEventListener('click', () => {
   toEur.classList.remove('active')
   toGbp.classList.remove('active')
   toUsd.classList.add('active')
   toRub.classList.remove('active')

   if (fromEur.classList[1] == 'active') {
      getCurrentRate('EUR', 'USD')
         .then(response => {
            rateFrom.innerHTML = `1 EUR = ${response.rates.USD} USD`;
            inputTo.value = inputFrom.value * response.rates.USD;
         })
         .catch((err) => {
            rateFrom.innerHTML = `Что-то пошло не так`;
         })
      getCurrentRate('USD', 'EUR')
         .then(response => {
            rateTo.innerHTML = `1 USD = ${response.rates.EUR} EUR`;
         })
         .catch((err) => {
            rateFrom.innerHTML = `Что-то пошло не так`;
         })
   } else if (fromRub.classList[1] == 'active') {
      getCurrentRate('RUB', 'USD')
         .then(response => {
            rateFrom.innerHTML = `1 RUB = ${response.rates.USD} USD`;
            inputTo.value = inputFrom.value * response.rates.USD;
         })
         .catch((err) => {
            rateFrom.innerHTML = `Что-то пошло не так`;
         })
      getCurrentRate('USD', 'RUB')
         .then(response => {
            rateTo.innerHTML = `1 USD = ${response.rates.RUB} RUB`;
         })
         .catch((err) => {
            rateFrom.innerHTML = `Что-то пошло не так`;
         })
   } else if (fromGbp.classList[1] == 'active') {
      getCurrentRate('GBP', 'USD')
         .then(response => {
            rateFrom.innerHTML = `1 GBP = ${response.rates.USD} USD`;
            inputTo.value = inputFrom.value * response.rates.USD;
         })
         .catch((err) => {
            rateFrom.innerHTML = `Что-то пошло не так`;
         })
      getCurrentRate('USD', 'GBP')
         .then(response => {
            rateTo.innerHTML = `1 USD = ${response.rates.GBP} GBP`;
         })
         .catch((err) => {
            rateFrom.innerHTML = `Что-то пошло не так`;
         })
      } else if (fromUsd.classList[1] == 'active') {
         rateFrom.innerHTML = `1 USD = 1 USD`;
         inputTo.value = inputFrom.value;
         rateTo.innerHTML = `1 USD = 1 USD`;
      }
})
  
 //EUR
 
fromEur.addEventListener('click', () => {
   fromRub.classList.remove('active')
   fromEur.classList.add('active')
   fromGbp.classList.remove('active')
   fromUsd.classList.remove('active')

   if (toRub.classList[1] == 'active') {
      getCurrentRate('EUR', 'RUB')
         .then(response => {
            rateFrom.innerHTML = `1 EUR = ${response.rates.RUB} RUB`;
            inputTo.value = inputFrom.value * response.rates.RUB;
         })
         .catch((err) => {
            rateFrom.innerHTML = `Что-то пошло не так`;
         })
      getCurrentRate('RUB', 'EUR')
         .then(response => {
            rateTo.innerHTML = `1 RUB = ${response.rates.EUR} EUR`;
         })
         .catch((err) => {
            rateFrom.innerHTML = `Что-то пошло не так`;
         })
   } else if (toUsd.classList[1] == 'active') {
      getCurrentRate('EUR', 'USD')
         .then(response => {
            rateFrom.innerHTML = `1 EUR = ${response.rates.USD} USD`;
            inputTo.value = inputFrom.value * response.rates.USD;
         })
         .catch((err) => {
            rateFrom.innerHTML = `Что-то пошло не так`;
         })
      getCurrentRate('USD', 'EUR')
         .then(response => {
            rateTo.innerHTML = `1 USD = ${response.rates.EUR} EUR`;
         })
         .catch((err) => {
            rateFrom.innerHTML = `Что-то пошло не так`;
         })
   } else if (toGbp.classList[1] == 'active') {
      getCurrentRate('EUR', 'GBP')
         .then(response => {
            rateFrom.innerHTML = `1 EUR = ${response.rates.GBP} GBP`;
            inputTo.value = inputFrom.value * response.rates.GBP;
         })
         .catch((err) => {
            rateFrom.innerHTML = `Что-то пошло не так`;
         })
      getCurrentRate('GBP', 'EUR')
         .then(response => {
            rateTo.innerHTML = `1 GBP = ${response.rates.EUR} EUR`;
         })
         .catch((err) => {
            rateFrom.innerHTML = `Что-то пошло не так`;
         })
      } else if (toEur.classList[1] == 'active') {
         rateFrom.innerHTML = `1 EUR = 1 EUR`;
         inputTo.value = inputFrom.value;
         rateTo.innerHTML = `1 EUR = 1 EUR`;
      }
})

toEur.addEventListener('click', () => {
   toEur.classList.add('active')
   toGbp.classList.remove('active')
   toUsd.classList.remove('active')
   toRub.classList.remove('active')

   if (fromRub.classList[1] == 'active') {
      getCurrentRate('RUB', 'EUR')
         .then(response => {
            rateFrom.innerHTML = `1 RUB = ${response.rates.EUR} EUR`;
            inputTo.value = inputFrom.value * response.rates.EUR;
         })
         .catch((err) => {
            rateFrom.innerHTML = `Что-то пошло не так`;
         })
      getCurrentRate('EUR', 'RUB')
         .then(response => {
            rateTo.innerHTML = `1 EUR = ${response.rates.RUB} RUB`;
         })
         .catch((err) => {
            rateFrom.innerHTML = `Что-то пошло не так`;
         })
   } else if (fromUsd.classList[1] == 'active') {
      getCurrentRate('USD', 'EUR')
         .then(response => {
            rateFrom.innerHTML = `1 USD = ${response.rates.EUR} EUR`;
            inputTo.value = inputFrom.value / response.rates.EUR;
         })
         .catch((err) => {
            rateFrom.innerHTML = `Что-то пошло не так`;
         })
      getCurrentRate('EUR', 'USD')
         .then(response => {
            rateTo.innerHTML = `1 EUR = ${response.rates.USD} USD`;
         })
         .catch((err) => {
            rateFrom.innerHTML = `Что-то пошло не так`;
         })
   } else if (fromGbp.classList[1] == 'active') {
      getCurrentRate('GBP', 'EUR')
         .then(response => {
            rateFrom.innerHTML = `1 GBP = ${response.rates.EUR} EUR`;
            inputTo.value = inputFrom.value * response.rates.EUR;
         })
         .catch((err) => {
            rateFrom.innerHTML = `Что-то пошло не так`;
         })
      getCurrentRate('EUR', 'GBP')
         .then(response => {
            rateTo.innerHTML = `1 EUR = ${response.rates.GBP} GBP`;
         })
         .catch((err) => {
            rateFrom.innerHTML = `Что-то пошло не так`;
         })
      } else if (fromEur.classList[1] == 'active') {
         rateFrom.innerHTML = `1 EUR = 1 EUR`;
         inputTo.value = inputFrom.value;
         rateTo.innerHTML = `1 EUR = 1 EUR`;
      }
})
  
 //GBP
 
fromGbp.addEventListener('click', () => {
   fromRub.classList.remove('active')
   fromEur.classList.remove('active')
   fromGbp.classList.add('active')
   fromUsd.classList.remove('active')

   if (toRub.classList[1] == 'active') {
      getCurrentRate('GBP', 'RUB')
         .then(response => {
            rateFrom.innerHTML = `1 GBP = ${response.rates.RUB} RUB`;
            inputTo.value = inputFrom.value * response.rates.RUB;
         })
         .catch((err) => {
            rateFrom.innerHTML = `Что-то пошло не так`;
         })
      getCurrentRate('RUB', 'GBP')
         .then(response => {
            rateTo.innerHTML = `1 RUB = ${response.rates.GBP} GBP`;
         })
         .catch((err) => {
            rateFrom.innerHTML = `Что-то пошло не так`;
         })
   } else if (toUsd.classList[1] == 'active') {
      getCurrentRate('GBP', 'USD')
         .then(response => {
            rateFrom.innerHTML = `1 GBP = ${response.rates.USD} USD`;
            inputTo.value = inputFrom.value * response.rates.USD;
         })
         .catch((err) => {
            rateFrom.innerHTML = `Что-то пошло не так`;
         })
      getCurrentRate('USD', 'GBP')
         .then(response => {
            rateTo.innerHTML = `1 USD = ${response.rates.GBP} GBP`;
         })
         .catch((err) => {
            rateFrom.innerHTML = `Что-то пошло не так`;
         })
   } else if (toGbp.classList[1] == 'active') {
      getCurrentRate('GBP', 'EUR')
         .then(response => {
            rateFrom.innerHTML = `1 GBP = ${response.rates.EUR} EUR`;
            inputTo.value = inputFrom.value * response.rates.EUR;
         })
         .catch((err) => {
            rateFrom.innerHTML = `Что-то пошло не так`;
         })
      getCurrentRate('EUR', 'GBP')
         .then(response => {
            rateTo.innerHTML = `1 EUR = ${response.rates.GBP} GBP`;
         })
         .catch((err) => {
            rateFrom.innerHTML = `Что-то пошло не так`;
         })
      } else if (toGbp.classList[1] == 'active') {
         rateFrom.innerHTML = `1 GBP = 1 GBP`;
         inputTo.value = inputFrom.value;
         rateTo.innerHTML = `1 GBP = 1 GBP`;
      }
})

toGbp.addEventListener('click', () => {
   toEur.classList.remove('active')
   toGbp.classList.add('active')
   toUsd.classList.remove('active')
   toRub.classList.remove('active')

   if (fromRub.classList[1] == 'active') {
      getCurrentRate('RUB', 'GBP')
         .then(response => {
            rateFrom.innerHTML = `1 RUB = ${response.rates.GBP} GBP`;
            inputTo.value = inputFrom.value * response.rates.GBP;
         })
         .catch((err) => {
            rateFrom.innerHTML = `Что-то пошло не так`;
         })
      getCurrentRate('GBP', 'RUB')
         .then(response => {
            rateTo.innerHTML = `1 GBP = ${response.rates.RUB} RUB`;
         })
         .catch((err) => {
            rateFrom.innerHTML = `Что-то пошло не так`;
         })
   } else if (fromUsd.classList[1] == 'active') {
      getCurrentRate('USD', 'GBP')
         .then(response => {
            rateFrom.innerHTML = `1 USD = ${response.rates.GBP} GBP`;
            inputTo.value = inputFrom.value * response.rates.GBP;
         })
         .catch((err) => {
            rateFrom.innerHTML = `Что-то пошло не так`;
         })
      getCurrentRate('GBP', 'USD')
         .then(response => {
            rateTo.innerHTML = `1 GBP = ${response.rates.USD} USD`;
         })
         .catch((err) => {
            rateFrom.innerHTML = `Что-то пошло не так`;
         })
   } else if (fromEur.classList[1] == 'active') {
      getCurrentRate('EUR', 'GBP')
         .then(response => {
            rateFrom.innerHTML = `1 EUR = ${response.rates.GBP} GBP`;
            inputTo.value = inputFrom.value * response.rates.GBP;
         })
         .catch((err) => {
            rateFrom.innerHTML = `Что-то пошло не так`;
         })
      getCurrentRate('GBP', 'EUR')
         .then(response => {
            rateTo.innerHTML = `1 GBP = ${response.rates.EUR} EUR`;
         })
         .catch((err) => {
            rateFrom.innerHTML = `Что-то пошло не так`;
         })
      } else if (fromGbp.classList[1] == 'active') {
         rateFrom.innerHTML = `1 GBP = 1 GBP`;
         inputTo.value = inputFrom.value;
         rateTo.innerHTML = `1 GBP = 1 GBP`;
      }
})

 


  //**************************************************************************************/
 inputFrom.addEventListener('keyup', (event) => {
    if (fromRub.classList[1] == 'active' && toUsd.classList[1] == 'active') {
       getCurrentRate('RUB', 'USD')
          .then(response => {
            rateFrom.innerHTML = `1 RUB = ${response.rates.USD} USD`;
             inputTo.value = inputFrom.value * response.rates.USD;
          })
       getCurrentRate('USD', 'RUB')
          .then(response => {
            rateTo.innerHTML = `1 USD = ${response.rates.RUB} RUB`;
          })
    } else if (fromRub.classList[1] == 'active' && toEur.classList[1] == 'active') {
       getCurrentRate('RUB', 'EUR')
          .then(response => {
            rateFrom.innerHTML = `1 RUB = ${response.rates.EUR} EUR`;
             inputTo.value = inputFrom.value * response.rates.EUR;
          })
       getCurrentRate('EUR', 'RUB')
          .then(response => {
            rateTo.innerHTML = `1 EUR = ${response.rates.RUB} RUB`;
          })
    } else if (fromRub.classList[1] == 'active' && toGbp.classList[1] == 'active') {
       getCurrentRate('RUB', 'GBP')
          .then(response => {
            rateFrom.innerHTML = `1 RUB = ${response.rates.GBP} GBP`;
             inputTo.value = inputFrom.value * response.rates.GBP;
          })
       getCurrentRate('GBP', 'RUB')
          .then(response => {
            rateTo.innerHTML = `1 GBP = ${response.rates.RUB} RUB`;
          })
    } else if (fromUsd.classList[1] == 'active' && toRub.classList[1] == 'active') {
       getCurrentRate('USD', 'RUB')
          .then(response => {
            rateFrom.innerHTML = `1 USD = ${response.rates.RUB} RUB`;
             inputTo.value = inputFrom.value * response.rates.RUB;
          })
       getCurrentRate('RUB', 'USD')
          .then(response => {
            rateTo.innerHTML = `1 RUB = ${response.rates.USD} USD`;
          })
    } else if (fromUsd.classList[1] == 'active' && toEur.classList[1] == 'active') {
       getCurrentRate('USD', 'EUR')
          .then(response => {
            rateFrom.innerHTML = `1 USD = ${response.rates.EUR} EUR`;
             inputTo.value = inputFrom.value * response.rates.EUR;
          })
       getCurrentRate('EUR', 'USD')
          .then(response => {
            rateTo.innerHTML = `1 EUR = ${response.rates.USD} USD`;
          })
    } else if (fromUsd.classList[1] == 'active' && toGbp.classList[1] == 'active') {
       getCurrentRate('USD', 'GBP')
          .then(response => {
            rateFrom.innerHTML = `1 USD = ${response.rates.GBP} GBP`;
             inputTo.value = inputFrom.value * response.rates.GBP;
          })
       getCurrentRate('GBP', 'USD')
          .then(response => {
            rateTo.innerHTML = `1 GBP = ${response.rates.USD} USD`;
          })
    } else if (fromEur.classList[1] == 'active' && toRub.classList[1] == 'active') {
       getCurrentRate('EUR', 'RUB')
          .then(response => {
            rateFrom.innerHTML = `1 EUR = ${response.rates.RUB} RUB`;
             inputTo.value = inputFrom.value * response.rates.RUB;
          })
       getCurrentRate('RUB', 'EUR')
          .then(response => {
            rateTo.innerHTML = `1 RUB = ${response.rates.EUR} EUR`;
          })
    } else if (fromEur.classList[1] == 'active' && toUsd.classList[1] == 'active') {
       getCurrentRate('EUR', 'USD')
          .then(response => {
            rateFrom.innerHTML = `1 EUR = ${response.rates.USD} USD`;
             inputTo.value = inputFrom.value * response.rates.USD;
          })
       getCurrentRate('USD', 'EUR')
          .then(response => {
            rateTo.innerHTML = `1 USD = ${response.rates.EUR} EUR`;
          })
    } else if (fromEur.classList[1] == 'active' && toGbp.classList[1] == 'active') {
       getCurrentRate('EUR', 'GBP')
          .then(response => {
            rateFrom.innerHTML = `1 EUR = ${response.rates.GBP} GBP`;
             inputTo.value = inputFrom.value * response.rates.GBP;
          })
       getCurrentRate('GBP', 'EUR')
          .then(response => {
            rateTo.innerHTML = `1 GBP = ${response.rates.EUR} EUR`;
          })
    } else if (fromGbp.classList[1] == 'active' && toRub.classList[1] == 'active') {
       getCurrentRate('GBP', 'RUB')
          .then(response => {
            rateFrom.innerHTML = `1 GBP = ${response.rates.RUB} RUB`;
             inputTo.value = inputFrom.value * response.rates.RUB;
          })
       getCurrentRate('RUB', 'GBP')
          .then(response => {
            rateTo.innerHTML = `1 RUB = ${response.rates.GBP} GBP`;
          })
    } else if (fromGbp.classList[1] == 'active' && toUsd.classList[1] == 'active') {
       getCurrentRate('GBP', 'USD')
          .then(response => {
            rateFrom.innerHTML = `1 GBP = ${response.rates.USD} USD`;
             inputTo.value = inputFrom.value * response.rates.USD;
          })
       getCurrentRate('USD', 'GBP')
          .then(response => {
            rateTo.innerHTML = `1 USD = ${response.rates.GBP} GBP`;
          })
    } else if (fromGbp.classList[1] == 'active' && toEur.classList[1] == 'active') {
       getCurrentRate('GBP', 'EUR')
          .then(response => {
            rateFrom.innerHTML = `1 GBP = ${response.rates.EUR} EUR`;
             inputTo.value = inputFrom.value * response.rates.EUR;
          })
       getCurrentRate('EUR', 'GBP')
          .then(response => {
            rateTo.innerHTML = `1 EUR = ${response.rates.GBP} GBP`;
          })
    } else if (fromEur.classList[1] == 'active' && toEur.classList[1] == 'active') {
      rateFrom.innerHTML = `1 EUR = 1 EUR`;
      inputTo.value = inputFrom.value;
   } else if (fromUsd.classList[1] == 'active' && toUsd.classList[1] == 'active') {
      rateFrom.innerHTML = `1 USD = 1 USD`;
      inputTo.value = inputFrom.value;
   } else if (fromGbp.classList[1] == 'active' && toGbp.classList[1] == 'active') {
      rateFrom.innerHTML = `1 GBP = 1 GBP`;
      inputTo.value = inputFrom.value;
   } else if (fromRub.classList[1] == 'active' && toRub.classList[1] == 'active') {
      rateFrom.innerHTML = `1 RUB = 1 RUB`;
      inputTo.value = inputFrom.value;
   }
 })
 


 //**************************************************************************************/
 inputTo.addEventListener('keyup', (event) => {
    if (fromRub.classList[1] == 'active' && toUsd.classList[1] == 'active') {
       getCurrentRate('RUB', 'USD')
          .then(response => {
            rateFrom.innerHTML = `1 RUB = ${response.rates.USD} USD`;
             inputFrom.value = inputTo.value / response.rates.USD;
          })
       getCurrentRate('USD', 'RUB')
          .then(response => {
            rateTo.innerHTML = `1 USD = ${response.rates.RUB} RUB`;
          })
    } else if (fromRub.classList[1] == 'active' && toEur.classList[1] == 'active') {
       getCurrentRate('RUB', 'EUR')
          .then(response => {
            rateFrom.innerHTML = `1 RUB = ${response.rates.EUR} EUR`;
             inputFrom.value = inputTo.value / response.rates.EUR;
          })
       getCurrentRate('EUR', 'RUB')
          .then(response => {
            rateTo.innerHTML = `1 EUR = ${response.rates.RUB} RUB`;
          })
    } else if (fromRub.classList[1] == 'active' && toGbp.classList[1] == 'active') {
       getCurrentRate('RUB', 'GBP')
          .then(response => {
            rateFrom.innerHTML = `1 RUB = ${response.rates.GBP} GBP`;
             inputFrom.value = inputTo.value / response.rates.GBP;
          })
       getCurrentRate('GBP', 'RUB')
          .then(response => {
            rateTo.innerHTML = `1 GBP = ${response.rates.RUB} RUB`;
          })
    } else if (fromUsd.classList[1] == 'active' && toRub.classList[1] == 'active') {
       getCurrentRate('USD', 'RUB')
          .then(response => {
            rateFrom.innerHTML = `1 USD = ${response.rates.RUB} RUB`;
             inputFrom.value = inputTo.value / response.rates.RUB;
          })
       getCurrentRate('RUB', 'USD')
          .then(response => {
            rateTo.innerHTML = `1 RUB = ${response.rates.USD} USD`;
          })
    } else if (fromUsd.classList[1] == 'active' && toEur.classList[1] == 'active') {
       getCurrentRate('USD', 'EUR')
          .then(response => {
            rateFrom.innerHTML = `1 USD = ${response.rates.EUR} EUR`;
             inputFrom.value = inputTo.value / response.rates.EUR;
          })
       getCurrentRate('EUR', 'USD')
          .then(response => {
            rateTo.innerHTML = `1 EUR = ${response.rates.USD} USD`;
          })
    } else if (fromUsd.classList[1] == 'active' && toGbp.classList[1] == 'active') {
       getCurrentRate('USD', 'GBP')
          .then(response => {
            rateFrom.innerHTML = `1 USD = ${response.rates.GBP} GBP`;
             inputFrom.value = inputTo.value / response.rates.GBP;
          })
       getCurrentRate('GBP', 'USD')
          .then(response => {
            rateTo.innerHTML = `1 GBP = ${response.rates.USD} USD`;
          })
    } else if (fromEur.classList[1] == 'active' && toRub.classList[1] == 'active') {
       getCurrentRate('EUR', 'RUB')
          .then(response => {
            rateFrom.innerHTML = `1 EUR = ${response.rates.RUB} RUB`;
             inputFrom.value = inputTo.value / response.rates.RUB;
          })
       getCurrentRate('RUB', 'EUR')
          .then(response => {
            rateTo.innerHTML = `1 RUB = ${response.rates.EUR} EUR`;
          })
    } else if (fromEur.classList[1] == 'active' && toUsd.classList[1] == 'active') {
       getCurrentRate('EUR', 'USD')
          .then(response => {
            rateFrom.innerHTML = `1 EUR = ${response.rates.USD} USD`;
             inputFrom.value = inputTo.value / response.rates.USD;
          })
       getCurrentRate('USD', 'EUR')
          .then(response => {
            rateTo.innerHTML = `1 USD = ${response.rates.EUR} EUR`;
          })
    } else if (fromEur.classList[1] == 'active' && toGbp.classList[1] == 'active') {
       getCurrentRate('EUR', 'GBP')
          .then(response => {
            rateFrom.innerHTML = `1 EUR = ${response.rates.GBP} GBP`;
             inputFrom.value = inputTo.value / response.rates.GBP;
          })
       getCurrentRate('GBP', 'EUR')
          .then(response => {
            rateTo.innerHTML = `1 GBP = ${response.rates.EUR} EUR`;
          })
    } else if (fromGbp.classList[1] == 'active' && toRub.classList[1] == 'active') {
       getCurrentRate('GBP', 'RUB')
          .then(response => {
            rateFrom.innerHTML = `1 GBP = ${response.rates.RUB} RUB`;
             inputFrom.value = inputTo.value / response.rates.RUB;
          })
       getCurrentRate('RUB', 'GBP')
          .then(response => {
            rateTo.innerHTML = `1 RUB = ${response.rates.GBP} GBP`;
          })
    } else if (fromGbp.classList[1] == 'active' && toUsd.classList[1] == 'active') {
       getCurrentRate('GBP', 'USD')
          .then(response => {
            rateFrom.innerHTML = `1 GBP = ${response.rates.USD} USD`;
             inputFrom.value = inputTo.value / response.rates.USD;
          })
       getCurrentRate('USD', 'GBP')
          .then(response => {
            rateTo.innerHTML = `1 USD = ${response.rates.GBP} GBP`;
          })
    } else if (fromGbp.classList[1] == 'active' && toEur.classList[1] == 'active') {
       getCurrentRate('GBP', 'EUR')
          .then(response => {
            rateFrom.innerHTML = `1 GBP = ${response.rates.EUR} EUR`;
             inputFrom.value = inputTo.value / response.rates.EUR;
          })
       getCurrentRate('EUR', 'GBP')
          .then(response => {
            rateTo.innerHTML = `1 EUR = ${response.rates.GBP} GBP`;
          })
         } else if (fromEur.classList[1] == 'active' && toEur.classList[1] == 'active') {
            rateFrom.innerHTML = `1 EUR = 1 EUR`;
            inputTo.value = inputFrom.value;
         } else if (fromUsd.classList[1] == 'active' && toUsd.classList[1] == 'active') {
            rateFrom.innerHTML = `1 USD = 1 USD`;
            inputTo.value = inputFrom.value;
         } else if (fromGbp.classList[1] == 'active' && toGbp.classList[1] == 'active') {
            rateFrom.innerHTML = `1 GBP = 1 GBP`;
            inputTo.value = inputFrom.value;
         } else if (fromRub.classList[1] == 'active' && toRub.classList[1] == 'active') {
            rateFrom.innerHTML = `1 RUB = 1 RUB`;
            inputTo.value = inputFrom.value;
         }
 })