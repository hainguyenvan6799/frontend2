import React, {Component} from 'react';

export default class ErrorsAlert extends Component
{
	constructor(props){
		super(props);
	}

	renderContent(){
		if(typeof this.props.errors == "string")
		{
			return (
				<div className="alert alert-danger">
					<h2>{this.props.errors}</h2>
				</div>
			)
		}
		else
		{
			let errors_count = this.props.errors.length;
			if(errors_count > 0){
				return (
				<div className="container-fluid">
					<table className="table table-striped table-hover">
					<caption className="text-danger">Chú ý, bạn đang có lỗi</caption>
					<thead>
						<tr>
							<th>STT</th>
							<th>Dòng</th>
							<th>Nội dung</th>
						</tr>
					</thead>
					<tbody>
						{
							this.props.errors.map((item, index) => {
								return (
									<tr key={index}>
										<td>{index}</td>
										<td>{item.row}</td>
										<td>{item.errors}</td>
									</tr>
								)
							})
						}
						
					</tbody>
				</table>
				</div>
			)
			}
			else
			{
				return null;
			}
			
		}
	}

	render(){
		return (
			<div className="container">
				{this.renderContent()}
			</div>
		)
	}
}
