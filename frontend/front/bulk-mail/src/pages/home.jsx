import Mail from '../components/mail'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <Mail />
    </>
  )
}

export default Home
