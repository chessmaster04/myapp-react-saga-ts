import React from 'react';
import expect from 'expect';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import { News, Props } from '../News';

Enzyme.configure({ adapter: new Adapter() });

let actions = {
    getNews: jest.fn(fn => fn),
    delNewsItem: jest.fn(fn => fn),
};

const news = [
    {
        id: 1,
        title: 'News1',
    },
    {
        id: 2,
        title: 'News2',
    },
    {
        id: 3,
        title: 'News3',
    },
];

const defaultState = {
    news: null,
};

describe('<News/>', () => {
    it('News with null data', done => {

        const props: Props = {
            ...defaultState,
            actions
        }

        const wrapper: any = shallow(<News {...props} />);
        expect(actions.getNews).toHaveBeenCalled();
        done();
    });

    it('News with 3 news', done => {

        const props: Props = {
            ...defaultState,
            actions,
            news
        }

        const wrapper: any = shallow(<News {...props} />);
        expect(actions.getNews).toHaveBeenCalled();
        console.log(toJson(wrapper));
        expect(
            wrapper
                .find('ConnectFunction').length,
        ).toEqual(3);
        done();
    });

});
