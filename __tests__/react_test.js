import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';


//@todo 개인 정보(이름, 나이, 성별)를 form 으로 서버에 보냄 

var InsertPersonInfoForm = React.createClass({
  render: function() {
    return (
      <form></form>
    );
  }
});

describe('개인 정보(이름, 나이, 성별)를 form 으로 서버에 보냄 ', () => {
  it('Form 컴포넌트 렌더링', () => {
    const form = TestUtils.renderIntoDocument(
      <InsertPersonInfoForm />
    )
    expect(TestUtils.isCompositeComponent(form)).toBeTruthy();
  })

  it('Form 컴포넌트 form 타입 ', () => {
    var form = React.createClass({
      render () {
        return <form></form>;
      }
    });
    expect(TestUtils.isElementOfType(<InsertPersonInfoForm />).toBeTruthy();

    /*expect(TestUtils
            .isElementOfType(
                insertPersonInfoForm
                , function () {
                  return <form></form>;
                }
              )).toBe(true);*/
  })
  /*
  it('Form 컴포넌트 input 3개 포함', () => {
    const form = TestUtils.renderIntoDocument(
      <InsertPersonInfoForm />
    )
    expect(TestUtils.isElementOfType(form, <form></form>)).toBeTruthy();
  })*/
})

