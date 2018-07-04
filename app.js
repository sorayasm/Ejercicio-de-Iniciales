const name = prompt("¿Cuál es tu nombre y apellido?");
const firstInitial = name.slice(0, 1);
const secInitialpos = name.indexOf(" ") + 1;
const secInitial = name.slice(secInitialpos, secInitialpos + 1);
document.write("Tus inciales son " + firstInitial.toUpperCase() + secInitial.toUpperCase());