import React, { useState } from 'react'
import Caresoul from '../component/caresoul'

const Home = () => {
  const [allImage,setAllImage] = useState([
    "https://cdn.marvel.com/u/prod/marvel/images/OpenGraph-TW-1200x630.jpg",
    "https://wallpapers.com/images/featured/marvel-bte9zcsa9pvyzpvk.jpg",
    "https://cf-images.us-east-1.prod.boltdns.net/v1/static/5359769168001/ceeb8254-83b7-4ff0-84fd-7d1c1b6ebe81/5e1649aa-a7a0-4be1-9ae6-a4c42a4fc0b0/1280x720/match/image.jpg"
  ])
  return (
    <div>
      <Caresoul allImage={allImage} currentIndex={1} />
    </div>
  )
}

export default Home
