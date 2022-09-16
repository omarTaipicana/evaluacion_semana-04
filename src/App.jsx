import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UserForm from './components/UserForm'
import { useEffect } from 'react'
import axios from "axios"
import UserList from './components/UserList'
import PopUp from './components/Pop-Up'

function App() {

  const [user, setUser] = useState([])
  const [userSelect, setUserSelect] = useState(null)

  useEffect(() => {
    axios.get(`https://users-crud1.herokuapp.com/users/`)
      .then(res => setUser(res.data))
  }, [])

  const getUser = () => {
    axios.get(`https://users-crud1.herokuapp.com/users/`)
      .then((res) => setUser(res.data));
  };


  const [pop, setPop] = useState(true)
  const popUp = () => {
    setPop(!pop)
    if(!pop){
      deselectUser()      
    }
  }


  const addUser = (data) => {
    axios.post(`https://users-crud1.herokuapp.com/users/`, data)
      .then(() => {
        getUser()
        popUp()
      })
      .catch((error) => console.log(error.response));
  }

  const deleteUser = (id) => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUser())
  }

  const selectUser = (user) => {
    setUserSelect(user)
  }

  const updateUser = (data) => {
    axios.put(`https://users-crud1.herokuapp.com/users/${userSelect.id}/`, data)
    .then(() => {
      getUser()
      popUp()
    })
      .catch((error) => console.log(error.response));
  }

  const deselectUser = () => {
    setUserSelect(null)
  }


  return (
    <div className="App">
      <UserForm
        addUser={addUser}
        userSelect={userSelect}
        updateUser={updateUser}
        deselectUser={deselectUser}
      />
      <UserList
        users={user}
        deleteUser={deleteUser}
        selectUser={selectUser}
      />
      <PopUp 
      pop={pop}
      popUp={popUp}
      userSelect={userSelect}
      />
    </div>
  )
}

export default App
