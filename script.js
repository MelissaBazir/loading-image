const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

const blurring = () => {
    load++
    if (load > 99) {
        clearInterval(int)
    }
    loadText.innerText = `${load}%`
    // map the load (0 to 100) to the opacity (1 to 0)
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}
// launch the blurring function every 30 ms
let int = setInterval(blurring, 30)

