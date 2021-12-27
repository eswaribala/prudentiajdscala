import { render, screen } from '@testing-library/react';
import {AddProduct} from './AddProduct';
import { shallow,mount } from 'enzyme';

describe('should have text box',()=>{
    const initialProps = {
        name: 'Laptop',
        cost: 34000,
    };

    const container = shallow(<AddProduct {...initialProps} />);

    it('should have proper props for name field', () => {
        expect(container.find('input[type="text"]').props()).toEqual({
            onBlur: expect.any(Function),
            placeholder: 'Product Name',
            type: 'text',
        });
    });


})
