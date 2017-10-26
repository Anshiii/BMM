import React from "react"

import {Card,Icon} from "antd"
import moment from "moment"

moment.locale("zh-cn")

class List extends React.PureComponent {
	componentDidMount() {
	}
	 
	//生成单个书签卡片
	cardGridContent=(item)=>{
		return (
			<div className="card">
				<Icon type="close" className="card-close"/>
				<a href={item.url} target="_blank">
					<span>{item.title||"该书签没有标题"}</span>
				</a>
				<div className="card-date">添加日期 : {moment(item.dateAdded).fromNow()   }</div>
			</div>
		)
	}

	render() {
		console.log(this.props.content)
		const {content} =  this.props
		const gridStyle = {
			width: "25%",
			textAlign: "center",
		}
    	return (
    		<div className="list">
				{content&&content.map(item =>{
					if(!item.children){
						return (<Card  noHovering key={item.id} bordered={false} >
							{this.cardGridContent(item)}
						</Card>)
					}else{
						return ""
					}
				})}
			</div>
    	)
	}
}

export default List