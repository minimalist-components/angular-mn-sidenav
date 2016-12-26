[![Bower version](https://badge.fury.io/bo/angular-mn-sidenav.svg)](https://badge.fury.io/bo/angular-mn-sidenav)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)   


# angular-mn-sidenav

An angular directive to [mn-sidenav](https://github.com/minimalist-components/mn-sidenav)

<!-- See the [demo](http://codepen.io/darlanmendonca/full/akgXQq) -->

<!-- [![preview demo](https://raw.githubusercontent.com/minimalist-components/mn-sidenav/master/sources/example/mn-sidenav.gif)](http://codepen.io/darlanmendonca/full/akgXQq) -->

### Install

With bower

```sh
bower install --save angular-mn-sidenav
```

Or just download the main files, located in [dist/](https://github.com/minimalist-components/mn-sidenav/tree/master/dist)

### Usage

```js
// add dependency in you module
angular.module('app', [
  'mn-sidenav'
]);
```

And then, in your html, you can use the tag:

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

