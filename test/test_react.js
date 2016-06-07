import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

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
    expect(shallow(<Foo />).is('.foo')).to.equal(true);0-
  });

  it("contains spec with an expectation", function() {
    expect(mount(<Foo />).find('.foo').length).to.equal(1);
  });
});*/




var mockData = {
                  id : 1,
                  payDate:"2016-01-01", 
                  content:"안녕하세요", 
                  inOut:"in", 
                  money:"1000"
                }

//@ todo HomeKeeperTable 테스트
//1. HomeKeeperTable 은 table element 여야 함
//2. className(class)는 테이블 이여야함 (부트스트랩 클래스)
//3. row 렌더링 하기 
describe("A suite for HomeKeeperTable", function() {
  var HomeKeeperTable = React.createClass({
    render : function () {
      var rows = this.props.data.map(function(homekeeper) {
        return (
            <tr>
                <td>{homekeeper.id}</td>
                <td>{homekeeper.payDate}</td>
                <td>{homekeeper.content}</td>
                <td>{homekeeper.inOut}</td>
                <td>{homekeeper.money}</td>
            </tr>)
      });

      return (<table className="table">
                <tbody>
                {rows}
                </tbody>
              </table>)
    }
  })
  

  /*it("HomeKeeperTable 은 table 엘리먼트임", function() {
    expect(shallow(<HomeKeeperTable />).is('table')).to.equal(true);
  });

  it("className(class)는 테이블 이여야함 (부트스트랩 클래스)", function() {
    expect(shallow(<HomeKeeperTable />).is('.table')).to.equal(true);
  });*/

  it("row 렌더링 하기", function() {
    const homekeeper = mount(<HomeKeeperTable data={[mockData]} />);
    expect(homekeeper.contains(
        <tr>
          <td>1</td>
          <td>2016-01-01</td>
          <td>안녕하세요</td>
          <td>in</td>
          <td>1000</td>
        </tr>
      )
    ).to.equal(true);
  });
  
});
