import { Link, routes } from '@redwoodjs/router'

import Posters from 'src/components/Posters'

export const QUERY = gql`
  query POSTERS {
    posters {
      id
      lon
      lat
      description
      location_type
      date_posted
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No posters yet. '}
      <Link to={routes.newPoster()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ posters }) => {
  return <Posters posters={posters} />
}
