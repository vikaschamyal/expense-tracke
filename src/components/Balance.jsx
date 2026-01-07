import { useContext, useState, useCallback } from 'react'
import { GlobalContext } from '../context/GlobalContext'

// adjust paths if needed
import Modal from '../components/ui/Modal'
import Button from '../components/ui/Button'
import AddTransaction from '../components/AddTransaction'

const Balance = () => {
  const { balance } = useContext(GlobalContext)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = useCallback(() => setIsModalOpen(true), [])
  const closeModal = useCallback(() => setIsModalOpen(false), [])

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl shadow-lg p-8 flex flex-col items-center justify-center space-y-6">
      <h4 className="text-lg font-medium opacity-90 tracking-wide">
        Your Balance
      </h4>

      <h1 className="text-5xl font-extrabold">₹ {balance}</h1>

      <Button
        onClick={openModal}
        className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
      >
        Add Transaction
      </Button>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Add Transaction"
      >
        <AddTransaction onClose={closeModal} />
      </Modal>
    </div>
  )
}

export default Balance
