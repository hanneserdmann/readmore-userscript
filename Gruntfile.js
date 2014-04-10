/*global module */

module.exports = function (grunt) {
    "use strict";

    // Project configuration.
    grunt.initConfig({

        // Temp-Dir erstellen
        mkdir:{
            all: {
                options: {
                    archive: 'zip',
                    create: ['dist/tmp', 'dist/tmp/chrome']
                }
            }
        },

        copy:{
            userscriptsrc: {
                src:    'dist/readmore-userscript.min.user.js',
                dest:   'dist/tmp/chrome/readmore-userscript.min.user.js'
            },

            chromeicon: {
                src:    'img/128.png',
                dest:   'dist/tmp/chrome/128.png'
            }
        },

        compress:{
            main: {
                options: {
                    archive: 'dist/chromeExtension.zip'
                },
                files: [
                    {flatten: true, expand: true, src: ['dist/tmp/chrome/*'], dest: ''} // includes files in path
                ]
            }
        },

        concat: {
            // Scripte / Module zusammenführen
            // Auch jQuery integrieren
            script: {
                src: [
                    'vendor/*.js',
                    'src/prepend.js',
                    'src/lib/*.js',
                    'src/append.js'
                ],
                dest: 'dist/tmp/readmore-userscript.user.js'
            },

            // Userscripthead hinzufügen
            header: {
                src: [
                    'src/userscripthead.js',
                    'dist/tmp/readmore-userscript.user.js'
                ],
                dest: 'dist/tmp/readmore-userscript.user.js'
            },

            // Userscripthead zur minimierten Version hinzufügen
            headermin: {
                src: [
                    'src/userscripthead.js',
                    'dist/tmp/readmore-userscript.min.user.js'
                ],
                dest: 'dist/tmp/readmore-userscript.min.user.js'
            }
        },

        htmlmin: {
            // HTML der Optionen minimieren
            scriptoptions: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/tmp/options.html': 'src/options.html'
                }
            }
        },

        uglify: {
            // Minimierte Version vom Userscript erstellen
            script: {
                files: {
                    'dist/tmp/readmore-userscript.min.user.js': ['dist/tmp/readmore-userscript.user.js']
                }
            }
        },

        'string-replace': {
            // Menu in das Script einfügen
            includemenu: {
                options: {
                    replacements: [{
                        pattern: /\{\{optionshtml\}\}/ig,
                        replacement: function () {
                            return grunt.file.read('dist/tmp/options.html');
                        }
                    }]
                },
                files: {
                    'dist/tmp/readmore-userscript.user.js': 'dist/tmp/readmore-userscript.user.js'
                }
            },

            // Linebreaks entfernen
            removelinebreak: {
                options: {
                    replacements: [{
                        pattern: /\r?\n|\r/g,
                        replacement: ''
                    }]
                },
                files: {
                    'dist/tmp/options.html': 'dist/tmp/options.html'
                }
            },

            // Leerzeichen entfernen
            removewhitespace: {
                options: {
                    replacements: [{
                        pattern: /\s+/g,
                        replacement: ' '
                    }]
                },
                files: {
                    'dist/tmp/options.html': 'dist/tmp/options.html'
                }
            },

            version: {
                 options: {
                    replacements: [{
                        pattern: /\{\{version\}\}/ig,
                        replacement: '3.0.2'
                    }]
                },
                files: {
                    'dist/readmore-userscript.user.js': 'dist/tmp/readmore-userscript.user.js',
                    'dist/readmore-userscript.min.user.js': 'dist/tmp/readmore-userscript.min.user.js',
                    'dist/tmp/chrome/manifest.json': 'manifest.json'
                }
            }
        },

        // Aufräumen / Tempfiles entfernen
        clean: {
            src: 'dist/tmp'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-string-replace');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task.
    var tasks = [
        'mkdir',
        'htmlmin:scriptoptions',
        'concat:script',
        'string-replace:removelinebreak',
        'string-replace:removewhitespace',
        'string-replace:includemenu',
        'uglify:script',
        'concat:header',
        'concat:headermin',
        'string-replace:version',
        'copy',
        'compress',
        'clean'
    ];

    grunt.registerTask('default', tasks);
};