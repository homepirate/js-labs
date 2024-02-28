function solve() {
  var text = document.getElementById('text').value.toLowerCase();
  var naming_convention = document.getElementById('naming-convention').value.toLowerCase();

  var el = document.getElementById("result")

  if (naming_convention == 'camel case') {
      el.innerText = text.split(' ').map((word, index) => index !== 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word).join('');
  } else if (naming_convention == 'Pascal Case') {
    el.innerText = text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
  } else {
      el.innerText = 'Error!';
  }
}