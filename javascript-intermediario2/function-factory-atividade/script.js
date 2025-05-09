function $$(selectedElements){
  const elements = document.querySelectorAll(selectedElements);

  function hide(){
    elements.forEach((element)=>{
      element.style.display = 'none';
    })
    return this;
  }


  function show(){
    elements.forEach((element) =>{
      element.style.display = 'initial';
    })
    return this;
  }

  function elementBgColor(color){
      elements.forEach((element) =>{
        element.style.backgroundColor = color;
      })
      return this;
  }

  function elementColor(color){
    elements.forEach((element) =>{
      element.style.color = color;
    })
    return this;
}

  function addClass(className){
    elements.forEach((element) =>{
      element.classList.add(className);
    })
    return this;
  }

  function fontSize(){
    elements.forEach((element) =>{
      element.style.fontSize = 4 + 'rem';
    })
    return this;
  }

  function functionCallBack(onEvent, callback){
    elements.forEach((element) =>{
      element.addEventListener(onEvent,callback);
    })
  }


  return {
    hide,
    show,
    elementColor,
    elementBgColor,
    addClass,
    fontSize,
    functionCallBack,
  }
}

function testando(event){
  const paragrafos = document.querySelectorAll('p');
  paragrafos.forEach((p) =>{
    p.style.color = 'blue';
  })

}

const buttons = new $$('button');
buttons.hide().show().elementBgColor('lightgreen').addClass('activePapai').functionCallBack('click',testando);

const testeParagrafo = new $$('p');
testeParagrafo.elementColor('red').addClass('testeActive').fontSize();