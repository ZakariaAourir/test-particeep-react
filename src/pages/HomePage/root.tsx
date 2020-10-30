import React from 'react';
import ComponentHeader from "../../components/ComponentHeader";
import ComponentHome from "../../container/HomeContainer";





// this component we import all the components needed for the home page
const HomePage = () => {
    return (
      <>
        <ComponentHeader />
        <ComponentHome />
      </>
    );
};

export default HomePage;
