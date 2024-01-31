const aggiungiAllaTuaLista = document.getElementById("aggiungiAllaTuaLista");

const bottone = document.getElementById("btnAdd");
bottone.onclick = function () {
  if (aggiungiAllaTuaLista.value !== "") {
    console.log(aggiungiAllaTuaLista.value);
    const lista = document.getElementById("lista");
    console.log(lista);
    const li = document.createElement("li");
    li.onclick = function (e) {
      e.target.remove();
    };
    li.innerText = aggiungiAllaTuaLista.value;
    console.log(li);
    lista.appendChild(li);
    aggiungiAllaTuaLista.value = "";
  }
};
