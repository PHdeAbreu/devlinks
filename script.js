function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  //Outra forma de fazer o toggleMode com if/else
  // if(html.classList.contains('light')) {
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }

  //pegar a tag img 

  const img = document.querySelector('#profile img')

  //substituir a imagem
  //se tiver light mode, adicionar a imagem avatar-light
  if(html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute('alt', 'Foto de Mayk Brito sorrindo, usando óculos de grau e camisa preta, barba e fundo amarelo')
  } else {
  //se não tiver light mode, manter a imagem normal
    img.setAttribute('src', './assets/avatar.png')
    img.setAttribute('alt', 'Avatar PH')

  }

  
  
}