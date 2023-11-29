const initButton = ()=>{
  ss('button').forEach(element=>{
    element.addEventListener('click', ()=>{
      setTimeout(()=>{
        element.blur()
      }, 500);
    })
  })
}