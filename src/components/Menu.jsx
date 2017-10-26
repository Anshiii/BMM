import React from "react"
import data from "../mock/obj.json"

import {Menu, Icon} from "antd"

const SubMenu = Menu.SubMenu
const a = 1

class SiderMenu extends React.PureComponent {
	componentDidMount() {
	}
    
    subMenuItem = item => (
    	<SubMenu 
    	key={item.id} 
    	title={<span><Icon type="mail" /><span>{item.title}</span></span>}
    	onTitleClick={this.props.menuClick}
    	>
    	    {item.children.map((item2) => {
    			if (!item2.children) {
    				return ("")
    			}
    				return this.subMenuItem(item2)
    		})}
    	</SubMenu>
    )

    render() {
    	return (
    		<Menu
    			defaultSelectedKeys={["1"]}
    			defaultOpenKeys={["sub1"]}
    			mode="inline"
    			theme="dark"
    			className="sideMenu"
    		>
    			{data.children.map(item => this.subMenuItem(item))}
    		</Menu>
    	)
    }
}

export default SiderMenu