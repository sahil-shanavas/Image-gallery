import React, { useState } from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import './Image.css'

function Image({ image, selectedImage, hoveredImage }) {

    const [imageHover, setImageHover] = useState(null);
    

    const handleClick = (e) => {
        selectedImage(image)
    }

    const handleHover = (e) => {
        setImageHover(image)
    }

    const handleLeave = (e) => {
        setImageHover(null)
    }

    return (
        <div  className='image'>
            <img  onMouseOver={ handleHover } onMouseLeave={ handleLeave }  onClick={ handleClick } src={`${image.url}&w=150&h=90&dpr=2`} />
            {/* {imageHover && 
            <div>
                {image.likes}
                <FavoriteIcon />
            </div>} */}
        </div>
    )
}

export default Image