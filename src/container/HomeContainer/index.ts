import { injectAsyncReducer } from '../../utils/asyncInjectors';
import Loadable from 'react-loadable';
import ComponentLoading from '../../components/ComponentLoading';

const HomeLoader = Loadable({
    loader: async () => {
        const module = await import('./reducer');
        injectAsyncReducer({
            JobInfo: module.default,
        });
        return import('./container');
    },
    loading: ComponentLoading,
});

export default HomeLoader;
