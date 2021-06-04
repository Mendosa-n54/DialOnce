module.exports = {
	'extends': [
		'eslint:recommended', 
		'plugin:react/recommended',
		'google',
	],
	'env': {
		'es6': true,
		'browser': true,
		'node': true,
	},
	'parser': 'babel-eslint',
	'parserOptions': {
		'sourceType': 'module',
	},
	'rules': {
		'no-console': 'off',
		'require-jsdoc': 0,
		'padded-blocks': 0,
		'semi': ['error', 'never'],
		'max-len': [
            'error',
            { 'code': 300, 'ignoreComments': true, 'ignoreTrailingComments': true, 'ignoreUrls': true, 'ignoreStrings': true }
        ],
		'linebreak-style': ['error', 'windows'],
		'no-tabs': 0,
		'indent': ['error', 'tab'],
		'comma-dangle': 0,
		'object-curly-spacing': ['error', 'always'],
		'react/prop-types': 0,
	}
}
