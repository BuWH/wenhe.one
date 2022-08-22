import { useState } from 'react'
import { searchAlbum } from './Album.api'

const Album = () => {
    return (
        <>
            <div> Album </div>
            <button onClick={ () => {searchAlbum("张玮玮")} } > test </button>
        </>
    )
}