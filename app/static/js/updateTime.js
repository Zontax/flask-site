//! ЧАС
function updateTime() {
    let currentTime = new Date()
    let hours = currentTime.getHours()
    let minutes = currentTime.getMinutes()
    let second = currentTime.getSeconds()
    let date = currentTime.getDate()
    let year = currentTime.getFullYear()
    let month = currentTime.getMonth()

    if (second < 10) {
        second = '0' + second
    }
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    let t_str = hours + ':' + minutes + ':' + second
    t_str += '&nbsp;&nbsp;' + date + '&nbsp;' + month + '&nbsp;' + year
    document.getElementById('time').innerHTML = t_str
}
updateTime()
setInterval(updateTime, 1000)
