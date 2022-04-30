import React, { FunctionComponent, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from 'react-redux'
import { getTodos } from 'redux/actions/demo';
import DashboardRoutes from 'routes/Dashboard'

const MainLayoutWrapper = styled.div`
 
`;

interface MainLayoutProps {
  
}

const MainLayout: FunctionComponent<MainLayoutProps> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos())
  }, [dispatch])
  
  return (
    <MainLayoutWrapper>
      <h1>Layout Page</h1>
      <DashboardRoutes/>
    </MainLayoutWrapper>
  )
};

MainLayout.propTypes = {
  
};

MainLayout.defaultProps = {
 
};

export default MainLayout;
