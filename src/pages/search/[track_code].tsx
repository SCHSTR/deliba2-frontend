import { useRouter } from 'next/router'
import Navbar from '../../components/navbar'
import { Container } from '../../styles/global'

const Search = () => {
  const router = useRouter()
  const { track_code } = router.query

  return (
    <>
      <Navbar />
      <Container>
        <p>Post: {track_code}</p>
        <button>aaa</button>
      </Container>
    </>
  )
}

export default Search