/* $('menu li:even') // Парні
$('menu li:odd') // Непарні
$('img:not(.logo img)') // Не
$('li:has(a)')
$('p:contains(client)')
$('.logo li:first')
$('#h2 > div + li:last')
$('div:hidden')
$('div:visibility') */
//! Показати більше
function changeClass() {
    $(this).prev().toggleClass('active')
}
/* $(function() {
    let time = 2000
    let tagP1 = $('.content h2.1')
    tagP1.hide().text('Just a html page').show(time)
    tagP1.css('color', 'pink')
    $('a.alert').click(function (event) {
        alert('Текст')
        return false
    })
    //! Open Sidebar
    $('.toggle-btn').click(function () {
        document.getElementById('sidebar').classList.toggle('active')
    })
}) */
/*
//! Розгорнути текст
 $(function () {
    $('article h2').click(function () {
        $(this).next().slideToggle()
        $(this).toggleClass('active')
    })
}) */
