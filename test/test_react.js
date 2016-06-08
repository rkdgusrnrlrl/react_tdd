import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

//enzyme data 중 값이 숫자인 경우 contains로 해당 값이 포함 되는지 체크시 안됨 string으로 바꾸면 됨


var mockData = {
                  id : "1",
                  payDate:"2016-01-01", 
                  content:"안녕하세요", 
                  inOut:"in", 
                  money: "1000"
                }

//@ todo HomeKeeperTable 테스트
//1. HomeKeeperTable 은 table element 여야 함
//2. className(class)는 테이블 이여야함 (부트스트랩 클래스)
//3. row 렌더링 하기 
describe("A suite for HomeKeeperTable", function() {
    var HomeKeeperTable = React.createClass({
        render : function () {
        var rows;

        if (typeof this.props.data !== "undefined") {
            rows = this.props.data.map(function(homekeeper) {
                return (
                    <tr>
                        <td>{homekeeper.id}</td>
                        <td>{homekeeper.payDate}</td>
                        <td>{homekeeper.content}</td>
                        <td>{homekeeper.inOut}</td>
                        <td>{homekeeper.money}</td>
                    </tr>)
            });
        }

        return (<table className="table">
                    <tbody>
                    {rows}
                    </tbody>
                </table>)
        }
    })


    it("HomeKeeperTable 은 table 엘리먼트임", function() {
        expect(shallow(<HomeKeeperTable />).is('table')).to.equal(true);
    });

    it("className(class)는 테이블 이여야함 (부트스트랩 클래스)", function() {
        expect(shallow(<HomeKeeperTable />).is('.table')).to.equal(true);
    });

    it("row 렌더링 하기", function() {
        const homekeeper = mount(<HomeKeeperTable data={[mockData]} />);
        console.log(homekeeper.debug())

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
