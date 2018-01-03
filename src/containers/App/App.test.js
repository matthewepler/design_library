import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';


Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  let props;
  let mountedApp;
  const app = () => {
    if (!mountedApp) {
      mountedApp = mount(<App {...props} />);
    }
    return mountedApp;
  };

  beforeEach(() => {
    props = {
      exampleProp: undefined,
    };
    mountedApp = undefined;
  });

  it('always renders a div', () => {
    const divs = app().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });

  // it("always renders at least one FileObject", () => {
  //    expect(app().find(FileObject).length).toBeGreaterThan(1);
  // })
});

