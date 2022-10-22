const todo = document.getElementById("todo");

// fitur todo :
// 1. menambahkan
// 2. coret kalau sudah selesai
// 3. menghapus

function add() {
  //   ambil nilai dari textnya
  let newText = document.getElementById("new_text");
  // tambahkan list baru ke dalam ul
  let newTodo = "<li> <span onclick='toggle(this)'>" + newText.value + "</span>" + "<div onclick='removeItem(this)'> x </div>" + " </li>";

  todo.insertAdjacentHTML("afterbegin", newTodo);
  //   kosongkan nilainya
  newText.value = "";
}

function toggle(el) {
  el.classList.toggle("done");
}
function removeItem(el) {
  el.parentElement.remove();
}
