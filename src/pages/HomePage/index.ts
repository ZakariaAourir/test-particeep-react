import Loadable from 'react-loadable';
import ComponentLoading from '../../components/ComponentLoading';
// this is the component that load the page
export default Loadable({
    loader: () => import('./root'),
    loading: ComponentLoading,
});
