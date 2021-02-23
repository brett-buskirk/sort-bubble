const rand = () => Math.floor((Math.random() * 50) + 1);
const sort = new Array(10);
for (let i = 0; i <= 9; i++) sort[i] = i + '-' + rand();

$('section').css({width: `${sort.length * 50}px`});

const num = (elem) => Number(elem.slice(elem.indexOf('-') + 1))

for (let i = 0; i < sort.length; i++) {
  $(`<div class="bar" id="bar-${sort[i]}"><p>${num(sort[i])}</p></div>`)
    .css({ height: `${num(sort[i])*5}px`, left: `${i * 50}px` })
    .appendTo($('section'));
}

let iteration = 0;

function sortArray(idx) {
  setTimeout(() => {
    for (let i = 0; i < sort.length - 1; i++) {
      setTimeout(() => {
        $(`#bar-${sort[i]}`).css({ backgroundColor: 'red'});
        if (num(sort[i]) > num(sort[i + 1])) {
          sort1 = sort[i];
          sort2 = sort[i + 1];
          $(`#bar-${sort[i]}`).animate({left: '+=50px'}, 50);
          $(`#bar-${sort[i + 1]}`).animate({left: '-=50px'}, 50);
          sort[i] = sort2;
          sort[i + 1] = sort1;
        }
      }, 600 * i);
    }
  }, 600 * idx * (sort.length - 1));
}

for (let i = 0; i < sort.length; i++) sortArray(i);



