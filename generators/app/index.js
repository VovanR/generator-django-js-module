var yeoman = require('yeoman-generator');
var _ = require('lodash');

var dest;
var fileName;
var moduleName;
var description;
var appName;
var authorName;
var authorEmail;

module.exports = yeoman.generators.Base.extend({
    constructor: function () {
        yeoman.generators.Base.apply(this, arguments);

        this.option('filename', {
            type: String,
            required: true
        });
        fileName = this.options['filename'];
        moduleName = _.capitalize(_.camelCase(fileName));

        this.option('description', {
            type: String,
            required: true
        });
        description = this.options['description'];

        this.option('appname', {
            type: String,
            required: true
        });
        appName = this.options['appname'];

        this.option('author-name', {
            type: String,
            required: true
        });
        authorName = this.options['author-name'];

        this.option('author-email', {
            type: String,
            required: true
        });
        authorEmail = this.options['author-email'];

        this.option('django-project', {
            type: String,
            required: true
        });
        var djangoProject = this.options['django-project'];

        dest = djangoProject + '/apps/' + appName + '/static/' + appName + '/';
    },

    writing: {
        testHTML: function () {
            this.fs.copyTpl(
                this.templatePath('modulename-test.html'),
                this.destinationPath(dest + 'test/' + fileName + '-test.html'),
                {
                    fileName: fileName,
                    moduleName: moduleName,
                }
            );
        },

        testJS: function () {
            this.fs.copyTpl(
                this.templatePath('modulename-test.js'),
                this.destinationPath(dest + 'test/' + fileName + '-test.js'),
                {
                    fileName: fileName,
                    moduleName: moduleName,
                    appName: appName,
                }
            );
        },

        moduleJS: function () {
            this.fs.copyTpl(
                this.templatePath('modulename.js'),
                this.destinationPath(dest + 'js/modules/' + fileName + '.js'),
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
