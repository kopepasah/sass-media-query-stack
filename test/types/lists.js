/**
 * List Tests
 *
 * @package Sass Media Query Stack
 */

const lists = [
	// fail: this is not a list, but a set of function parameters.
	`@include mqs(
		small,
		max-width large
	)`,
	// pass
	`@include mqs((
		small,
		max-width large
	))`,
	// pass
	`@include mqs((
		small,
		max-width 1000
	))`,
	// pass
	`@include mqs((
		min-width 200,max-width 1200
	))`,
	// fail: too many options in the first feature.
	`@include mqs((
		min-width 200 500,
		max-width 1200
	))`,
];

module.exports = lists;
