import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const DELETE_POSTER_MUTATION = gql`
  mutation DeletePosterMutation($id: String!) {
    deletePoster(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const PostersList = ({ posters }) => {
  const { addMessage } = useFlash()
  const [deletePoster] = useMutation(DELETE_POSTER_MUTATION, {
    onCompleted: () => {
      addMessage('Poster deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete poster ' + id + '?')) {
      deletePoster({ variables: { id }, refetchQueries: ['POSTERS'] })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Lon</th>
            <th>Lat</th>
            <th>Description</th>
            <th>Location type</th>
            <th>Date posted</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {posters.map((poster) => (
            <tr key={poster.id}>
              <td>{truncate(poster.id)}</td>
              <td>{truncate(poster.lon)}</td>
              <td>{truncate(poster.lat)}</td>
              <td>{truncate(poster.description)}</td>
              <td>{truncate(poster.location_type)}</td>
              <td>{timeTag(poster.date_posted)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.poster({ id: poster.id })}
                    title={'Show poster ' + poster.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editPoster({ id: poster.id })}
                    title={'Edit poster ' + poster.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete poster ' + poster.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(poster.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PostersList
