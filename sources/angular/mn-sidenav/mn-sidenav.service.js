angular
  .module('mn-sidenav')
  .service('MnSidenav', MnSidenav)

function MnSidenav() {
  this.open = open
  this.close = close
  this.toggle = toggle

  function open(id) {
    const sidenav = document.querySelector(`mn-sidenav#${id}`)
    if (sidenav) {
      sidenav.open()
    }
  }

  function close() {
    const sidenav = document.querySelector('mn-sidenav.visible')
    if (sidenav) {
      sidenav.close()
    }
  }

  function toggle(id) {
    const sidenav = document.querySelector(`mn-sidenav#${id}`)
    if (sidenav) {
      sidenav.toggle()
    }
  }
}
