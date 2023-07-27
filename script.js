let main = document.querySelector('.main')
let divBtn = document.querySelector('.btn')
let btn = document.querySelector("#next-little-cat-button")

async function catChangeImg() {
    const url = 'https://api.thecatapi.com/v1/images/search'

    try {
        const data = await fetch(url)
        const img = await data.json()
        console.log(img)

        img.forEach((imgUrl) => {
            const { url } = imgUrl
            console.log(url)
           
            main.innerHTML = ''
            let imgCats = document.createElement('img')
            imgCats.classList.add('imagem')
            imgCats.setAttribute('src', url)
        
            main.append(imgCats, divBtn)
            divBtn.appendChild(btn)
    })
    } catch (error) {
        console.log(error)
    }
}
catChangeImg()

btn.addEventListener("click", catChangeImg)
