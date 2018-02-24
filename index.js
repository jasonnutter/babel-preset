const moduleFormat = () => {
    switch (process.env.BABEL_ENV) {
    case 'webpack': return false;
    case 'node': return 'commonjs';
    default: return 'commonjs';
    }
};

const preset = {
    presets: [
        [ require.resolve('babel-preset-env'), {
            targets: {
                node: 'current'
            },
            modules: moduleFormat()
        } ],
        require.resolve('babel-preset-react')
    ],
    plugins: [
        require.resolve('babel-plugin-lodash'),
        require.resolve('react-hot-loader/babel'),
        require.resolve('babel-plugin-transform-object-rest-spread'),
        require.resolve('babel-plugin-transform-class-properties')
    ]
};

if (process.env.NODE_ENV === 'development') {
    preset.plugins.push(
        require.resolve('babel-plugin-transform-react-jsx-source'),
        require.resolve('babel-plugin-transform-react-jsx-self')
    );
}

module.exports = preset;
