import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Home.css'
import { Link } from 'react-router-dom'
import * as GrIcons from 'react-icons/gr'
import * as AiIcons from 'react-icons/ai'
import * as MdIcons from 'react-icons/md'


const Trainer = () => {
    const [trainer, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3030/trainer")
        setUser(result.data.reverse())
    }

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3030/trainer/${id}`);
        loadUsers()
    }

    const edit_btn = {
      marginRight:"15px"
  }

    const delete_btn = {
      marginRight:"-50px",
      marginLeft:"15px"
  }
  const tst = {
    backgroundColor: "#125cbd"
  }

  const tbl = {
    border: "1px solid #ffffff"
  }

    return (
        <div>
            
            <Link className='add_user' to='/trainer/add'><GrIcons.GrAdd /></Link>
            <div class="table_responsive" style={tbl}>
                <table>
                    <thead style={tst}>
                        <tr>
                            <th>Sl No.</th>
                            <th>Trainer Name</th>
                            <th>Trainer Email</th>
                            <th>Subject</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {trainer.map((trainer, index) => (
                            <tr>
                                <th>{index + 1}</th>
                                <td>{trainer.name}</td>
                                <td>{trainer.email}</td>
                                <td>{trainer.subject}</td>
                                <td>
                                    <Link className='action_btn_edit' style={edit_btn} to={`/trainer/edit/${trainer.id}`}><AiIcons.AiFillEdit/></Link>
                                    <Link className='action_btn_delete' style={delete_btn} onClick={() => deleteUser(trainer.id)}><MdIcons.MdDelete/></Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Trainer