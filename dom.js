document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar')
    const toggleButton = document.querySelector('.sidebar-toggle')
    let autoCloseTimer

    toggleButton.addEventListener('click', () => {
        if (sidebar.classList.contains('open')) {
            sidebar.classList.remove('open')
            clearTimeout(autoCloseTimer)
        } else {
            sidebar.classList.add('open')
            autoCloseTimer = setTimeout(() => {
                sidebar.classList.remove('open')
            }, 2000)
        }
    })
})