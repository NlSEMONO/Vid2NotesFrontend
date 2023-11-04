'use client'

import {useState} from 'react'

const HOST = 'http://localhost:8000';

const SubmitLink = () => {
    const containerSettings = 'mt-10 w-7/12 m-auto flex justify-between';
    const fieldSettings = 'w-7/12 h-10 border-2';
    const btnSettings = 'border p-2 px-8 bg-main h-10 text-white';
    const [notes, setNotes] = useState<string[]>([]);
    const [link, setLink] = useState<string>('default');

    const handleClick = () => {
        if (link === 'default') {
            window.alert('Invalid Link');
            return;
        }
        fetch(`${HOST}/get-notes?=${link}`).then(
            res => res.json()
        ).then(
            data => setNotes(data)
        )
    }
    return (
        <div className={`${containerSettings}`}>
            <input type='text' className={`${fieldSettings}`} onChange={e => setLink(e.target.value)} placeholder='Paste Link to Video here!'/>
            <button className={`${btnSettings}`} onClick={() => handleClick()}> GIVE ME MY NOTES!!! </button>
        </div>
    );
}

export default SubmitLink