
var age = +prompt("Введите свой год рождения : ");
var Name_ = prompt("Введите имя : ");
var year = 2021;

function age_res (age, year) {
  let age_res =  year - age; 
  return age_res;
}

alert("Здравствуйте " + Name_ + " Ваш возраст " + age_res(age, year) + " лет!");
// ===============================================================================
var border = confirm("Будем проходить дальше ? ");
if (border = true) {
    alert("Пропускаю дальше ... ");
}else{
    alert("Мы рады были вашему визиту, приходите ещё ) ");
    location.reload(true)
}
// ===============================================================================
var quest_col = +prompt("Хорошо, в таком случае введите сюда количество генерируемых примеров : ");
var quest_fun = prompt("Аха, Теперь введите знак примеров : ");
var max = 100;
var min = 1;

function number(min, max) {
    let number = Math.floor (Math.random() * max + min)
    return number;
}
function ran(number) {
    let num = Math.floor (Math.random() * (number + 1 - number)) 
    return num;
}
for (let i = 1; i <= quest_col; i++) {
    if (i == 0) {
        console.log("finish");
    }else{
        num1 = number(min, max);
        num2 = number(min, max);
        if (quest_fun === "/") {
            primers = num1 / num2;
            see_primers = num1 + " / " + num2;
        }else if (quest_fun === "-") {
            primers = num1 - num2;
            see_primers = num1 + " - " + num2;
        }else if (quest_fun === "+") {
            primers = num1 + num2;
            see_primers = num1 + " + " + num2;
        }else if (quest_fun === "*") {
            primers = num1 * num2;
            see_primers = num1 + " * " + num2;
        }
        var finish_quest = see_primers + " = ";
        var user_answer =  finish_quest;
        var finish_quest = +prompt(user_answer);
        if (primers == finish_quest) {
            alert ("Вы ответили верно, ваш ответ : " + finish_quest + ", Правильный ответ " + primers);
            console.log("Правильный ответ " + primers);
        }else if (primers !== finish_quest) {
            alert ("Вы ответили  не верно, ваш ответ : " + finish_quest + ", Правильный ответ " + primers);
            console.log("Правильный ответ " + primers);
        }
    }
    console.log(finish_quest);
}
alert("Вы покозали не плохой результат, поздравляю )");
location.reload()
// ===============================================================================
// ===============================================================================