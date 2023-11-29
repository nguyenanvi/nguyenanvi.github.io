function s(selector){
  return document.querySelector(selector);
}
function ss(selector){
  return document.querySelectorAll(selector);
}
window.addEventListener('DOMContentLoaded', ()=>{
  initSwitcher('input[type=checkbox][name=theme]');
  initSidebarButton();
  initButton();
})