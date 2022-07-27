name_of_the_student_array=[];

function submit()
{
var name_1 = document.getElementById("name_of_the_student_1").Value;
var name_2 = document.getElementById("name_of_the_student_2").Value;
var name_3 = document.getElementById("name_of_the_student_3").Value;
var name_4 = document.getElementById("name_of_the_student_4").Value;

name_of_the_student_array.push(name1);
name_of_the_student_array.push(name2);
name_of_the_student_array.push(name3);
name_of_the_student_array.push(name4);

console.log(name_of_the_student_array);
document.getElementById("display_name").innerHTML = name_of_the_student_array;

}