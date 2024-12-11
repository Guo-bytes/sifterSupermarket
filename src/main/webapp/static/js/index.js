
//getlogin元素
let itemCard = document.getElementsByClassName("itemCard");





//鼠标进入事件
//生成span元素
let span = document.createElement('span')
span.classList.add('cover')
for (let i = 0; i < itemCard.length; i++) {
    itemCard[i].addEventListener("mouseenter", function (e) {
        console.log(12)
        itemCard[i].appendChild(span)

        //使用动画
        span.style.animation = 'in 1s ease-out forwards'

        console.log(span)

        //计算top left的值
        let top = e.clientY - e.target.offsetTop
        let left = e.clientX - e.target.offsetLeft

        span.style.top = top + 'px'
        span.style.left = left + 'px'
        // console.log("top" + top)
        // console.log("left" + left)
    })
    itemCard[i].addEventListener("mouseleave", function (e) {
        console.log(32)

        //使用动画
        span.style.animation = 'out 1s ease-out forwards'

        //计算top left的值
        let top = e.clientY - e.target.offsetTop
        let left = e.clientX - e.target.offsetLeft

        span.style.top = top + 'px'
        span.style.left = left + 'px'
        // console.log("top" + top)
        // console.log("left" + left)
    })
}