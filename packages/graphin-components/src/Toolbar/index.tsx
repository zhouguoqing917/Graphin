import * as React from 'react';
// import { GraphinContext } from '@antv/graphin';

interface ToolbarProps {
  children: JSX.Element | React.ReactChildren | JSX.Element[];
}

const Toolbar: React.FunctionComponent<ToolbarProps> = (props) => {
  // const { graph, apis } = React.useContext(GraphinContext);
  const { children } = props;

  return <div>{children}</div>;
};

export default Toolbar;