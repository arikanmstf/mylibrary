# MyLibrary v3
React and React Native with Redux, Material UI and Flow.

### System Requirements:
* nodejs: `v8.9.0`
* yarn `1.7.0`

### Install
* `yarn install`
* `yarn run flow-update`

### Start Web
* Starts webpack dev server:
* `yarn start (yarn run [start-web:local-dev, start-web:local-prod, start-web:live-dev, start-web:live-prod])`

### Build
* Creates files into `/dist` folder.
* `yarn run [build-web:local-dev, build-web:local-prod, build-web:live-prod]`

### Deploy
* Runs docker image at nginx.
* `yarn run [deploy-web:local]`

### Start Native
* `yarn start-native`
* If you're using Linux, for the first time you may need to run:
* `sudo sysctl -w kern.maxfiles=5242880`
* See [React Native reference](https://github.com/react-community/create-react-native-app) for more information.


### Eslint
* `yarn lint`

### Flow
* `yarn flow`

### Test
* `yarn test`

## Dockerize
* `docker build -t mylibrary-image .`
* `docker run -p 8082:80 -d --network bridge --name mylibrary-container mylibrary-image`
* `docker exec -it mylibrary-container bash`
