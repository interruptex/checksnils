import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CheckSnilsService {
  constructor() {}

  public isValidSnils(snils: string): boolean {
    var snilsNumbers: Array<number> = [];

    if (snils.length === 11) {
      for (var i = 0; i < snils.length; i++) {
        if (typeof Number(snils[i]) === "number" && !isNaN(Number(snils[i])))
          snilsNumbers[i] = Number(snils[i]);
        else return false;
      }
    }

    var sum: number = 0;
    var cNum: string = snilsNumbers.slice(-2).join("");

    for (var i = 0; i < snilsNumbers.length - 2; i++) {
      sum += snilsNumbers[i] * (9 - i);
    }

    if (sum < 100 && cNum === sum.toString()) return true;

    if ((sum === 100 || sum === 101) && cNum === "00") return true;

    if (sum > 101) {
      var modulo: number = sum % 101;
      var moduloString: string = modulo.toString();
      if (moduloString.length === 1) {
        moduloString = "0" + moduloString;
      }
      if (moduloString === "100") {
        moduloString = "00";
      }

      if (cNum === moduloString) {
        return true;
      }
    }

    return false;
  }
}
