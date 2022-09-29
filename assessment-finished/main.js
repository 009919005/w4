const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = '昨日の気温は15度だった。:insertx:は:inserty:に行こうとして:insertz:。Bobは全部見てたけど、知らないふりをした。 — :insertx:は体重が52キロあって、今日よりはきもち軽かった。';
const insertX = ['あんぱんまん', 'ばいきんまん', 'てんどんまん'];
const insertY = ['カラオケ', '渋谷', 'コンビニ'];
const insertZ = ['自転車の鍵をなくした', 'やっぱりすき家に行った', 'ちょっとめんどくさくなった'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(200*0.4536)} stone`;
    const temperature =  `${Math.round((80-32) * 5 / 9)} centigrade`;
    newStory = newStory.replace('華氏80度', temperature);
    newStory = newStory.replace('200ポンド', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
