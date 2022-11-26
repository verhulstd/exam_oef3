import Schilderij from "./Schilderij.js";

function Schilder(voornaam, achternaam, stijl) {
  this.voornaam = voornaam;
  this.achternaam = achternaam;
  this.stijl = stijl;
  this.lijst = [];
}
Schilder.prototype.addPainting = function (nm, cg, kp) {
  this.lijst.push(new Schilderij(nm, cg, kp));
};
Schilder.prototype.removePainting = function (naam) {
  this.lijst = this.lijst.filter(function (schilderObj) {
    return schilderObj.naam !== naam;
  });
};

Schilder.prototype.getTotalWidth = function () {
  //   let som = 0;

  //   for (let i = 0; i < this.lijst.length; i++) {
  //     som += parseInt(
  //       this.lijst[i].canvasgrootte.substring(
  //         0,
  //         this.lijst[i].canvasgrootte.indexOf("x")
  //       )
  //     );
  //   }
  //   return som;

  return this.lijst.reduce(function (acc, schilderijObj) {
    return (
      acc +
      parseInt(
        schilderijObj.canvasgrootte.substring(
          0,
          schilderijObj.canvasgrootte.indexOf("x")
        )
      )
    );
  }, 0);
};

Schilder.prototype.getList = function () {
  let output = `${this.voornaam} ${this.achternaam} / ${this.stijl}`;
  output += this.lijst
    .map(function (schilderijObj) {
      return schilderijObj.printUit();
    })
    .join(`------------------------------`);
  return output;
};
export default Schilder;
