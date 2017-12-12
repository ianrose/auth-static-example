const server = require('auth-static')

const config = {
       options: {
        cache: 0,
        gzip: true
    },
    password: process.env.PASSWORD,
    port: 1234,
    realm: 'Private',
    root: './www',
    username: process.env.USERNAME
}

server(config)
