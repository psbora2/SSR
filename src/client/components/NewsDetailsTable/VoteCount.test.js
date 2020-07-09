import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VoteCount from './VoteCount';
Enzyme.configure({ adapter: new Adapter() });
describe('VoteCount Component', () => {
  	it('should show the text', () => {
		const wrapper = shallow(<VoteCount data ={{points:100}} />);
		expect(wrapper.find('span').text()).toBe('100');
 	});

  	it('should show the text', () => {
		const wrapper = shallow(<VoteCount data ={{points:100}} />);
		expect(wrapper.hasClass('hn_vote_above_100')).toBe(true)
 	});

});