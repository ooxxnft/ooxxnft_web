const debug = process.env.NODE_ENV !== 'production'

module.exports = {
    assetPrefix: !debug ? '/ooxxnft_web/' : '',
    env: {
        NETWORK: 'mumbai',
    },
}