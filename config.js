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
        mail: {
            transport: 'SMTP',
            options: {
                service: 'Gmail',
                auth: {
                    user: process.env.EMAIL_USERNAME,
                    pass: process.env.EMAIL_PASSWORD
                }
            }
        },
        database: {
            client: 'postgres',
            connection: {
                host: '127.0.0.1',
                port: '5432',
                database: process.env.DB_NAME,
                user: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD
            },
            debug: false
        },
        server: {
            host: '0.0.0.0',
            port: '2368'
        }
    }
};

module.exports = config;
