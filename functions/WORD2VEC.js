var w2v = require('word2vec');
w2v.loadModel('/info.txt',(error,model)=>{



})


function linearRegression(x_inputs,y_inputs){

//More than one independent variable uses multiple regression

//y = mx + b -> linear relationship

//area = (x1-x)(y1-y)
var x_avg= 0
var y_avg = 0
for(let i of x_inputs){x_avg+=i}
for(let i of y_inputs){y_avg+=i}

var sums = 0
var denom = 0
for(i=0,i<x_inputs.length,i++){
sums+=(x[i]*x_avg)*(y[i]*y_avg);
denom+=(x[i]*x_avg)^2
}
var slope = sums/denom


return 
}

function logisiticRegression(x_inputs,y_inputs){

sum_sq_x = 0
    
//b0 = yavg - b1xavg - b2xavg

//b1 = ((sum of all x2^2)(sum of x1y) - (sumofx1x2)(sumofx2y))/((sumof x1^2)(sumofx2^2)-(sumofx1x2)^2)
for(let i of x_inputs)
    
//b2 = ((sum of all x1^2)(sum of x2y) - (sumofx1x2)(sumofx1y))/((sumof x1^2)(sumofx1^2)-(sumofx1x2)^2)

    
    
}



















