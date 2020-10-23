import Loadable from 'react-loadable';
import ComponentLoading from '../../components/ComponentLoading';

export default Loadable({
    loader: () => import('./root'),
    loading: ComponentLoading,
});
