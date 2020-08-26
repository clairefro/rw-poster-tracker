import PostersLayout from 'src/layouts/PostersLayout'
import EditPosterCell from 'src/components/EditPosterCell'

const EditPosterPage = ({ id }) => {
  return (
    <PostersLayout>
      <EditPosterCell id={id} />
    </PostersLayout>
  )
}

export default EditPosterPage
