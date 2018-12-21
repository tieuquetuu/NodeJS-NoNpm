/**
 *  Create and export configuration variable
 */

// TODO: Container for all the environents
var environments = {};

// TODO: Staging (default) environment
environments.staging = {
    'httpPort' : 3000,
    'httpsPort' : 3001,
    'envName' : 'staging',
    'hashingSecret' : 'thisIsASecret',
    'maxChecks' : 5,
    'twilio' : {
        'accountSid' : '',
        'authToken' : '',
        'fromPhone' : ''
    },
    'templateGlobals' : {
        'appName' : 'UptimeChecker',
        'companyName' : 'NotARealCompany, Inc',
        'yearCreated' : '2018',
        'baseUrl' : 'http://localhost:3000/'
    }
};


// Testing environment
environments.testing = {
    'httpPort' : 4000,
    'httpsPort' : 4001,
    'envName' : 'testing',
    'hashingSecret' : 'thisIsASecret',
    'maxChecks' : 5,
    'twilio' : {
        'accountSid' : '',
        'authToken' : '',
        'fromPhone' : ''
    },
    'templateGlobals' : {
        'appName' : 'UptimeChecker',
        'companyName' : 'NotARealCompany, Inc',
        'yearCreated' : '2018',
        'baseUrl' : 'http://localhost:4000/'
    }
};


// TODO: Production environment
environments.production = {
    'httpPort' : 5000,
    'httpsPort' : 5001,
    'envName' : 'production',
    'hashingSecret' : 'thisIsAlsoASecret',
    'maxChecks' : 5,
    'twilio' : {
        'accountSid' : '',
        'authToken' : '',
        'fromPhone' : ''
    },
    'templateGlobals' : {
        'appName' : 'UptimeChecker',
        'companyName' : 'NotARealCompany, Inc',
        'yearCreated' : '2018',
        'baseUrl' : 'https://localhost:3000/'
    }
};

// TODO: Detwermine which environment was passed as a command-line argument
var currentEnvironment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';

// TODO: Check that the current environment is one of the environment above,if not, default to staging
var environmentToExport = typeof(environments[currentEnvironment]) == "object" ? environments[currentEnvironment] : environments.staging;

// TODO: Export the module
module.exports = environmentToExport;