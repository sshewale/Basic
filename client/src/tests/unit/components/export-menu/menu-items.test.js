import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MenuItems from '../../../../components/export-menu/menu-items';

configure({ adapter: new Adapter() });

const menuItemsProps = {
  items: ['One', 'Two', 'Three'],
  onExport: jest.fn(),
};

describe('MenuItems component', () => {
  let exportItemWrapper;
  beforeAll(() => {
    exportItemWrapper = shallow(<MenuItems {...menuItemsProps} />);
  });
  it('renders correct text in menuItems', () => {
    expect.assertions(4);
    expect(exportItemWrapper.find('.menu-items').get(0).props.children).toEqual(
      'One',
    );
    expect(exportItemWrapper.find('.menu-items').get(1).props.children).toEqual(
      'Two',
    );
    expect(exportItemWrapper.find('.menu-items').get(2).props.children).toEqual(
      'Three',
    );
    expect(exportItemWrapper.find('.menu-items')).toHaveLength(
      menuItemsProps.items.length,
    );
  });
  it('check props of component', () => {
    expect.assertions(2);
    expect(exportItemWrapper.instance().props.items).toBe(menuItemsProps.items);
    expect(exportItemWrapper.instance().props.onExport).toBe(
      menuItemsProps.onExport,
    );
  });
  it('will check the values and props of component', () => {
    expect.assertions(1);
    expect(exportItemWrapper).toMatchSnapshot();
  });
});

describe('MenuItems full dom rendering', () => {
  let exportItemWrapper;
  beforeAll(() => {
    exportItemWrapper = mount(<MenuItems {...menuItemsProps} />);
  });
  afterAll(() => {
    exportItemWrapper.unmount();
  });
  it('check item prop of component', () => {
    expect.assertions(3);
    expect(exportItemWrapper.props().items).toEqual(['One', 'Two', 'Three']);
    expect(exportItemWrapper.props().items).not.toEqual(['abc', 'xyz']);
    expect(exportItemWrapper.props().items).toHaveLength(
      menuItemsProps.items.length,
    );
  });
  it('check setting new prop value to item of component', () => {
    exportItemWrapper.setProps({ items: ['xyz'] });
    expect.assertions(2);
    expect(exportItemWrapper.props().items).toEqual(['xyz']);
    expect(exportItemWrapper.props().items).not.toEqual(['abc']);
  });
});
//TODO test case for onExport props
/* onExport={(item) =>
              this.handleExportMenu(item, refData, exportFileName)
            }
 */
