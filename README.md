# generator-django-js-module

[![NPM version][npm-image]][npm-url]
[![Dependency Status][depstat-image]][depstat-url]
[![DevDependency Status][depstat-dev-image]][depstat-dev-url]

## Install
```sh
npm i -g generator-django-js-module
```

## Usage
Add `.yo-rc.json` to root of your django project
```sh
yo django-js-module --django-project=foo --author-name='Vladimir Rodkin' --author-email=mail@vovanr.com --filename=bar-baz --appname=quz --description='Super Bar!'
```
```sh
$ tree
.
└── foo
    └── apps
        └── quz
            └── static
                └── quz
                    ├── js
                    │   └── modules
                    │       └── bar-baz.js
                    └── test
                        ├── bar-baz-test.html
                        └── bar-baz-test.js
```

## License
MIT


[npm-url]: https://npmjs.org/package/generator-django-js-module
[npm-image]: http://img.shields.io/npm/v/generator-django-js-module.svg

[depstat-url]: https://david-dm.org/VovanR/generator-django-js-module
[depstat-image]: https://david-dm.org/VovanR/generator-django-js-module.svg

[depstat-dev-url]: https://david-dm.org/VovanR/generator-django-js-module
[depstat-dev-image]: https://david-dm.org/VovanR/generator-django-js-module/dev-status.svg
