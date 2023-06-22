// Basic JS - Building a calculator - 7kyu (June 22nd) 

const Calculator = {
    add: function (firstNum, secondNum){
        return firstNum + secondNum
    },
    subtract: function (firstNum, secondNum){
        return firstNum - secondNum
    },
    multiply: function (firstNum, secondNum){
        return firstNum * secondNum
    },
    divide: function (firstNum, secondNum){
        if (secondNum === 0){
            return false
        } else {
        return firstNum / secondNum
    }
}
};



Calculator.add(2,4) // 6, '2+4=6'
Calculator.subtract(5,3),2, '5-3=2'
Calculator.multiply(9,2),18, '9x2=18'
Calculator.divide(12,4),3, '12/4=3'
Calculator.divide(33,0),false, 'Tried to divide by zero'
