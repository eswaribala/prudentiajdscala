import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';
/*
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/

describe('Screen should have text as John Deere Inventory App',()=>{
    it('Shallow component should have snapshots',()=>{
        const component=shallow(<App/>)
        expect(component).toMatchInlineSnapshot
    })
    it('Render Component to test Screen Text',()=>{
        render(<App/>)
        const text=screen.getByText('John Deere Inventory App')
        expect(text).toBeInTheDocument
    })
})
