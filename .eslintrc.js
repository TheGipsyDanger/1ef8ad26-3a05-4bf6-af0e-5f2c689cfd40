// eslint-disable-next-line
module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-native/all',
        'plugin:prettier/recommended'
    ],
    plugins: [
        '@typescript-eslint',
        'react',
        'react-native',
        'unused-imports',
        'prettier',
        'import-helpers'
    ],
    rules: {
        'prettier/prettier': 'error',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-empty-object-type': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-namespace': 'off',
        'unused-imports/no-unused-imports': 'error',
        'react/react-in-jsx-scope': 'off',
        'react-native/no-inline-styles': 'off',
        'react-native/no-raw-text': 'off',
        'import-helpers/order-imports': [
            'warn',
            {
                newlinesBetween: 'always',
                groups: [['/^react/'], ['module'], ['/^@//'], [('parent', 'sibling', 'index')]],
                alphabetize: {
                    order: 'asc',
                    ignoreCase: true
                }
            }
        ]
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
}
