function env_st() {

    var but = document.querySelector("but");
    if (but.innerHTML === "Ligar") {
      but.innerHTML = "Desligar";

      let envia = new XMLHttpRequest();
    envia.open("GET", "http://192.168.1.150/?comando=lpd(on)", true);
    envia.send();

    } else {

      but.innerHTML = "Ligar";

      let envia = new XMLHttpRequest();
    envia.open("GET", "http://192.168.1.150/?comando=lpd(off)", true);
    envia.send();
    }

  }