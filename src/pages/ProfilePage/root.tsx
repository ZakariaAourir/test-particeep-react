import { Route, Switch } from 'react-router-dom';
import React from 'react';
import ComponentHeader from "../../container/HeaderContainer";
import ComponentSubHeader from "../../components/ComponentSubHeader";
import ComponentProfile from "../../components/ComponentProfile";
import routes from './routes';


function renderRoute({ key, path: routeUriPath, component: Component, ...rest }: any) {
    return <Route exact path={`${routeUriPath}`} key={key} render={props => <Component {...props} {...rest} />} />;
}

const ProfilePage = () => {
    return (
        <>
            <ComponentHeader/> 
            <ComponentSubHeader />
            <ComponentProfile />
            <Switch>{routes.map(route => renderRoute({ ...route }))}</Switch>
        </>
    );
};

export default ProfilePage;
