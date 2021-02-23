import React, { useState, useEffect} from 'react';
import './Searchbar.css';
import { SearchOutlined } from '@material-ui/icons';
import CameraIcon from '@material-ui/icons/Camera';
import { Avatar, IconButton } from '@material-ui/core'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Searchbar({ fetchData }) {

    const [query, setQuery] = useState('');
    const accessKey = process.env.REACT_APP_ACCESSKEY;

    //runs the first time Searchbar component mounts for updating the home page
    useEffect(() => {
        //fetch data from unsplash api
        fetch(`https://api.unsplash.com/search/photos/?per_page=21&query=wanderlust&client_id=${accessKey}`).then((response) => {
            if(response.ok) {
                return response.json()
            } else {
                alert('No results!')
            }
        }).then((jsonResponse) => {
            const data = jsonResponse.results.map((result) => {
                return {
                url: result.urls.raw,
                likes: result.likes,
                author: result.user.name,
                username: result.user.username,
                description: result.alt_description,
                tags: result.tags
            }})
            fetchData(data)
        }).catch((e) => {
            alert('No results!')
        })
    }, [])



    // event handler for listening to when the user submits a search query and fires up the fetch from unsplash API for the given query
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://api.unsplash.com/search/photos/?per_page=28&query=${query}&client_id=${accessKey}&count=21`).then((response) => {
            if(response.ok) {
                return response.json()
            } else {
                alert('No results!')
            }
        }).then((jsonResponse) => {
            const data = jsonResponse.results.map((result) => {
                return {
                url: result.urls.raw,
                likes: result.likes,
                author: result.user.name,
                username: result.user.username,
                tags: result.tags,
                description: result.alt_description
            }})
                fetchData(data)
                console.log(data)
                console.log(jsonResponse)
            })
            setQuery('')
    }

    // handles the change in the user input
    const handleChange = ({ target }) => {
        setQuery(target.value)
    }

    return (
        <div className='navbar'>
            <div className='fixed__searchbar'>
            <div className='searchbar'>
                <SearchOutlined />
                <form onSubmit={handleSubmit}>
                    <input onChange={ handleChange } type='text' placeholder='Search free high resolution photos' value={ query }  ></input>
                    <button>Search</button>
                </form>
            </div>
            <div className='menu'>
                <span>Home</span>
                <span>Brands</span>
                <span><MoreHorizIcon /></span>
                <span className='submit__photo'>Submit a photo</span>
                <span><NotificationsActiveIcon /></span>
                <Avatar />
            </div>
            </div>
            <div className='searchbar__footer'>
                <span>Editorial</span>
                <span>Following</span>
                <span>Wallpapers</span>
                <span>Nature</span>
                <span>People</span>
                <span>Architecture</span>
                <span>Current Events</span>
                <span>Business and Work</span>
            </div>
        </div>
    )
}


export default Searchbar

