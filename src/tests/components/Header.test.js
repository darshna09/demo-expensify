import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

// Using Enzyme
test('should render header component', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper).toMatchSnapshot();
});

// Using react-test-renderer
xtest('should render header component', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Header />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});
