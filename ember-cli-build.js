/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
	var app = new EmberApp(defaults, {
		fingerprint: {
			enabled: false
		},
		minifyJS: {
			enabled: true
		},
		minifyCSS: {
			enabled: true
		},
		lessOptions: {
			paths: [
				'node_modules/tachyons/css'
			]
		}
	});

	return app.toTree();
};
