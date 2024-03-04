function toggleMode() {
    const html = document.documentElement

     html.classList.toggle('light')

     const img = document.querySelector("#profile img")

     img.setAttribute('src', './assets/avatar-light.png')
     
     if(html.classList.contains('light')){
        img.setAttribute("src", "./assets/avatar-light.png")
     } else{
        img.setAttribute("src", "./assets/avatar.png")
      }

      const alt = document.querySelector("#profile img")

     alt.setAttribute('alt', 'Gustavo de blusa branca olhando para baixo')

     if(html.classList.contains('light')){
        alt.setAttribute("alt", "Gustavo de blusa branca olhando para baixo")
     }else{
        alt.setAttribute("alt", "imagem do gustavo sentado usando bone preto")
     }
}