import Schilder from "./modules/Schilder.js";

const schilder1 = new Schilder("Vincent", "Van Gogh", "impressionisme");

schilder1.addPainting("De zonnebloemen", "16x22", 1615233);
schilder1.addPainting("De anderebloemen", "4x22", 1615233);
schilder1.addPainting("De lelijkebloemen", "10x22", 1615233);
// schilder1.removePainting("De lelijkebloemen");

console.log(schilder1.getList());
//console.log(schilder1);
