import * as FEAAS from '@sitecore-feaas/clientside/react';
interface MyComponentProps {
  title: string;
}
export const MyComponent = (props: MyComponentProps): JSX.Element => {
  return (
    <div className="container">
      <h2>{props.title || 'BYOC Demo'}</h2>
    </div>
  );
};
FEAAS.External.registerComponent(MyComponent, {
  name: 'MyComponent',
  properties: {
    title: {
      type: 'string',
    },
  },
});
