import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1>My Weekly Time Table</h1>

      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>7:10 - 8:50</th>
            <th>9:20 - 11:00</th>
            <th>11:10 - 12:50</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Monday</td>
            <td>DDCA</td>
            <td>DSA</td>
            <td>FEDFUI</td>
          </tr>

          <tr>
            <td>Tuesday</td>
            <td>MATHS</td>
            <td>DSA</td>
            <td>FEDFUI</td>
          </tr>

          <tr>
            <td>Wednesday</td>
            <td>DSA</td>
            <td>DDCA</td>
            <td>CSE</td>
          </tr>

          <tr>
            <td>Thursday</td>
            <td>DSA</td>
            <td>DDCA</td>
            <td>CSE</td>
          </tr>

          <tr>
            <td>Friday</td>
            <td>MATHS</td>
            <td>FEDFUI</td>
            <td>CSE</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>MATHS</td>
            <td>FEDFUI</td>
            <td>CSE</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App
