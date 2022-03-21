/** @type {import('next').NextConfig} */
// const nextConfig = {
//
// }
// const withTM = require("next-transpile-modules")(["mojave/classes"])
const withTM = require('next-transpile-modules')(['@esotericsoftware/spine-player']);
module.exports = withTM({images: {
        loader: 'akamai',
        path: '',
    },
    reactStrictMode: true,});