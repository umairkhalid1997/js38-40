// question # 3
function sidesofTriangle(a, b, c) {
    var Sum = (a + b + c) / 2;
    return Sum;
}

function Area(S, a, b, c) {
    var area = S * ((S - a) * (S - b) * (S - c));
    return area;
}

var side1 = +prompt('Enter side 1: ');
var side2 = +prompt('Enter side 2: ');
var side3 = +prompt('Enter side 3: ');

var S = sidesofTriangle(side1, side2, side3);
var A = Area(S, side1, side2, side3);
alert("The area of Triangle is : " + A);


// // question # 4
// function mainFunction() {
//     var firstSubjectmarks = +prompt('Enter first Subject Marks : ');
//     var secondSubjectmarks = +prompt('Enter second Subject Marks : ');
//     var thirdSujectmarks = +prompt('Enter third Subject Marks: ');
//     var avg = Average(firstSubjectmarks, secondSubjectmarks, thirdSujectmarks);
//     alert("The average of the marks is : " + avg);
//     var total = 100;
//     Percentage(total, firstSubjectmarks, secondSubjectmarks, thirdSujectmarks);
// }
// function Average(firstSubjectmarks, secondSubjectmarks, thirdSujectmarks) {
//     var avg = (firstSubjectmarks + secondSubjectmarks + thirdSujectmarks) / 3;
//     return avg;
// }

// function Percentage(total, firstSubjectmarks, secondSubjectmarks, thirdSujectmarks) {
//     var firstSubjectPercent = (firstSubjectmarks / total) * 100;
//     var secondSubjectPercent = (secondSubjectmarks / total) * 100;
//     var thirdSujectPercent = (thirdSujectmarks / total) * 100;
//     alert("The percentage of first Subject is : " + firstSubjectPercent);
//     alert("The percentage of second Subject is : " + secondSubjectPercent);
//     alert("The percentage of third Subject is : " + thirdSujectPercent);
// }

// mainFunction();



