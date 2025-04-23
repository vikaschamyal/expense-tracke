import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const Balance = () => {
  const { balance } = useContext(GlobalContext)
  return (
    <div className="card">
      <h4>Your Balance</h4>
      <h1>${balance}</h1>
    </div>
  )
}

export default Balance