var path = require('path');
var generators = require('yeoman-generator');
var _ = require('lodash');

var dest;
var fileName;
var moduleName;
var description;
var appName;
var isInApp;
var authorName;
var authorEmail;

module.exports = generators.Base.extend({
    /**
     */
    constructor: function () {
        generators.Base.apply(this, arguments);
    },

    /**
     */
    askFor: function askFor () {
        var done = this.async();
        var config = this.config;

        var prompts = [
            {
                when: function () {
                    return _.isUndefined(config.get('django-project'));
                },
                type: 'input',
                name: 'django-project',
                message: 'Django project name',
            },
            {
                when: function () {
                    return _.isUndefined(config.get('author-name'));
                },
                type: 'input',
                name: 'author-name',
                message: 'Author name',
            },
            {
                when: function () {
                    return _.isUndefined(config.get('author-email'));
                },
                type: 'input',
                name: 'author-email',
                message: 'Author email',
            },
            {
                type: 'input',
                name: 'appname',
                message: 'Django app name',
            },
            {
                type: 'input',
                name: 'filename',
                message: 'Module name',
            },
            {
                type: 'input',
                name: 'description',
                message: 'Description',
            },
        ];

        this.prompt(
            prompts,
            function (props) {
                djangoProject = props['django-project'] || config.get('django-project');
                authorName = props['author-name'] || config.get('author-name');
                authorEmail = props['author-email'] || config.get('author-email');

                config.set('django-project', djangoProject);
                config.set('author-name', authorName);
                config.set('author-email', authorEmail);

                fileName = props['filename'];
                moduleName = _.capitalize(_.camelCase(fileName));

                description = props['description'];
                appName = props['appname'];
                isInApp = (appName !== '');

                if (isInApp) {
                    dest = path.join(djangoProject, 'apps', appName, 'static', appName);
                } else {
                    dest = path.join(djangoProject, 'static');
                }

                done();
            }
        );
    },

    writing: {
        /**
         */
        testHTML: function () {
            var filePath = path.join(dest, 'test', fileName + '-test.html');
            this.fs.copyTpl(
                this.templatePath('modulename-test.html'),
                this.destinationPath(filePath),
                {
                    fileName: fileName,
                    moduleName: moduleName,
                    isInApp: isInApp,
                }
            );
        },

        /**
         */
        testJS: function () {
            var filePath = path.join(dest, 'test', fileName + '-test.js');
            this.fs.copyTpl(
                this.templatePath('modulename-test.js'),
                this.destinationPath(filePath),
                {
                    fileName: fileName,
                    moduleName: moduleName,
                    appName: appName,
                    isInApp: isInApp,
                }
            );
        },

        /**
         */
        moduleJS: function () {
            var filePath = path.join(dest, 'js', 'modules', fileName + '.js');
            this.fs.copyTpl(
                this.templatePath('modulename.js'),
                this.destinationPath(filePath),
                {
                    moduleName: moduleName,
                    description: description,
                    authorName: authorName,
                    authorEmail: authorEmail,
                }
            );
        },
    },
});
