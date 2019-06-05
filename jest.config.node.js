/**
 * @type {jest.ProjectConfig}
 */
module.exports = {
    roots: [
        '<rootDir>/test/node'
    ],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js',
        'jsx',
        'json',
        'node'
    ],
    testEnvironment: 'node'
};
