import React from 'react';

import img from './profile-pic.jpg';
import companyIMG from './twitter.jpeg';

export const profile = {
    firstName: 'John',
    lastName: 'Doe',
    occupation: 'Software Engineer',
    company: 'Twitter',
    location: 'San Francisco, CA',
    picture: img,
    education: [
        {
            school: 'Georgia Institute of Technology',
            degreeType: 'M.S.',
            major: 'Software Engineering',
            gpa: '3.9',
            gradDate: '2019',
        },
        {
            school: 'Georgia Institute of Technology',
            degreeType: 'B.S.E.',
            major: 'Software Engineering',
            gpa: '3.8',
            gradDate: '2016',
        },
    ],
};

export const jobs = [
    {
        title: 'Software Engineer II',
        company: 'Twitter',
        location: 'San Francisco, CA',
        picture: companyIMG,
    },
    {
        title: 'Software Engineer Intern',
        company: 'Twitter',
        location: 'Silicon Valley, CA',
        picture: companyIMG,
    },
];
