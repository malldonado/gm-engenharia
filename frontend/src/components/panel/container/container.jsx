import React from 'react';
import HashLoader from 'react-spinners/HashLoader';
import useContainer from '../../../hooks/panel/useContainer';

function Container() {

  const { loading, renderPanel } = useContainer();

  return (
    <div className="md:w-[80%] w-full">
      <div className="flex mt-[13px] w-full">
        <div className="w-full h-full">
            <div className={`flex justify-center items-center h-[350px] w-full overflow-hidden ${loading ? '' : 'hidden'}`}>
              <HashLoader color="#000000" size={100} />
            </div>
          <div className={`${loading ? 'hidden' : ''}`}>
            {renderPanel()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
