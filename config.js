var path = require('path'),
    fs = require('fs');

var env = fs.readFileSync('/etc/environment', 'utf-8').split('\n'),
    envVars = {},
    config;

env.forEach(function(envVar){
    var key, value;

    envVar = envVar.split('=');
    key = envVar[0];
    value = envVar[1];

    if(value){
        envVars[key] = value;
    }
});

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
                    user: envVars.EMAIL_USERNAME,
                    pass: envVars.EMAIL_PASSWORD
                }
            }
        },
        database: {
            client: 'postgres',
            connection: {
                host: '127.0.0.1',
                port: '5432',
                database: envVars.DB_NAME,
                user: envVars.DB_USERNAME,
                password: envVars.DB_PASSWORD
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
