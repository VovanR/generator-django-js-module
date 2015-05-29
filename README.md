# generator-django-js-module

[![NPM version][npm-image]][npm-url]
[![Dependency Status][depstat-image]][depstat-url]
[![DevDependency Status][depstat-dev-image]][depstat-dev-url]

## Install
```sh
npm i -g generator-django-js-module
```

## Usage
Run in Django project root
```sh
yo django-js-module
```
In first time it creates `.yo-rc.json` and fills default settings
Add `.yo-rc.json` to your `.gitignore`
Next runs generator ask you only `Django app name`, `Module name` and `Description`. And you can run generator from any Django project folders.

*Example*
```sh
yo django-js-module
? Django project name: mysite
? Author name: Vladimir Rodkin
? Author email: mail@vovanr.com
? Django app name: auth
? Module name: auth-dialog
? Description:
   create mysite/apps/auth/static/auth/test/auth-dialog-test.html
   create mysite/apps/auth/static/auth/test/auth-dialog-test.js
   create mysite/apps/auth/static/auth/js/modules/auth-dialog.js
```
```sh
tree
.
└── mysite
    └── apps
        └── auth
            └── static
                └── auth
                    ├── js
                    │   └── modules
                    │       └── auth-dialog.js
                    └── test
                        ├── auth-dialog-test.html
                        └── auth-dialog-test.js
```

## ToDo
- [ ] Write about Django project structure
- [ ] Write about running JS tests

## License
MIT © [Vladimir Rodkin](https://github.com/VovanR)


[npm-url]: https://npmjs.org/package/generator-django-js-module
[npm-image]: http://img.shields.io/npm/v/generator-django-js-module.svg

[depstat-url]: https://david-dm.org/VovanR/generator-django-js-module
[depstat-image]: https://david-dm.org/VovanR/generator-django-js-module.svg

[depstat-dev-url]: https://david-dm.org/VovanR/generator-django-js-module
[depstat-dev-image]: https://david-dm.org/VovanR/generator-django-js-module/dev-status.svg
