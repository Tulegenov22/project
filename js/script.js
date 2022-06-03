    // ПРОСТОЕ ОБЩЕНИЕ С ЮЗЕРОМ В БРАУЗЕРЕ
//const answer = prompt('Вам есть 18?', 'да')
//console.log(answer+12)
/*const answers = []
answers[0] = prompt('Как вас зовут?', '')
answers[1] = prompt('Какая у  вас фамилия?', '')
answers[2] = prompt('Сколько лет?', '')
document.write(answers)*/

    //ИНТЕРПОЛЯЦИЯ
//const catg = 'toys'
//alert(`${catg}+ss`)

    // ОПЕРАТОРЫ 
console.log ('arr'+'-object')
console.log (4+'-object')

let incr = 10
    decr = 8
    console.log(++incr,++decr)      
    console.log(++incr,decr++)
    console.log(2*4==='8') //false потому что строгое равенство по типу данных число должгл быть равно числу а не строке
    console.log (2*4 =='8') //true

    && // и это правда, и это правда , или это правда или это правда
    const isChecked = true
          isClosed = false
          console.log(isChecked && isClosed) //возвращает правду только если все правда
    ||
    const isChecked = false
          isClosed = true
          console.log(isChecked || isClosed) //один из аргументов правдив, поэтому возвращает правду

    ! // ОПЕРАТОР ОТРИЦАНИЯ     
    const isChecked = false
          isClosed = false
          console.log(isChecked || !isClosed) 
          console.log(2+2!=10)

          const a = 12