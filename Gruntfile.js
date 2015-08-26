module.exports = function(grunt) {
	//Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dev: {
				files: {
					'src/style/style.css' : 'src/style/style.scss'
				}
			}
		},
		jshint: {
			files: ['src/script/script.js']
		},
		watch: {
			files: ['src/style/style.scss', '<%= jshint.files %>'],
			tasks: ['sass:dev', 'jshint']
		},
		'http-server': {
			dev: {
				root: 'src',
				port: 9000
			}
		}
	});

	//Load plugins
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-http-server');

	//Tasks
	grunt.registerTask('default', ['sass', 'watch']);
	grunt.registerTask('server', ['http-server']);
};
