/*global module */

module.exports = function (grunt) {
    "use strict";

    // Project configuration.
    grunt.initConfig({

        concat: {
            dist: {
                src: [
                    'src/prepend.js',
                    'src/jquery/jquery-*.min.js',
                    'src/lib/*.js',
                    'src/append.js'
                ],
                dest: 'dist/readmore-userscript.user.js'
            },
            addheader: {
                src: [
                    'src/userscripthead.js',
                    'dist/readmore-userscript.user.js'
                ],
                dest: 'dist/readmore-userscript.user.js'
            },
            addheadermin: {
                src: [
                    'src/userscripthead.js',
                    'dist/readmore-userscript.min.user.js'
                ],
                dest: 'dist/readmore-userscript.min.user.js'
            }
        },

        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/options.html': 'src/options.html'
                }
            }
        },

        uglify: {
            'dist': {
                files: {
                    'dist/readmore-userscript.min.user.js': ['dist/readmore-userscript.user.js']
                }
            }
        },

        'string-replace': {
            includemenu: {
                options: {
                    replacements: [{
                        pattern: /\{\{optionshtml\}\}/ig,
                        replacement: function () {
                            return grunt.file.read('dist/options.html');
                        }
                    },
                        { pattern: ",", replacement: ";" }]
                },
                files: {
                    'dist/readmore-userscript.user.js': 'dist/readmore-userscript.user.js'
                }
            },

            removelinebreak: {
                options: {
                    replacements: [{
                        pattern: /\r?\n|\r/g,
                        replacement: ''
                    },
                        { pattern: ",", replacement: ";" }]
                },
                files: {
                    'dist/options.html': 'dist/options.html'
                }
            },

            removewhitespace: {
                options: {
                    replacements: [{
                        pattern: /\s+/g,
                        replacement: ' '
                    },
                        {
                            pattern: ",",
                            replacement: ";"
                        }]
                },
                files: {
                    'dist/options.html': 'dist/options.html'
                }
            }
        },

        clean: {
            src: 'dist/options.html'
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-string-replace');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Default task.
    var tasks = [
        'htmlmin',
        'concat:dist',
        'string-replace:removelinebreak',
        'string-replace:removewhitespace',
        'string-replace:includemenu',
        'uglify',
        'concat:addheader',
        'concat:addheadermin',
        'clean'
    ];

    grunt.registerTask('default', tasks);
};