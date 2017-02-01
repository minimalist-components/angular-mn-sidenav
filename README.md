[![npm version](https://badge.fury.io/js/angular-mn-sidenav.svg)](https://badge.fury.io/js/angular-mn-sidenav)
[![Dependency Status](https://gemnasium.com/badges/github.com/minimalist-components/angular-mn-sidenav.svg)](https://gemnasium.com/github.com/minimalist-components/angular-mn-sidenav)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)


# angular-mn-sidenav

An angular directive and service to [mn-sidenav](https://github.com/minimalist-components/mn-sidenav)

See the [demo](https://github.com/minimalist-components/angular-mn-sidenav)

[![preview demo](https://raw.githubusercontent.com/minimalist-components/mn-sidenav/master/preview.gif)](https://minimalist-components.github.io/angular-mn-sidenav/)

### Install

```sh
npm install --save angular-mn-sidenav
```

And bundle dependencies and main files in [dist/](https://github.com/minimalist-components/mn-sidenav/tree/master/dist) with your preferred tool.

### Usage

```js
// add dependency in you module
angular.module('app', [
  'mn-sidenav'
]);
```

And then, in your html, you can use the tag `mn-sidenav`

```html
<mn-sidenav id="menu">
  <!-- content here -->
</mn-sidenav>
```


For more details check docs [mn-sidenav docs](https://github.com/minimalist-components/mn-sidenav).

Now, about service, you can use the service `$mnSidenav`, like below:

```js
angular
  .module('app')
  .controller('HomeController', HomeController)

function HomeController($mnSidenav) {
  // to open, call method open with id of sidenav
  $mnSidenav.open('menu')

  // to close sidenav visible, just call .close()
  $mnSidenav.close()
}
```

