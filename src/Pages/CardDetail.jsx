import "../App.css"
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const CardDetail = () => {
  const [Anime, setAnime] = useState(null)
  const { id } = useParams()

  const fetch = async () => {
    try {
      const { data } = await axios.get(`https://api.jikan.moe/v4/anime/${id}`)
      setAnime(data.data)
    } catch (error) {
      console.error("Error fetching anime detail:", error)
    }
  }

  useEffect(() => {
    fetch()
  }, [id])

  if (!Anime) return <div>Loading...</div>

  return (
    <div className='des'>
      <img src={Anime.images.jpg.large_image_url} alt={Anime.title} />
      <h1>{Anime.title}</h1>
      <p><strong>Episodes:</strong> {Anime.episodes || 'N/A'}</p>
      <p><strong>Rating:</strong> {Anime.rating || 'N/A'}</p>
      <p><strong>Synopsis:</strong> {Anime.synopsis || 'No synopsis available.'}</p>
    </div>
  )
}

export default CardDetail
