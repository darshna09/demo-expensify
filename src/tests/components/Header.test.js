import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';

test('should render header component', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Header />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});
