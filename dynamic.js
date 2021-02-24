
confirm("Please fill your full name");

var firstname= prompt("Please provide your first name");
var secondname= prompt("Please provide your second name");
console.log(firstname,secondname);

while (firstname==null || secondname==null || firstname=="" || secondname=="")
 {
    alert("Please sure if you provide your full name");
    var firstname= prompt("Please provide your first name");
    var secondname= prompt("Please provide your second name");
}
alert("Welcome"+"  "+firstname+"  "+secondname);

var age;
function Userage( age){
    var age = prompt("Can you provide your age please !");
    if (age > 12 && age <= 18){
        alert("You are a teenager, So welcome in my website");
    } if(age < 12){
        alert("You are a child, welcome my friend");
    } else {
        alert("You have my full respect, welcome again");
        
    }
}

Userage(age);

var Number= prompt("Please Enter a number");

for (var count=1 ; count<=Number && count < 10 ; count++) {

    document.write('<img src="https://cdn.mos.cms.futurecdn.net/yJaNqkw6JPf2QuXiYobcY3.jpg" />');
    document.write(count);

}
