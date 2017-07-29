/**
 * Map Tests
 *
 * @package sass-mqs
 */

const maps = [
	// pass
	`@include mqs((
		'print': (
			max-width small,
		)
	))`,
	// fail: map type should be separated by a comma.
	`@include mqs((
		'print': (
			max-width small
		)
	))`,
	// pass
	`@include mqs((
		'all': (
			min-width small,
			max-width large
		),
		'screen': (
			orentiation landscape,
		)
	))`
];

module.exports = maps;
