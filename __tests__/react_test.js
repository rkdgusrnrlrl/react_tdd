import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

var CheckboxWithLabel = React.creatClass

describe('CheckboxWithLabel', () => {
  it('changes the text after click', () => {
    TestUtils.renderIntoDocument(
      <CheckboxWithLabel labelOn="On" labelOff="Off" />
    )
  })
})

var CheckboxWithLabel = React.createClass({
    render : function (){
        return (
            <div></div>
        );
    }
})