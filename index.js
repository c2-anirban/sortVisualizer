const container = document.querySelector(".data-container");

function generatebars(num = 20) {
  for (let i = 0; i < num; i += 1) {
    const value = Math.floor(Math.random() * 100) + 1;

    const bar = document.createElement("div");

    bar.classList.add("bar");

    bar.style.height = `${value * 3}px`;

    bar.style.transform = `translateX(${i * 30}px)`;

    const barLabel = document.createElement("label");

    barLabel.classList.add("bar_id");

    barLabel.innerHTML = value;

    bar.appendChild(barLabel);

    container.appendChild(bar);
  }
}

async function SelectionSort(delay = 300) {
  let bars = document.querySelectorAll(".bar");
  var min_idx = 0;
  for (var i = 0; i < bars.length; i += 1) {
    min_idx = i;

    bars[i].style.backgroundColor = "darkblue";
    for (var j = i + 1; j < bars.length; j += 1) {
      bars[j].style.backgroundColor = "red";

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 300)
      );

      var val1 = parseInt(bars[j].childNodes[0].innerHTML);

      var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);

      if (val1 < val2) {
        if (min_idx !== i) {
          bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";
        }
        min_idx = j;
      } else {
        bars[j].style.backgroundColor = " rgb(24, 190, 255)";
      }
    }

    var temp1 = bars[min_idx].style.height;
    var temp2 = bars[min_idx].childNodes[0].innerText;
    bars[min_idx].style.height = bars[i].style.height;
    bars[i].style.height = temp1;
    bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
    bars[i].childNodes[0].innerText = temp2;

    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 300)
    );

    bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";

    bars[i].style.backgroundColor = " rgb(49, 226, 13)";
  }

  document.getElementById("Button1").disabled = false;
  document.getElementById("Button1").style.backgroundColor = "#6f459e";

  document.getElementById("Button2").disabled = false;
  document.getElementById("Button2").style.backgroundColor = "#6f459e";
  document.getElementById("Button3").disabled = false;
  document.getElementById("Button3").style.backgroundColor = "#6f459e";
  document.getElementById("Button4").disabled = false;
  document.getElementById("Button4").style.backgroundColor = "#6f459e";
}

async function BubbleSort(delay = 300) {
  var bars = document.querySelectorAll(".bar");

  for (var i = 0; i < bars.length; i += 1) {
    for (var j = 0; j < bars.length - i - 1; j += 1) {
      bars[j].style.backgroundColor = "#FF4949";
      bars[j + 1].style.backgroundColor = "#FF4949";

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 300)
      );

      var val1 = Number(bars[j].childNodes[0].innerHTML);
      var val2 = Number(bars[j + 1].childNodes[0].innerHTML);

      if (val1 > val2) {
        await swap(bars[j], bars[j + 1]);
        bars = document.querySelectorAll(".bar");
      }

      bars[j].style.backgroundColor = "#6b5b95";
      bars[j + 1].style.backgroundColor = "#6b5b95";
    }

    bars[bars.length - i - 1].style.backgroundColor = "#13CE66";
  }
  function swap(el1, el2) {
    return new Promise((resolve) => {
      var temp = el1.style.transform;
      el1.style.transform = el2.style.transform;
      el2.style.transform = temp;

      window.requestAnimationFrame(function () {
        setTimeout(() => {
          container.insertBefore(el2, el1);
          resolve();
        }, 250);
      });
    });
  }
  document.getElementById("Button1").disabled = false;
  document.getElementById("Button1").style.backgroundColor = "#6f459e";

  document.getElementById("Button2").disabled = false;
  document.getElementById("Button2").style.backgroundColor = "#6f459e";
  document.getElementById("Button3").disabled = false;
  document.getElementById("Button3").style.backgroundColor = "#6f459e";
  document.getElementById("Button4").disabled = false;
  document.getElementById("Button4").style.backgroundColor = "#6f459e";
}

async function InsertionSort(delay = 300) {
  let bars = document.querySelectorAll(".bar");

  bars[0].style.backgroundColor = " rgb(49, 226, 13)";
  for (var i = 1; i < bars.length; i += 1) {
    var j = i - 1;

    var key = parseInt(bars[i].childNodes[0].innerHTML);

    var height = bars[i].style.height;

    bars[i].style.backgroundColor = "darkblue";

    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 300)
    );

    while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) {
      bars[j].style.backgroundColor = "darkblue";

      bars[j + 1].style.height = bars[j].style.height;
      bars[j + 1].childNodes[0].innerText = bars[j].childNodes[0].innerText;

      j = j - 1;

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 300)
      );

      for (var k = i; k >= 0; k--) {
        bars[k].style.backgroundColor = " rgb(49, 226, 13)";
      }
    }

    bars[j + 1].style.height = height;
    bars[j + 1].childNodes[0].innerHTML = key;

    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 600)
    );

    bars[i].style.backgroundColor = " rgb(49, 226, 13)";
  }

  document.getElementById("Button1").disabled = false;
  document.getElementById("Button1").style.backgroundColor = "#6f459e";

  document.getElementById("Button2").disabled = false;
  document.getElementById("Button2").style.backgroundColor = "#6f459e";
  document.getElementById("Button3").disabled = false;
  document.getElementById("Button3").style.backgroundColor = "#6f459e";
  document.getElementById("Button4").disabled = false;
  document.getElementById("Button4").style.backgroundColor = "#6f459e";
}

function disable() {
  document.getElementById("Button1").disabled = true;
  document.getElementById("Button1").style.backgroundColor = "#d8b6ff";

  document.getElementById("Button2").disabled = true;
  document.getElementById("Button2").style.backgroundColor = "#d8b6ff";
  document.getElementById("Button3").disabled = true;
  document.getElementById("Button3").style.backgroundColor = "#d8b6ff";
  document.getElementById("Button4").disabled = true;
  document.getElementById("Button4").style.backgroundColor = "#d8b6ff";
}
generatebars();

function generate() {
  window.location.reload();
}
