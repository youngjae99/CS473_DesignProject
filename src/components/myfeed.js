import React from 'react';
import { List, Card } from 'antd';

const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 5',
  },
  {
    title: 'Title 6',
  },
];

class MyFeed extends React.Component{
    render(){
        return(
            <List
            grid={{
            column: 3,
            gutter: 16,
            // xs: 1,
            // sm: 2,
            // md: 4,
            // lg: 4,
            // xl: 6,
            // xxl: 3,
            }}
            dataSource={data}
            renderItem={item => (
            <List.Item>
                <Card title={item.title}>Card content</Card>
            </List.Item>
            )}
        />
        )
    }
}

export default MyFeed;