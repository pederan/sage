/**
 * Author: Peder A. Nielsen
 * Date: 01.03.15
 * Company: Making Waves
 */
'use strict';
module.exports = function (grunt) {

    // Run bower install
    grunt.registerTask('bower-install', function () {
        var done = this.async();
        var bower = require('bower').commands;
        bower.install().on('end', function (data) {
            done();
        }).on('data', function (data) {
            console.log(data);
        }).on('error', function (err) {
            console.error(err);
            done();
        });
    });

};
