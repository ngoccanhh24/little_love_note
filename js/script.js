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
  gift: 'Bất ngờ chưa? Điều tớ muốn tặng cậu nhất chính là thật nhiều cái ôm, thật nhiều nụ cười và thật nhiều ngày tháng có nhau. 💞',
  music: 'music/music.mp3',
  photos: []
};

const musicNote = document.createElement('div');
musicNote.id = 'music-note';
musicNote.textContent = 'Chưa có file nhạc';
document.body.appendChild(musicNote);

function showNote(text) {
  musicNote.textContent = text;
  musicNote.style.display = 'block';
  setTimeout(() => { musicNote.style.display = 'none'; }, 1800);
}

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
  $('gallery').innerHTML = '';
  (data.photos || []).forEach((p, i) => {
    let card = document.createElement('div');
    card.className = 'polaroid';
    card.style.setProperty('--r', i % 2 ? '2deg' : '-2deg');
    let img = document.createElement('img');
    img.src = 'photos/' + (p.src || p);
    img.alt = p.caption || 'kỷ niệm';
    img.onerror = () => {
      img.style.display = 'none';
      card.querySelector('p').textContent = '(không tìm thấy ảnh: ' + (p.src || p) + ')';
    };
    let cap = document.createElement('p');
    cap.textContent = p.caption || 'một chiếc kỷ niệm ♡';
    card.append(img, cap);
    $('gallery').append(card);
  });
  const audio = $('audio');
  if (data.music) {
    audio.src = data.music;
  } else {
    audio.src = '';
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

$('musicBtn').onclick = async () => {
  const audio = $('audio');
  if (!data.music) {
    showNote('Chưa có file nhạc');
    return;
  }
  if (audio.paused) {
    try {
      await audio.play();
      $('musicBtn').textContent = 'Ⅱ Tạm dừng';
    } catch (e) {
      showNote('Chưa có file nhạc');
    }
  } else {
    audio.pause();
    $('musicBtn').textContent = '♫ Bật nhạc';
  }
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
