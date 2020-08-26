import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import PosterForm from 'src/components/PosterForm'

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
const UPDATE_POSTER_MUTATION = gql`
  mutation UpdatePosterMutation($id: String!, $input: UpdatePosterInput!) {
    updatePoster(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ poster }) => {
  const { addMessage } = useFlash()
  const [updatePoster, { loading, error }] = useMutation(
    UPDATE_POSTER_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.posters())
        addMessage('Poster updated.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input, id) => {
    updatePoster({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Poster {poster.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <PosterForm
          poster={poster}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
