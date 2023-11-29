function s(selector){
  return document.querySelector(selector);
}
function ss(selector){
  return document.querySelectorAll(selector);
}
async function initSwitcher(selector){
  const switcher = s(selector);
  const switcherClasslist = switcher.classList;
  switcher.parentNode.classList.add('switcher-wrapper');
  switcher.setAttribute("id","a220401");
  switcher.insertAdjacentHTML("afterend",`
    <label class="${switcherClasslist}" for="a220401"></label>
    <label for="a220401"></label>
  `);
  switcher.style.display = "none";

  // add change theme click
  s(selector).addEventListener("click", function(){
    ss('.light-theme').forEach(element => {
      element.classList.add('temp-theme');
      element.classList.remove('light-theme');
    });
    ss('.dark-theme').forEach(element => {
      element.classList.add('light-theme');
      element.classList.remove('dark-theme');
    });
    ss('.temp-theme').forEach(element => {
      element.classList.add('dark-theme');
      element.classList.remove('temp-theme');
    });
  })
}
document.addEventListener('DOMContentLoaded', ()=>{
  initSwitcher('input[type=checkbox][name=theme]');
})