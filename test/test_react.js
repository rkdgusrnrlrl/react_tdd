import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

/*
describe("A suite", function() {
	var Foo = React.createClass({
		render() {
			return <div className="foo"/>
		}
	})

  it("contains spec with an expectation", function() {
    expect(shallow(<Foo />).contains(<div className="foo" />)).to.equal(true);
  });

  it("contains spec with an expectation", function() {
    expect(shallow(<Foo />).is('.foo')).to.equal(true);
  });

  it("contains spec with an expectation", function() {
    expect(mount(<Foo />).find('.foo').length).to.equal(1);
  });
});*/

//@ todo HomeKeeperTable 테스트
//1. HomeKeeperTable 은 table element 여야 함
//2. className(class)는 테이블 이여야함 (부트스트랩 클래스)
describe("A suite for HomeKeeperTable", function() {
  var HomeKeeperTable = React.createClass({
    render : function () {
      return <table className="table"/>
    }
  })

  it("HomeKeeperTable 은 table 엘리먼트임", function() {
    expect(shallow(<HomeKeeperTable />).is('table')).to.equal(true);
  });

  it("className(class)는 테이블 이여야함 (부트스트랩 클래스)", function() {
    expect(shallow(<HomeKeeperTable />).is('.table')).to.equal(true);
  });
  
});