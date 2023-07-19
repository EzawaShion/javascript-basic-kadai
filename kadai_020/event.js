const text = document.getElementById('text');

const btn = document.getElementById('btn');

btn.addEventListener("click",() => {
  setTimeout(function(){
    text.textContent = "ボタンがクリックされました。";
  },2000);
});