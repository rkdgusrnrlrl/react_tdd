import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';


describe('CheckboxWithLabel', () => {
  it('changes the text after click', () => {
    TestUtils.renderIntoDocument(
      <CheckboxWithLabel labelOn="On" labelOff="Off" />
    )
  })
})