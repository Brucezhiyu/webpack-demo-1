import x from './x.js'
import png from './assets/jpg.jpg'

console.log(x)
const div = document.getElementById('add')
div.innerHTML = `
<img src="${png}"/>    
`
const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = () => {
    const promise = import('./lazy.js')
    promise.then((module) => {
        const fn = module.default
        fn()
    }, () => {
        console.log('模块加载失误')
    })
}
div.appendChild(button)