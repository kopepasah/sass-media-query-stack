# Media Query Stack

One of the most common issues we have found using other media query mixins is their inability to build complex queries; thus, requiring us to fallback to using the standard [`@media`][1] CSS [at-rule][2]. While this is not necessarily a problem, it defeats the purpose of using a mixin and polutes the code with generic, untestable media queries.

Media Query Stack solves this problem by allowing developers to create simple media queries using defined breakpoints, while also allowing them to build complex media query stacks using all available types and features.

## Installation

```bash
yarn add sass-mqs --dev
# OR
npm install sass-mqs --save-dev
```

## Usage

There are three options for using this mixin: `string`, `list` or `map`.

```scss
// A predefined breakpoint as a string.
@include mqs( large ) {
	...
}

// A list which defines specific features.
@include mqs((
	min-width small,
	max-width huge
)) {
	...
}

// A map which provides type and features.
@include mqs((
	'only screen' : (
		min-width 300,
		max-width 550,
		orientation portrait
	),
	'all': (
		max-width 550,
	)
)) {
	...
}
```

[1]: https://developer.mozilla.org/en-US/docs/Web/CSS/@media
[2]: https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule
