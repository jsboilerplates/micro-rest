# Boilerplate for REST Microservice in NodeJS
[![Build Status](https://travis-ci.org/jsboilerplates/micro-rest.svg?branch=master)](https://travis-ci.org/jsboilerplates/micro-rest)
[![codecov](https://codecov.io/gh/jsboilerplates/micro-rest/branch/master/graph/badge.svg)](https://codecov.io/gh/jsboilerplates/micro-rest)
[![](https://images.microbadger.com/badges/image/jsboilerplates/micro-rest.svg)](https://microbadger.com/images/jsboilerplates/micro-rest)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jsboilerplates/micro-rest/blob/master/LICENSE)

## Features
- REST API with Swagger UI
- Middlewares (compress, helmet, cors, favicon, etc)
- Unit Test with Jest
- ES6, ESLint
- CI with Travis, Docker Build

## Installation

``` bash
# install dependencies
npm install

```

## Running the tests

``` bash
# run all tests
npm test

# run test coverage
npm run coverage
```

## Build and Run

``` bash

# serve with hot reload at localhost:3030
npm start

# build for production with minification
npm run build

```

## Docker support

Build docker image

```
bash Dockerbuild.sh
```

Run docker container

```
docker run -d --name micro-rest -p 3030:3030 jsboilerplates/micro-rest
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/jsboilerplates/micro-rest/tags).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
