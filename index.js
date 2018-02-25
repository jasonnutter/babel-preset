const BABEL_WEBPACK = 'webpack';
const BABEL_NODE = 'node';
const NODE_DEV = 'development';

const modules = () => {
    switch (process.env.BABEL_ENV) {
    case BABEL_WEBPACK: return false;
    case BABEL_NODE: return 'commonjs';
    default: return 'commonjs';
    }
};

const targets = () => {
    switch (process.env.BABEL_ENV) {
    case BABEL_WEBPACK: return { browsers: [ 'last 2 versions' ] };
    case BABEL_NODE: return { node: 'current' };
    default: return {};
    }
};

const nodePlugins = process.env.BABEL_ENV === BABEL_NODE ? [
    [
        require.resolve('babel-plugin-transform-require-ignore'),
        {
            extensions: [
                '.less',
                '.css'
            ]
        }
    ]
] : [];

const reactDevPlugins = process.env.NODE_ENV === NODE_DEV ? [
    require.resolve('babel-plugin-transform-react-jsx-source'),
    require.resolve('babel-plugin-transform-react-jsx-self')
] : [];

const preset = {
    presets: [
        [ require.resolve('babel-preset-env'), {
            targets: targets(),
            modules: modules()
        } ],
        require.resolve('babel-preset-react')
    ],
    plugins: [
        require.resolve('babel-plugin-lodash'),
        require.resolve('react-hot-loader/babel'),
        require.resolve('babel-plugin-transform-object-rest-spread'),
        require.resolve('babel-plugin-transform-class-properties'),
        ...reactDevPlugins,
        ...nodePlugins
    ]
};

module.exports = preset;
