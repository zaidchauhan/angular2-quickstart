/**
 * System JS Configuration
 */
 (function(global){
 	//paths as alias
 	var paths = {
 		'npm:': '../npm-libs/'
 	};

 	var map = {
 		//App & rxjs map
 		'app':'compiledSrc/',
 		'rxjs':'npm:rxjs',

 		//angular bundles
 		'@angular/core':'npm:@angular/core/bundles/core.umd.js',
 		'@angular/common':'npm:@angular/common/bundles/common.umd.js',
 		'@angular/compiler':'npm:@angular/compiler/bundles/compiler.umd.js',
 		'@angular/forms':'npm:@angular/forms/bundles/forms.umd.js',
 		'@angular/platform-browser':'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
 		'@angular/platform-browser-dynamic':'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
 		'@angular/router':'npm:@router/bundles/router.umd.js'
 	};

 	var packages = {
 		'app' : {defaultExtension:'js', main:'main.js'},
 		'rxjs' : {defaultExtension:'js'}
 	};

 	//
 	System.config({
 		paths:paths,
 		map:map,
 		packages:packages
 	});
 })(this);