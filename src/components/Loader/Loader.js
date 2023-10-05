import React from 'react'

export default function Loader() {
    return (
        <div className='mt-5 text-center'>
            <div className="spinner-border mt-5 pt-5" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <h4 className='mt-5'>Loading ...</h4>
        </div>
    )
}
