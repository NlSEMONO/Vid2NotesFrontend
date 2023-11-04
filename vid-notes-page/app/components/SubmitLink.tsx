'use client'

import React from 'react'

const SubmitLink = () => {
    const containerSettings = 'mt-10 w-9/12 m-auto flex justify-between';
    const btnSettings = 'border p-2 px-8';
    return (
        <div className={`${containerSettings}`}>
            <div className={``}>SubmitLink</div>
            <button className={`${btnSettings}`}> GIVE ME MY NOTES!!! </button>
        </div>
    )
}

export default SubmitLink