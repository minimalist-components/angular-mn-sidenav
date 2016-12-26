angular
  .module('mn-sidenav')
  .service('$mnSidenav', $mnSidenav)

function $mnSidenav() {
  this.open = open
  this.close = close

  function open(id) {
    const sidenav = document.querySelector(`mn-sidenav#${id}`)
    console.log(sidenav)
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
}
