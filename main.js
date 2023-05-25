//1. Parašykite algoritmą, kuris įvestą tekstinę reikšmę pateikia atbuline tvarką. Tarkim įvedame „Programuotojas“, rezultatą turi pateikti „sajotoumargorP“

function apverstiAtvirksciai(tekstas) {
    let atvirkscias = "";
    
    for (let i = tekstas.length - 1; i >= 0; i--) {
      atvirkscias += tekstas.charAt(i);
    }
    
    return atvirkscias;
  }
  
  let ivestis = "Pasikiskiapusteliaudamas";
  let rezultatas = apverstiAtvirksciai(ivestis);
  console.log(rezultatas);





  //2. Parašykite algoritmą, kuris skaičių masyve surastų mažiausią ir didžiausią skaičių. Skaičių masyvą suformuoti galima naudojant “Random” funkciją, arba suformuoti pačiam. Masyvo ilgis 100.

  function rastiMinMax(masyvas) {
    let min = masyvas[0];
    let max = masyvas[0];
  
    for (let i = 1; i < masyvas.length; i++) {
      if (masyvas[i] < min) {
        min = masyvas[i];
      }
      if (masyvas[i] > max) {
        max = masyvas[i];
      }
    }
  
    return {
      min: min,
      max: max
    };
  }
  
let skaiciai = [];
for (let i = 0; i < 100; i++) {
  let skaicius = Math.floor(Math.random() * 100) + 1;
  skaiciai.push(skaicius);
}
  
  let rezultatas2 = rastiMinMax(skaiciai);
  console.log("Mažiausias skaičius: " + rezultatas2.min);
  console.log("Didžiausias skaičius: " + rezultatas2.max);





  //3. Parašykite algoritmą, kuris skaičių masyve surastų besidubliuojančius skaičius. Skaičių masyvą suformuoti galima naudojant “Random” funkciją, arba suformuoti pačiam. Masyvo ilgis 100.

  function rastiBesidubliuojancius(masyvas) {
    let besidubliuojantys = [];
  
    for (let i = 0; i < masyvas.length; i++) {
      if (masyvas.indexOf(masyvas[i]) !== masyvas.lastIndexOf(masyvas[i]) && besidubliuojantys.indexOf(masyvas[i]) === -1) {
        besidubliuojantys.push(masyvas[i]);
      }
    }
  
    return besidubliuojantys;
  }
  
  let skaiciai3 = [];
  for (let i = 0; i < 100; i++) {
    let skaicius = Math.floor(Math.random() * 100) + 1;
    skaiciai3.push(skaicius);
  }
  
  let rezultatas3 = rastiBesidubliuojancius(skaiciai3);
  console.log("Besidubliuojantys skaičiai: " + rezultatas3.join(", "));





  //4.Parašykite algoritmą, kuris suskaičiuotu balsių ir priebalsių skaičių tekste “Programuotojo ar tiesiog bet kokio IT specialisto profesija taps vis labiau įprasta.“

  function skaiciuotiBalsiusIrPriebalsius(tekstas) {
    let balsiuSkaicius = 0;
    let priebalsiuSkaicius = 0;
  
    const balses = ['a', 'e', 'i', 'o', 'u', 'y'];
  
    for (let i = 0; i < tekstas.length; i++) {
      let raide = tekstas[i].toLowerCase();
  
      if (raide >= 'a' && raide <= 'z') {
        if (balses.includes(raide)) {
          balsiuSkaicius++;
        } else {
          priebalsiuSkaicius++;
        }
      }
    }
  
    return {
      balsiuSkaicius: balsiuSkaicius,
      priebalsiuSkaicius: priebalsiuSkaicius
    };
  }
  
  let tekstas = "Programuotojo ar tiesiog bet kokio IT specialisto profesija taps vis labiau įprasta.";
  
  let rezultatas4 = skaiciuotiBalsiusIrPriebalsius(tekstas);
  
  console.log("Balsių skaičius: " + rezultatas4.balsiuSkaicius);
  console.log("Priebalsių skaičius: " + rezultatas4.priebalsiuSkaicius);
