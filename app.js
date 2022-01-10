  
  const numberButtons = document.querySelectorAll('[data-number]')
  const operationButtons = document.querySelectorAll('[data-operation]')
  const equalsButton = document.querySelector('[data-equals]')
  const deleteButton = document.querySelector('[data-delete]')
  const allClearButton = document.querySelector('[data-all-clear]')
  const display = document.querySelector('.display')
  
  
  let currentNum = ''
  let firstValue=''
  let psmd =''
  let total = 0
  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentNum += button.innerText
        updateDisplay(currentNum)
    })
  })

  const updateDisplay = (vale)=>{
      display.innerText = vale
  }

  operationButtons.forEach(button => {
      button.addEventListener('click', ()=>{
          firstValue = currentNum
          psmd = button.innerText
          currentNum =''
          console.log(button.innerText)
      })
  })

  equalsButton.addEventListener('click', ()=>{
     let x = parseInt(firstValue)
     let y = parseInt(currentNum)
        if (psmd == '+'){
        if (total>0){x = total}  
        total =  sum(x, y) 
        updateDisplay(total)
        }

        if (psmd == '-'){
        if (total>0){x = total}  
        total =  sub(x, y) 
        updateDisplay(total)
            }
        if (psmd == '*'){
        if (total>0){x = total}  
        total =  multiply(x, y) 
        updateDisplay(total)
                }
        if (psmd == '/'){
            if (total>0){x = total}  
            total =  divide(x, y) 
            updateDisplay(total)
            }
  })

  const clear =  () => {
      currentNum =''
      firstValue=''
      psmd =''
      display.innerText=""
      total =0
  }
  allClearButton.addEventListener('click', ()=>{
      clear()
  })


 
    const sum = (a,b)=> {
        return a + b
    }
    const sub = (a,b)=> {
        return a - b
    }
    const multiply = (a,b)=> {
        return a * b
    }
    const divide = (a,b)=> {
        return a / b
    }
    



