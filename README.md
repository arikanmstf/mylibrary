# MyLibrary
React and React Native with Redux, Material UI and Flow.

### Install

* `yarn install`

If you use Linux, for the first time you may need to run:

* `sudo sysctl -w kern.maxfiles=5242880`
* See [React Native reference](https://github.com/react-community/create-react-native-app) for more information.

### Start Web

* `yarn start`

### Start Native

* `yarn start-native`

### Eslint

* `yarn lint`

### Flow

* `yarn flow`

### Test

* `yarn test`

## Dockerize
* `docker build -t mylibrary-image .`
* `docker run -p 8082:80 -d -v /Users/mstf/Sites/mylibrary/dist:/var/www/Website --name mylibrary-container mylibrary-image`
* `docker exec -it mylibrary-container bash`
