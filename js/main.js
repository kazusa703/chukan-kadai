// =====================================================================
// 都道府県ヒートマップを作る（授業 web-04 の範囲だけ）
//   - getElementById で入れ物を取得
//   - forEach で47県を1つずつ処理
//   - createElement / appendChild で四角いタイルを作って入れる
//   - if 文で「数が多いほど濃い色」のクラスを付ける
// =====================================================================
const mapBox = document.getElementById('pref-map');

PREF_LABELS.forEach(function (name, i) {
  const count = PREF_DATA[i];

  // タイル1枚を作る
  const tile = document.createElement('div');
  tile.classList.add('tile');

  // 数が多いほど濃い色にする（しきい値を if 文で判定）
  if (count >= 50000) {
    tile.classList.add('tile-5');
  } else if (count >= 10000) {
    tile.classList.add('tile-4');
  } else if (count >= 5000) {
    tile.classList.add('tile-3');
  } else if (count >= 1000) {
    tile.classList.add('tile-2');
  } else {
    tile.classList.add('tile-1');
  }

  // 県名を表示
  const nameEl = document.createElement('div');
  nameEl.classList.add('tile-name');
  nameEl.textContent = name;

  // 人数を表示
  const numEl = document.createElement('div');
  numEl.classList.add('tile-num');
  numEl.textContent = count + '人';

  // タイルに県名と人数を入れて、地図の入れ物に追加する
  tile.appendChild(nameEl);
  tile.appendChild(numEl);
  mapBox.appendChild(tile);
});


