import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Parent from "./components/Parent"
import Table from './components/Table'

const arrayNew = [
  {
    id: 1,
    fname: "Suleman",
    lname: "Jamali",
    age: 24,
  },
  {
    id: 2,
    fname: "Izaan",
    lname: "Arain",
    age: 23,
  },
  {
    id: 3,
    fname: "Kashan",
    lname: "Unjaan",
    age: 25,
  }
];



function App() {
  const [data, setData] = useState(arrayNew);

  return (
    <>
     <p>Hello</p>
      <Parent/>
      <Table table_data={data} name="ali"/>
     
    </>
  )
}

export default App
