module.exports = {
    extends: ['cz'],
    rules: {
        "type-enum": [ 2, 'always', ["feat", "fix", "docs", "style", "refactor", "test", "chore", "revert"]],
    },
}