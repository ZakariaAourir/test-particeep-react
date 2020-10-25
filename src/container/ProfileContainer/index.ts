import { injectAsyncReducer } from '../../utils/asyncInjectors';
import Loadable from 'react-loadable';
import ComponentLoading from '../../components/ComponentLoading';

const ProfileLoader = Loadable({
    loader: async () => {
        const module = await import('./reducer');
        injectAsyncReducer({
            ProfileInfo: module.default,
        });
        return import('./container');
    },
    loading: ComponentLoading,
});

export default ProfileLoader;
