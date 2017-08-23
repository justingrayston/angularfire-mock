# angularfire-mock - Mock angularfire for testing.

[![npm version](https://badge.fury.io/js/angularfire-mock.svg)](https://badge.fury.io/js/angularfire-mock)
[![Build Status](https://travis-ci.org/justingrayston/angularfire-mock.svg?branch=master)](https://travis-ci.org/justingrayston/angularfire-mock)
[![Coverage Status](https://coveralls.io/repos/github/justingrayston/angularfire-mock/badge.svg?branch=master)](https://coveralls.io/github/justingrayston/angularfire-mock?branch=master)
[![dependency Status](https://david-dm.org/justingrayston/angularfire-mock/status.svg)](https://david-dm.org/justingrayston/angularfire-mock)
[![devDependency Status](https://david-dm.org/justingrayston/angularfire-mock/dev-status.svg?branch=master)](https://david-dm.org/justingrayston/angularfire-mock#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/justingrayston/angularfire-mock.svg)](https://greenkeeper.io/)

## Demo

View all the directives in action at https://justingrayston.github.io/angularfire-mock

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)

## Installation
Install above dependencies via *npm*. 

Now install `angularfire-mock` via:
```shell
npm install --save angularfire-mock
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `angularfire-mock`:
```js
map: {
  'angularfire-mock': 'node_modules/angularfire-mock/bundles/angularfire-mock.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { LibModule } from 'angularfire-mock';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` LibModule .forRoot()`):
```js
import { LibModule } from 'angularfire-mock';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [LibModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` LibModule `:

```js
import { LibModule } from 'angularfire-mock';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [LibModule, ...], 
})
export class OtherModule {
}
```

## Usage



## License

Copyright (c) 2017 Justin Grayston. Licensed under the MIT License (MIT)

