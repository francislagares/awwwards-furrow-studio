import React from 'react';
import HomeBanner from '../components/homePage/homeBanner';
import Layout from '../components/layout';
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from '../context/globalContext';

const IndexPage = (): JSX.Element => {
  const { currentTheme, cursorStyles } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();

  const onCursor = (cursorType: any): void => {
    cursorType = (cursorStyles?.includes(cursorType) && cursorType) || false;
    dispatch({ type: 'CURSOR_TYPE', cursorType: cursorType });
  };

  return (
    <Layout>
      <HomeBanner onCursor={onCursor} />
    </Layout>
  );
};

export default IndexPage;
