
confirm("Please fill your full name");
    var firstname= prompt("Please provide your first name");
    var secondname= prompt("Please provide your second name");
console.log(firstname,secondname);

    if (firstname==null || secondname==null || firstname=="" || secondname=="") {

    
        alert("Please sure if you provide your full name");
        var firstname= prompt("Please provide your first name");
        var secondname= prompt("Please provide your second name");
    }
    alert("Welcome"+"  "+firstname+"  "+secondname);

