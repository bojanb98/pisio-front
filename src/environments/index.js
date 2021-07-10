import devkubeConfig from './config.devkube.json';
import devlocalConfig from './config.devlocal.json';
import prodConfig from './config.prod.json';


const getEnvironment = () => {
    switch (process.env.REACT_APP_ENV) {
        case 'devkube': {
            return devkubeConfig;
        }
        case 'devlocal': {
            return devlocalConfig;
        }
        case 'prod': {
            return prodConfig;
        }
        default: {
            throw new Error("NODE_ENV not being set");
        }
    }
}


export default getEnvironment;