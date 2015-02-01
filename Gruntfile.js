'use strict';

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        harp: {
            server: {
                server: true,
                source: 'src'
            },
            dist: {
                source: 'src',
                dest: 'build'
            }
        }
    })
};
