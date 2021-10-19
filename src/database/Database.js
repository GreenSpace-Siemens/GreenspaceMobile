import React from 'react';

import img from './profile-pic.jpg';
import companyIMG from './twitter.jpeg';

const profile = {
    firstName: 'John',
    lastName: 'Doe',
    occupation: 'Software Engineer',
    company: 'Twitter',
    location: 'San Francisco, CA',
    picture: img,
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
};

const jobs = [
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

export { profile, jobs };
