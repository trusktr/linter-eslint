module.exports = {
  parserPreset: 'conventional-changelog-eslint',
  rules: {
    'header-max-length': [2, 'always', 72],

    // Types must be from this list
    'type-case': [2, 'always', 'start-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'Fix',
        'Update',
        'New',
        'Breaking',
        'Docs',
        'Build',
        'Upgrade',
        'Chore'
      ]
    ],

    // Scopes aren't allowed
    'scope-empty': [2, 'always'],

    // Subject rules
    'subject-case': [
      2,
      'never',
      // Allow everything but ALL UPPER CASE
      ['upper-case']
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],

    // Force body to have a line before it
    'body-leading-blank': [1, 'always'],

    // Footer must have a blank line preceeding it
    'footer-leading-blank': [1, 'always'],
  }
}
