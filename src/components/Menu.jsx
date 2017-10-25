import React from 'react';
import data from '../mock/obj.json';

import {Menu,Icon} from 'antd';

const SubMenu = Menu.SubMenu;



class SiderMenu extends React.PureComponent{
    componentDidMount(){
        this.menuContent();
    }
    menuContent(){
        console.log(data)
    }

    subMenuItem = (item)=>{
        //item.children.length>0
        return (
            <SubMenu key={item.id} title={<span><Icon type="mail" /><span>item.title</span></span>}>
            {item.children.map(item =>{
                if(!item.children){
                    return (<Menu.Item key={item.id}>item.title</Menu.Item>
                        )
                }else{
                    return this.subMenuItem(item);
                }
            })}
          </SubMenu>
        )
    }

    render(){

        return (
            <div>
                 <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
        >
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Option 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="inbox" />
            <span>Option 3</span>
          </Menu.Item>
          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
            </div>
        )
    }
}

export default SiderMenu