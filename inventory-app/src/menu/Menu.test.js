import { render, screen } from '@testing-library/react';
import {Menu} from './Menu';
import { shallow,mount } from 'enzyme';



describe('menu', () => {
    it('simulate add menu onclick', () => {
        const menuData = [{
            menuId:1,
            name:'Home',
            path:'#/Home'
        },
        ];
       const wrapper = shallow(<Menu items={menuData} />);
        const btn = wrapper.find('button');
        btn.simulate('click');
        expect(btn.prop('disabled')).toBeFalsy();
        const buttonElement  = wrapper.find('.btn-style');
        expect(buttonElement).toHaveLength(1);
        expect(buttonElement.text()).toEqual('Home');
        //expect(wrapper.text().includes('Home')).toBe(true)
       const btnElement= wrapper.findWhere(node=>{
            return node.type() === 'input' & node.text === 'Home';
        })
        //btnElement.simulate('click');
        expect(buttonElement).toHaveLength(1);
    });
});

