import { render, screen } from '@testing-library/react';
import {AddProduct} from './AddProduct';
import { shallow,mount } from 'enzyme';

describe('should have text box',()=>{
    const initialProps = {
        propsName: 'Laptop',
        propsCost: 34000,
    };

    const container = shallow(<AddProduct {...initialProps} />);

    it('should have proper props for name field', () => {
        expect(container.find('input[type="text"]').props()).toEqual({
            onBlur: expect.any(Function),
            placeholder: 'Product Name',
            type: 'text',
        });
    });
   /* it('should have proper props for cost field', () => {
        expect(container.find('input[type="number"]').props()).toEqual({
            onChange: expect.any(Function),
            type: 'number',
            value: 34000,
        });
    });*/


    it('should set the cost value on change event with value', () => {

        container.find('input[type="number"]').simulate('change', {
            target: {
                value: 3000,
            },
        });
        expect(container.find('input[type="number"]').prop('value')).toEqual(
            3000,
        );
    });

})

describe('<AddProduct /> test effect hooks', () => {
    const container = mount(<AddProduct/>);

    it('should have the add product disabled by default', () => {
        expect(
            container.find('input[type="button"]').prop('disabled'),
        ).toBeTruthy();
    });
});
