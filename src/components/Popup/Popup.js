import React from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddIcon from '@material-ui/icons/Add';
import './Popup.css'

function Popup({ imagepop, selectedImage }) {


    //event handler function for checking whether the user clicks apart from the popup image and then updates the state of selectedImage
    const handleClick = (e) => {
        if(e.target.classList.contains('popup')) {
            selectedImage(null)
        }
    }

    return (
        <div onClick={ handleClick }className='popup'>
            <div className='image__card'>
                <div className='image__card__header'>
                    <div className='image__card__author'>
                        <IconButton>
                            <Avatar />
                        </IconButton>
                        <div className='info'>
                            <p>{imagepop.author}</p>
                            <p className='username'>@{imagepop.username}</p>
                        </div>
                    </div>
                    <div>
                        <span>{imagepop.likes}</span>
                        <IconButton>
                            <FavoriteBorderIcon />
                        </IconButton>
                        <IconButton>
                            <AddIcon />
                        </IconButton>
                    </div>
                </div>
                   <img src={`${imagepop.url}&w=500&h=900&dpr=2`} alt=''/>
                   <p>{imagepop.description}</p>
                { (imagepop.tags.length > 0) &&
                     <div className='image__card__footer'>
                        <div>
                            {imagepop.tags.map((tag) => <span>{tag.title}</span>)}
                        </div>
                        <p>Related tags</p>
                    </div>
}
            </div>
        </div>
    )
}

export default Popup
