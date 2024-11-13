console.log("--------2번째 실습------------")

let todos = document.querySelectorAll('.todo');
let dones = document.querySelectorAll('.done');

for (let list of todos) {
  list.className = 'done';
}
for (let list of dones) {
  list.className = 'todo';
}