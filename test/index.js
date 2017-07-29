/* globals require */
/* eslint-disable global-require */

const sass = require( 'node-sass' );
const chalk = require( 'chalk' );
const stripIndent = require( 'strip-indent' );
const indentString = require( 'indent-string' );
const convertToSpaces = require( 'convert-to-spaces' );

const tests = {
	'strings': require( './types/strings.js' ),
	'lists': require( './types/lists.js' ),
	'maps': require( './types/maps.js' )
}

for ( let test in tests ) {
	let indent = '### ';

	if ( tests.hasOwnProperty( test ) ) {

		for ( let data of tests[test] ) {
			sass.render({
				data: `@import 'mqs';${data}{content:'pass';}`,
				outputStyle: 'expanded'
			}, function( error, result ) {
				if ( error ) {
					console.log( indentString( chalk.red( 'Fail ❌' ), indent ) );
					console.log( indentString( chalk.red( stripIndent( convertToSpaces( `\t${data}` ) ) ), indent ) );
					console.log( indentString( `${error.message}\n`, indent ) );
				} else {
					console.log( indentString( chalk.green( 'Pass ✅' ), indent ) );
					console.log( indentString( chalk.green( stripIndent( convertToSpaces( `\t${data}` ) ) ), indent ) );
					console.log( indentString( result.css.toString(), indent ) );
				}
			});
		}
	}
}
