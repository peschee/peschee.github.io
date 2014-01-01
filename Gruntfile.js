"use strict";

module.exports = function(grunt) {

    var pkg = grunt.file.readJSON("package.json");

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    // Project configuration.
    grunt.initConfig({

        pkg: pkg,

        banner: grunt.file.read("js/copy.js")
            .replace(/@VERSION/, pkg.version)
            .replace(/@DATE/, grunt.template.today("yyyy-mm-dd"))
            .replace(/@YEAR/, grunt.template.today("yyyy")),

        shell: {
            jekyllBuild: {
                command: 'jekyll build'
            },
            jekyllServe: {
                command: 'jekyll serve'
            }
        },

        watch: {
            files: [
                '_layouts/*.html',
                '_posts/*.markdown',
                '_config.yml',
                'index.html'
            ],
            tasks: ['shell:jekyllBuild', 'shell:jekyllServe'],
            options: {
                interrupt: true,
                atBegin: true
            }
        }
    });

    grunt.registerTask('default', ['shell']);
};
