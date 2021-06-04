module.exports = {
	'processors': ['stylelint-processor-html'],
	'extends': 'stylelint-config-standard',
	'plugins': [
		'stylelint-scss'
	],
	'rules': {
		'indentation': 'tab',
		'font-family-name-quotes': 'always-unless-keyword',
		'block-no-empty': null,
		'string-quotes': 'double',
		'value-keyword-case': 'lower',
		'no-empty-source': null,
		'max-empty-lines': 3,
		'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
		'rule-empty-line-before': null,
		'comment-empty-line-before': null,
		'at-rule-no-unknown': [ true, {
			ignoreAtRules: ['extend', 'at-root', 'debug', 'warn', 'error', 'if', 'else', 'for', 'each', 'while', 'mixin', 'include', 'content', 'return', 'function']
		}],
		'block-closing-brace-newline-after': [
			'always',
			{
				ignoreAtRules: ['if']
			}
		]
	}
}
