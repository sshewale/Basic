import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { Dialog, DialogContent, Button } from '@material-ui/core';
import AlertDialog from '../../../../components/common/alert-dialog/alert-dialog';

configure({ adapter: new Adapter() });

const dialogProps = {
  onClose: jest.fn(),
  onClick: jest.fn(),
  alertMessage: 'No records found to export.',
  openDialog: true,
};

describe('alert dialog component', () => {
  let alertDialog;
  beforeEach(() => {
    alertDialog = shallow(<AlertDialog />);
    alertDialog.setProps(dialogProps);
  });

  it('should not open alert without the required props', () => {
    alertDialog.setProps({});
    expect.assertions(1);
    expect(toJson(alertDialog)).toMatchSnapshot();
  });

  it('should render without crashing given the required props', () => {
    expect.assertions(1);
    expect(toJson(alertDialog)).toMatchSnapshot();
  });

  it('should render diaglog component', () => {
    expect.assertions(2);
    const dialogComponent = alertDialog.find(Dialog);
    expect(dialogComponent.length).toEqual(1);
    expect(dialogComponent.props().open).toBe(true);
  });

  it('dialog should render DialogContent component with text valie as "No records found to export."', () => {
    expect.assertions(2);
    const dialogContentComponent = alertDialog.find(Dialog).find(DialogContent);
    expect(dialogContentComponent.length).toEqual(1);
    expect(dialogContentComponent.text()).toEqual(
      'No records found to export.',
    );
  });

  it('dialog should render Button component with text value as "Ok"', () => {
    const buttonComponent = alertDialog.find(Dialog).find(Button);
    expect(buttonComponent.length).toEqual(1);
    expect(buttonComponent.text()).toEqual('Ok');
  });
});
