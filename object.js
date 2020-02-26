var student = { id: 1, phoname:123, name: 'abir'};
var student1 = { id: 2, phoname:124, name: 'abul'};

var phonnum = "phoname";
var phoname = student.phoname;
var phoname1 = student1["phoname"];
var phoname2 = student[phonnum];

console.log(phoname)
console.log(phoname1)
console.log(student)
console.log(student1)
console.log(phoname2)
//cahange phone number
student1.phoname = 345;
console.log(student1)

//add new property
student1.email = 'al@mail.com';
console.log(student1)