let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
})
 
alert("Assalomu alaykum")
alert("Hurmatli mijoz")
alert("Sizga")
alert("o'zingiz yoqtradigan joyingizga sayohatni")
alert("rasm orqali tanlang va usha yerda turgan poyezd yoki Samaliyot biletini tanlang va usha yerga sayohatni amalga oshiring")
alert("Sayohatingiz yaxshi o'tsin")