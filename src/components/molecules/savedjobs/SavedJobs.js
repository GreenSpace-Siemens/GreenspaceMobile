import React from 'react';
import { ScrollView } from 'native-base';
import SwipeItem from '../../atoms/swipeitem/SwipeItem';

function SavedJobs() {
    const data = [
        {
            id: 1,
            avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            header: 'Header Name',
            subheader: 'This is a subheader',
        },
        {
            id: 2,
            avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            header: 'Header Name',
            subheader: 'This is a subheader',
        },
        {
            id: 3,
            avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            header: 'Header Name',
            subheader: 'This is a subheader',
        },
        {
            id: 4,
            avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            header: 'Header Name',
            subheader: 'This is a subheader',
        },
        {
            id: 5,
            avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            header: 'Header Name',
            subheader: 'This is a subheader',
        },
        {
            id: 6,
            avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            header: 'Header Name',
            subheader: 'This is a subheader',
        },
        {
            id: 7,
            avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            header: 'Header Name',
            subheader: 'This is a subheader',
        },
        {
            id: 8,
            avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            header: 'Header Name',
            subheader: 'This is a subheader',
        },
        {
            id: 9,
            avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            header: 'Header Name',
            subheader: 'This is a subheader',
        },
        {
            id: 10,
            avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            header: 'Header Name',
            subheader: 'This is a subheader',
        },
    ];

    return (
        <ScrollView style={{ height: '100%', backgroundColor: '#ffffff' }}>
            {data.map(({ id, avatar, header, subheader }) => {
                return (
                    <SwipeItem
                        key={id}
                        avatar={avatar}
                        header={header}
                        subheader={subheader}
                    />
                );
            })}
        </ScrollView>
    );
}

export default SavedJobs;
