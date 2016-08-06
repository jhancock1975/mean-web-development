module.exports = function(grunt) {
  grunt.initConfig({
    env: {
      dev: {
        NODE_ENV: 'development'
      },
      test: {
        NODE_ENV: 'test'
      }
    }
  });

  grunt.loadNpmTasks('grunt-env');

  grunt.registerTask('default', ['env:dev']);
};
