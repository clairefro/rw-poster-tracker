import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import PosterForm from 'src/components/PosterForm'

const CREATE_POSTER_MUTATION = gql`
  mutation CreatePosterMutation($input: CreatePosterInput!) {
    createPoster(input: $input) {
      id
    }
  }
`

const NewPoster = () => {
  const { addMessage } = useFlash()
  const [createPoster, { loading, error }] = useMutation(
    CREATE_POSTER_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.posters())
        addMessage('Poster created.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input) => {
    createPoster({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Poster</h2>
      </header>
      <div className="rw-segment-main">
        <PosterForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPoster
