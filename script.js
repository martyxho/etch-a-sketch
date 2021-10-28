const container = document.querySelector('.container');
for (let i = 0; i < 256; i++) {
  let square = document.createElement('div');
  square.classList.toggle('square');
  square.addEventListener('mouseenter', colorOrDark);
  container.appendChild(square);
}


const btn = document.querySelector('button');
btn.addEventListener('click', getSquares);

function getSquares() {
  let num = 101;
  while (num > 100) {
    num = prompt('How many squares per side do you want? Limit 100', '16');
  };
  newGrid(num);
}

function newGrid(num) {
  container.innerHTML = '';
  for (let i = 0; i < num*num; i++) {
    let square = document.createElement('div');
    square.classList.toggle('square');
    let wPer = 100/num;
    square.setAttribute('style', `width: ${wPer}%; height: ${wPer}%`);
    if (num > 20) {
      square.style.borderWidth = '.5px';
    }
    square.addEventListener('mouseenter', colorOrDark);
    container.appendChild(square);
  }
}

function colorOrDark() {
  if (this.style.backgroundColor === '') {
    colorGen(this);
  } else {
    darken(this);
  }
}

function colorGen(target) {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  target.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}

function darken(target) {
  let rgb = getRGB(target.style.backgroundColor);
  console.log(rgb);
  for (const color in rgb) {
    rgb[color] -= 25.5;
  }
  target.style.backgroundColor = `rgb(${rgb.red}, ${rgb.green}, ${rgb.blue})`;
}

function getRGB(str){
  var match = str.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);
  return match ? {
    red: match[1],
    green: match[2],
    blue: match[3]
  } : {};
}