"use strict";function MnSidenav(){function open(id){var sidenav=document.querySelector("mn-sidenav#"+id);sidenav&&sidenav.open()}function close(){var sidenav=document.querySelector("mn-sidenav.visible");sidenav&&sidenav.close()}function toggle(id){var sidenav=document.querySelector("mn-sidenav#"+id);sidenav&&sidenav.toggle()}this.open=open,this.close=close,this.toggle=toggle}angular.module("mn-sidenav",[]),angular.module("mn-sidenav").service("$mnSidenav",MnSidenav);
//# sourceMappingURL=angular-mn-sidenav.js.map
