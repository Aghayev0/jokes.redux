import React from 'react'
import Navbar from 'components/navbar/navbar'
import { useSelector } from 'react-redux';
const Liked = () => {
  const jokes = useSelector((state) => state.jokes);
  console.log(jokes);
  return (
    <React.Fragment>
      <Navbar />
      <div className='stol'>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Jokes</th>
            </tr>
          </thead>
          <tbody>
            {jokes &&
              jokes.map((joke,index) => (
                <tr key={index}>
                  <th>{index}</th>
                  <td>{joke.value}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  )
}

export default Liked