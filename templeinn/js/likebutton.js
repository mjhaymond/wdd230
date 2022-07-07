
document.getElementById("resultSaratoga").innerHTML = localStorage.clickcountSaratoga + " Likes";
function clickCounterSaratoga() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcountSaratoga) {
        localStorage.clickcountSaratoga = Number(localStorage.clickcountSaratoga)+1;
      } else {
        localStorage.clickcountSaratoga = 1;
      }
      document.getElementById("resultSaratoga").innerHTML = localStorage.clickcountSaratoga + " Likes";
    } else {
      document.getElementById("resultSaratoga").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }


  document.getElementById("resultPayson").innerHTML = localStorage.clickcountPayson + " Likes";
  function clickCounterPayson() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcountPayson) {
        localStorage.clickcountPayson = Number(localStorage.clickcountPayson)+1;
      } else {
        localStorage.clickcountPayson = 1;
      }
      document.getElementById("resultPayson").innerHTML = localStorage.clickcountPayson + " Likes";
    } else {
      document.getElementById("resultPayson").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }


  document.getElementById("resultOgden").innerHTML = localStorage.clickcountOgden + " Likes";
  function clickCounterOgden() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcountOgden) {
        localStorage.clickcountOgden = Number(localStorage.clickcountOgden)+1;
      } else {
        localStorage.clickcountOgden = 1;
      }
      document.getElementById("resultOgden").innerHTML = localStorage.clickcountOgden + " Likes";
    } else {
      document.getElementById("resultOgden").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }


  document.getElementById("resultLayton").innerHTML = localStorage.clickcountLayton + " Likes";
  function clickCounterLayton() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcountLayton) {
        localStorage.clickcountLayton = Number(localStorage.clickcountLayton)+1;
      } else {
        localStorage.clickcountLayton = 1;
      }
      document.getElementById("resultLayton").innerHTML = localStorage.clickcountLayton + " Likes";
    } else {
      document.getElementById("resultLayton").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }

