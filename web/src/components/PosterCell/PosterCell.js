import Poster from 'src/components/Poster'

export const QUERY = gql`
  query FIND_POSTER_BY_ID($id: String!) {
    poster: poster(id: $id) {
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

export const Empty = () => <div>Poster not found</div>

export const Success = ({ poster }) => {
  return <Poster poster={poster} />
}
