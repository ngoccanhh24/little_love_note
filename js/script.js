const $ = id => document.getElementById(id);

let data = {
  headline: 'Có thư gửi cậu nè!',
  subline: 'Mở ra đi, có điều dễ thương đang chờ cậu đó.',
  salutation: 'He lu cậu iu,',
  date: 'Một ngày thật xinh',
  body: '',
  signature: 'Thương cậu nhiều ơi là nhiều! ♡',
  footer: 'Được làm bằng tất cả sự dễ thương dành cho cậu ♡',
  wish: 'Chúc cậu mỗi ngày đều vui vẻ, ăn ngon, ngủ ngoan, gặp nhiều điều may mắn. Dù có chuyện gì xảy ra thì cũng nhớ yêu thương bản thân thật nhiều nhé!',
  gift: 'Bất ngờ chưa? Điều tớ muốn tặng cậu nhất chính là thật nhiều cái ôm, thật nhiều nụ cười và thật nhiều ngày tháng có nhau. 💞'
};

function render(d) {
  data = { ...data, ...d };
  const map = {
    headline: 'headline',
    subline: 'subline',
    salutation: 'salutation',
    date: 'date',
    body: 'bodytext',
    signature: 'signature',
    footer: 'footer',
    wish: 'wish',
    gift: 'giftMsg'
  };
  for (let [k, id] of Object.entries(map)) {
    const el = $(id);
    if (el) el.textContent = data[k] || '';
  }
}

function openLetter() {
  $('envelope').classList.add('open');
  $('hint').textContent = 'Chúc cậu đọc thư thật vui nha ♡';
  setTimeout(() => $('letter').classList.add('show'), 420);
}

$('envelope').onclick = openLetter;
$('envelope').onkeydown = e => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    openLetter();
  }
};

$('giftBtn').onclick = () => {
  $('giftMsg').classList.toggle('show');
  $('giftBtn').textContent = $('giftMsg').classList.contains('show')
    ? '♡ Cất món quà lại'
    : '🎁 Bấm mở quà bí mật nè!';
};

async function loadConfig() {
  try {
    const res = await fetch('config/content.json');
    if (res.ok) {
      const json = await res.json();
      render(json);
    } else {
      render(data);
    }
  } catch (e) {
    render(data);
  }
}

loadConfig();
