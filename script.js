const h1Ele = document.createElement("h1");
document.body.append(h1Ele);
document.body.style.color = "white";
document.body.style.display = "flex";
document.body.style.alignItems = "center";
document.body.style.justifyContent = "center";
document.body.style.height = "100vh";
document.body.style.backgroundImage= "linear-gradient(to right, #ffafbd , #ffc3a0)";
document.body.style.fontSize = "2vw";

setTimeout(() => {
  h1Ele.innerText = 10;
  setTimeout(() => {
    h1Ele.innerText = 9;
    setTimeout(() => {
      h1Ele.innerText = 8;
      setTimeout(() => {
        h1Ele.innerText = 7;
        setTimeout(() => {
          h1Ele.innerText = 6;
          setTimeout(() => {
            h1Ele.innerText = 5;
            setTimeout(() => {
              h1Ele.innerText = 4;
              setTimeout(() => {
                h1Ele.innerText = 3;
                setTimeout(() => {
                  h1Ele.innerText = 2;
                  setTimeout(() => {
                    h1Ele.innerText = 1;
                    setTimeout(() => {
                      h1Ele.innerText = "Happy Independence Day";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
