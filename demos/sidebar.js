const toggleSidebar = () => {
  s('.sidebar').classList.toggle('sidebar-opened');
}
function initSidebarButton(){
  ss('[data-btntype="toggleSidebar"]').forEach((element)=>{
    element.addEventListener('click', () => {
      toggleSidebar();
    });
  })
}