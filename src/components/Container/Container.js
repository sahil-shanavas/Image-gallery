import React, { useState } from 'react'
import Image from '../Image/Image'
import './Container.css'
import ErrorIcon from '@material-ui/icons/Error';

function Container({ images, selectedImage, hoveredImage }) {


    return (
        <div className='body'>
            <div className='cover__image'>
                <img src='https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMTd8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'/>
            </div>
            {(images.length > 6) ?
            <div className='image__container'>
            {images.map((image) => 
                <Image image={ image } hoveredImage={ hoveredImage } selectedImage={ selectedImage }/>
            )}
            </div> : 
            <div className='error'>
                <ErrorIcon />
                <div>
                    <h1>No search results! :(</h1>
                </div>
            </div>
            } 
                
        </div>
    )
}

export default Container
