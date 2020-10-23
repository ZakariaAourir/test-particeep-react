import { injectAsyncReducer } from '../../utils/asyncInjectors';
import Loadable from 'react-loadable';
import ComponentLoading from '../../components/ComponentLoading';

const SignupLoader = Loadable({
    loader: async () => {
        const module = await import('./reducer');
        injectAsyncReducer({
            signupInfo: module.default,
        });
        return import('./container');
    },
    loading: ComponentLoading,
});

export default SignupLoader;
