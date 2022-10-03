import React, { Suspense, lazy, useState } from 'react';
import Add from './../assets/icons/add.svg';
import Subtract from './../assets/icons/subtract.svg';

const TimelineLazy = lazy(() => import('../pages/TimelineApp'));

const Workstation = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex flex-col items-center bg-white">
      <div className="w-full p-4 mb-2 border-b-2 border-gray-200">
        <h1 className="">Agent Workstation</h1>
      </div>
      <hr />
      <Suspense fallback={<h1>Loading Timeline App...</h1>}>
        <div className="w-full pl-4 pr-6 cursor-pointer">
          <div
            className="flex flex-row justify-between"
            onClick={() => setToggle(!toggle)}
          >
            <div>Timeline APP UI</div>
            <div>
              {toggle && <Subtract />}
              {!toggle && <Add />}
            </div>
          </div>
          {toggle && <TimelineLazy />}
        </div>
      </Suspense>
      <div className="w-full p-10 mt-4 border-t-2 border-gray-100">
      Agent Interaction List
      </div>
    </div>
  );
};

export default Workstation;
