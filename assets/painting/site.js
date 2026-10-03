'use strict';
// Selection stays in this page; no information is submitted to a company.
const symptomInputs = [...document.querySelectorAll('input[name="symptom"]')];
const symptomResult = document.querySelector('#symptom-result');
if (symptomResult) {
  const update = () => {
    const selected = symptomInputs.filter(input => input.checked).map(input => input.value);
    symptomResult.textContent = selected.length ? `相談メモ：${selected.join('、')}。気になる場所と、いつから気づいたかをお伝えください。` : '気になる項目を選んでください。';
  };
  symptomInputs.forEach(input => input.addEventListener('change', update));
  update();
}
const palettes = {
  ivory: ['#e6e1d8', 'アイボリー — やわらかな明るさ'],
  sand: ['#c7b6a1', 'サンドベージュ — 土や木になじむ色'],
  sage: ['#b4c0ac', 'セージ — 緑と調和する落ち着き'],
  stone: ['#b8bcc0', 'ストーングレー — 端正ですっきりした印象']
};
const paletteButtons = [...document.querySelectorAll('[data-color]')];
paletteButtons.forEach(button => button.addEventListener('click', () => {
  const [color, label] = palettes[button.dataset.color];
  document.querySelector('#palette-sample').style.backgroundColor = color;
  document.querySelector('#palette-name').textContent = label;
  paletteButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
}));
const sticky = document.querySelector('.sticky-contact');
if (sticky && 'IntersectionObserver' in window) {
  const visible = new Set();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => entry.isIntersecting ? visible.add(entry.target) : visible.delete(entry.target));
    sticky.classList.toggle('is-hidden', visible.size > 0);
  }, {rootMargin:'0px 0px -90px 0px'});
  document.querySelectorAll('[data-primary-contact]').forEach(link => observer.observe(link));
}
