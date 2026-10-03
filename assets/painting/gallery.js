'use strict';
const companySelect = document.querySelector('#company-select');
companySelect.addEventListener('change', () => {
  document.querySelectorAll('[data-variant]').forEach(link => {
    link.href = `${companySelect.value}/${link.dataset.variant}/`;
  });
});
const companySearch = document.querySelector('#company-search');
const rows = [...document.querySelectorAll('tr[data-company]')];
companySearch.addEventListener('input', () => {
  const query = companySearch.value.normalize('NFKC').toLocaleLowerCase().trim();
  let visible = 0;
  rows.forEach(row => {
    row.hidden = !row.dataset.company.normalize('NFKC').toLocaleLowerCase().includes(query);
    if (!row.hidden) visible++;
  });
  document.querySelector('#search-result').textContent = visible ? `${visible}社を表示` : '該当する会社はありません。別の会社名・地域で検索してください。';
});
