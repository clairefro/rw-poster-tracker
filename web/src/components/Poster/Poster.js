import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_POSTER_MUTATION = gql`
  mutation DeletePosterMutation($id: String!) {
    deletePoster(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Poster = ({ poster }) => {
  const { addMessage } = useFlash()
  const [deletePoster] = useMutation(DELETE_POSTER_MUTATION, {
    onCompleted: () => {
      navigate(routes.posters())
      addMessage('Poster deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete poster ' + id + '?')) {
      deletePoster({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Poster {poster.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{poster.id}</td>
            </tr>
            <tr>
              <th>Lon</th>
              <td>{poster.lon}</td>
            </tr>
            <tr>
              <th>Lat</th>
              <td>{poster.lat}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{poster.description}</td>
            </tr>
            <tr>
              <th>Location type</th>
              <td>{poster.location_type}</td>
            </tr>
            <tr>
              <th>Date posted</th>
              <td>{timeTag(poster.date_posted)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editPoster({ id: poster.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(poster.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Poster
