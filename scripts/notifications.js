let onSite = true

if(Notification.permission !== 'granted') {
    Notification.requestPermission()
        .then(perm => {
            if(perm === 'granted') {
                startNotifs()
            }
        })
}

if(Notification.permission === 'granted') {
    startNotifs()
}

function startNotifs() {
    setInterval(() => {
        if(!onSite) return
        new Notification('A contestant has died!', {
            body: 'Recover them using MeLife!'
        })
    }, 10000)
}

const popup = document.createElement('dialog')
popup.innerText = 'This website is not completed! This website is only for desktop.'
popup.style.color = 'black'
popup.style.borderRadius = '10px'
popup.style.border = '2px solid black'

document.body.appendChild(popup)
popup.showModal()

setTimeout(() => {
    document.body.removeChild(popup)
}, 2000)

document.addEventListener('visibilitychange', () => {
    onSite = document.visibilityState === 'visible'
})