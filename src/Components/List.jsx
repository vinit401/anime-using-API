import React, { useEffect } from 'react'
import Card from './Card'
import axios from 'axios'
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const List = () => {
  const [Anime, setAnime] = useState([]);

  const {id} = useParams()

     const fetch = async () => {
          const data = await axios.get(`https://api.jikan.moe/v4/top/${id?id:"anime"}`);
          setAnime(data.data.data);

     };

     useEffect(() => {
          fetch();
     }, [id]);

  return (
    <div className='cards'>
      {Anime?.map((naruto) =>(
        <Card all={naruto}/>
      ))}
    </div>
  )
}

export default List
