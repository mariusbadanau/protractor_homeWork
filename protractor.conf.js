exports.config = {
        baseUrl: 'https://testing-angular-applications.github.io',
        framework: 'jasmine',
        directConnect: true,
        capabilities: {
          browserName: 'chrome',
        },
        specs:
            ['Test/**/*.spec.js'],
    
    };