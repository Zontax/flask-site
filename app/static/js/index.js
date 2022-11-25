//! console.log()
function print(text='Hello world!') {
    console.log(text)
}
//! [BIG SHOT]
function bigShot(bigshot = 'big shot') {
    let bs = '[' + bigshot.toUpperCase() + ']'
    document.write('<h1>' + bs + '</h1>')
    console.log(bs)
}

//! Вивід з поля Пошук
function onInputSearch(el) {
    console.log(el.value)
}
//! Change Button
let counter = 0
function onClickSmile(el) {
    counter++
    el.style.cssText = 'color: red;'
    let smile = [
        '😀',
        '😊',
        '😁',
        '😂',
        '😃',
        '😆',
        '🤗',
        '🙂',
        '😶',
        '😎',
        '😍',
        '😘',
        '🥰',
        '😛',
        '😲',
        '🤑',
        '😜',
        '🤤',
        '🤓',
        '🧐',
        '🤭',
        '🤡',
        '🤖',
    ]
    if (counter >= smile.length) {
        el.innerHTML = 'Click Max! ' + counter
        console.log('Click Max! ' + counter)
    } else {
        el.innerHTML = smile[counter] + ' Click ' + counter
        console.log(smile[counter] + ' Click ' + counter)
    }
}
//! SEARCH fake
function onClickSearch(el) {
    counter++
    el.style.cssText = 'color: purple; width: 85px;'
    el.innerHTML = 'Search...'
    console.log("Search don't work")
}
function onClickTheme(el) {
    counter++
    el.style.cssText = 'color: purple; width: 85px;'
    el.innerHTML = 'Search...'
    console.log('Theme changed!')
}
//! Наведення мишки
function onMouseEnterSearch() {
    console.log('Mouse in Search')
}

print('Flask started!\nJava Script started!')
console.info('Вітаю на сайті!')
