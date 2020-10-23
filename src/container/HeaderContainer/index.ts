import { injectAsyncReducer } from '../../utils/asyncInjectors';
import Loadable from 'react-loadable';
import ComponentLoading from '../../components/ComponentLoading';

const HeaderLoader = Loadable({
    loader: async () => {
        const module = await import('./reducer');
        injectAsyncReducer({
            headerInfo: module.default,
        });
        return import('./container');
    },
    loading: ComponentLoading,
});

export default HeaderLoader;
