module.exports = {
    presets: [
        require('babel-preset-env'),
        require('babel-preset-react')
    ],
    plugins: [
        require('react-hot-loader/babel'),
        require('babel-plugin-transform-object-rest-spread'),
        require('babel-plugin-transform-class-properties')
    ]
};
