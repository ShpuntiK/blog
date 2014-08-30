var path = require('path'),
    config;

config = {
    development: {
        url: 'http://my-ghost-blog.com',
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-dev.db')
            },
            debug: true
        },
        server: {
            host: '127.0.0.1',
            port: '2368'
        },
        paths: {
            contentPath: path.join(__dirname, '/content/')
        }
    },

    production: {
        url: 'http://aivantsov.com',
        mail: {},
        database: {
            client: 'postgres',
            connection: process.env.DATABASE_URL,
            debug: false
        },
        server: {
            host: '0.0.0.0',
            port: process.env.PORT
        }
    }
};

module.exports = config;