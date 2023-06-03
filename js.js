function s(selector){
  return document.querySelector(selector);
}
function ss(selector){
  return document.querySelectorAll(selector);
}
document.addEventListener('DOMContentLoaded', ()=>{
  // remove all .dark-theme
  ss('.dark-theme').forEach((element)=>{
    element.classList.remove("dark-theme");
  });

  s('input[type=checkbox][name=theme]').setAttribute("id","a220401");
  s('input[type=checkbox][name=theme]').insertAdjacentHTML("beforebegin",'<div class="theme-preview" for="a220401"></label>');
  s('input[type=checkbox][name=theme]').insertAdjacentHTML("afterend",'<label for="a220401"></label><label for="a220401"></label>');

  // add change theme click
  s('input[type=checkbox][name=theme]').addEventListener("click", function(){
   s('body').classList.toggle('dark-theme')
   s('.preview').classList.toggle('dark-theme')
  })
})