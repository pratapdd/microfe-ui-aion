import React from 'react';
import { Chrono } from 'react-chrono';
const items = [
  {
    title: '10 May 2019',
    cardTitle: 'User Created',
    cardSubtitle: 'New user',
    cardDetailedText: `user created on this day`,
  },
  {
    title: '25 July 2019',
    cardTitle: 'Ad 1 created',
    cardSubtitle: `New Ad`,
    cardDetailedText: `Ad 1 published and sold`,
  },
  {
    title: '15 Jan 2020',
    cardTitle: 'Ad 2 created',
    cardSubtitle: `New Ad`,
    cardDetailedText: `Ad 2 published and sold`,
  },
];
const Timeline = () => {
  return (
    <div className="flex flex-col items-center bg-white">
      <div>
        <h1>Timeline Timeline</h1>
      </div>
      <div
        className="flex items-center"
        style={{ width: '600px', height: '380px', position: 'relative' }}
      >
        <Chrono items={items} mode="HORIZONTAL" />
      </div>
    </div>
  );
};

export default Timeline;
