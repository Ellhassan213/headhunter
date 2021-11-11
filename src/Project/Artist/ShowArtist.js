import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../Context'
import NotFound from '../../shared/components/NotFound'

const ShowArtist = () => {
  const { artistId } = useParams()
  const { artistList } = useContext(Context)
  const isArtist = artistList.filter(obj => obj.id.toString() === artistId)
  return (
    <div>
      {isArtist.length > 0 ? <p>{artistId}</p> : <NotFound />}
    </div>
  )
}

export default ShowArtist
