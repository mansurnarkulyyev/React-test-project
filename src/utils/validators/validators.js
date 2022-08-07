import React from 'react'

export const required = (value) => {
    if (value) return undefined;
    return (
        <div>
            <p>Field is required</p>
        </div>
    )
};

export const maxLengthCreator = (maxLength ) => (value) => {
     if (value && value.length > maxLength ) return `Max length is ${maxLength} symbol`;
  
    return undefined;
}




