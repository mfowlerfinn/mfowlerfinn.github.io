let cards;
let name = document.querySelector("#nav_title");
name.addEventListener("click", wow);
let alpha = 0.1;

function attachCardHandle() {
  cards = document.querySelectorAll(".card");
  cards.forEach(card => card.addEventListener("click", handleClick));
}

function wow() {
  alpha = 1.0;
  let current = getComputedStyle(document.documentElement).getPropertyValue(
    "--bg-stripe-idle"
  );
  let highlight = getComputedStyle(document.documentElement).getPropertyValue(
    "--bg-stripe-flash"
  );
  document.documentElement.style.setProperty(
    "--bg-stripe",
    "rgba(255,215,0,1)"
  );
  // console.log(current);
  let fade = setInterval(() => {
    alpha -= 0.05;
    document.documentElement.style.setProperty(
      "--bg-stripe",
      `rgba(255,215,0,${alpha})`
    );
    // console.log({alpha});
    if (alpha < 0) {
      clearInterval(fade);
      document.documentElement.style.setProperty("--bg-stripe", current);
    }
  }, 15);
  let colorFrom = HSLAtoObject(current);
  let colorTo = HSLAtoObject(highlight);
  compare(colorFrom, colorTo, 1000);
}

function compare(hslaFrom, hslaTo, divisions) {
  let H = Math.abs(hslaFrom.h - hslaTo.h) / divisions;
  let S = Math.abs(hslaFrom.s - hslaTo.s) / divisions;
  let L = Math.abs(hslaFrom.l - hslaTo.l) / divisions;
  let A = Math.abs(hslaFrom.a - hslaTo.a) / divisions;
  // console.log({ H, S, L, A });
}

function HSLAtoObject(hsla) {
  let reg = /\d+/g;
  let regArray = hsla.match(reg);
  // console.log(regArray);
  let numObj = {
    h: regArray[0],
    s: regArray[1],
    l: regArray[2],
    a: regArray[3]
  };
  // console.log(numObj);
  return numObj;
}

function handleClick(e) {
  // console.log(e);
  // console.log(e.target.classList.contains("link_icon"));
  let str = this.id;
  let reg = new RegExp("card-");
  str = str.replace(reg, "");
  // console.log(str);
  if (e.target.classList.contains("link_icon")) {
    // console.log("link icon! stop default!");
  } else {
    data[str].live
      ? window.open(data[str].live)
      : window.open(data[str].github);
  }
}

window.onload = () => {
  showProjects();
  wow();
};
