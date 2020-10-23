import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ComponentHeader from "../../container/HeaderContainer";
import ComponentHome from "../../container/HomeContainer";
import ComponentSubHeader from "../../components/ComponentSubHeader";
import routes from './routes';



function renderRoute({ key, path: routeUriPath, component: Component, ...rest }: any) {
    return <Route exact path={`${routeUriPath}`} key={key} render={props => <Component {...props} {...rest} />} />;
}

const HomePage = () => {
    return (
        <>
            <ComponentHeader/>
            <ComponentSubHeader />
            <ComponentHome />
            <Switch>{routes.map(route => renderRoute({ ...route }))}</Switch>
        </>
    );
};

export default HomePage;
