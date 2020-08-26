import PostersLayout from 'src/layouts/PostersLayout'
import PosterCell from 'src/components/PosterCell'

const PosterPage = ({ id }) => {
  return (
    <PostersLayout>
      <PosterCell id={id} />
    </PostersLayout>
  )
}

export default PosterPage
