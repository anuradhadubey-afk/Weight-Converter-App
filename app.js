document.getElementById('output').style.visibility = 'hidden';
const a = document.getElementById('lbsInput');
a.addEventListener('input', e);
function e() {
  document.getElementById('output').style.visibility = 'visible';

  let value = document.getElementById('lbsInput').value;
  console.log(value);
  document.getElementById('gramsOutput').innerHTML = value * 0.0022046;
  document.getElementById('kgOutput').innerHTML = value * 0.453592;
  document.getElementById('ozOutput').innerHTML = value * 16;
}
