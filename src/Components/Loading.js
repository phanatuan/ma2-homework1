import { ClimbingBoxLoader } from 'react-spinners';
import React from 'react';

export const Loading = () => { 
    return (
        <div className = 'container'>
            <h3>I'm Loading Bro, Wait ....  </h3>
            <div className='sweet-loading'>
                <ClimbingBoxLoader
                    sizeUnit={"px"}
                    size={15}
                />
            </div> 
        </div>
        
      );

};