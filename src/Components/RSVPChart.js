import React, { Component } from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from 'recharts';



class RSVPChart extends Component{



  render(){
    const { event } = this.props;
    const data = [{name: "Free Slots Left", value: event.rsvp_limit - event.yes_rsvp_count}, { name: "Reservations Confirmed" ,  value: event.yes_rsvp_count}];
		const colors = ["#def2f1", "#17252a"];

    return(
      <ResponsiveContainer height={150} width={300}>
										<PieChart>
											<Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" 	outerRadius={32} label >
											{
												data.map((entry, index) => (<Cell key={`cell-${index}`} fill={colors[index]} />))
											}
											</Pie>
											<Legend iconSize={10} iconType="star" layout="vertical" verticalAlign="top" align="center" />
											<Tooltip />
									</PieChart>
								</ResponsiveContainer>)
  };
}

export default RSVPChart;