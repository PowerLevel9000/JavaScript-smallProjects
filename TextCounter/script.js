const stats = document.querySelector('.status');
const text = document.getElementById('text');
const char = document.getElementById('char');
const words = document.getElementById('words');
const lines = document.getElementById('lines');
const symbols = document.getElementById('symbols');
function count() {
  if (text.value.length === 0) {
    stats.style.display = 'none';
  } else {
    stats.style.display = 'block';
    char.innerHTML = `${text.value.length} Characters`;// char
    words.innerHTML = `${text.value.trim().split(/\s+/).length} Words`; // words
    lines.innerHTML = `${text.value.split('\n').length} Lines`; // lines
    symbols.innerHTML = `${text.value.split(/[!@#$%^&*+()_={};:'"<>.,?/-]/).length - 1} Symbols`;
  }
}
text.addEventListener('input', count);