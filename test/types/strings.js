/**
 * String Tests
 *
 * @package Sass Media Query Stack
 */

const strings = [
	`@include mqs( large )`,   // pass
	`@include mqs( 'small' )`, // pass
	`@include mqs( unknown )`  // fail
];

module.exports = strings;
