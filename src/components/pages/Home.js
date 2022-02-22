import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Home.css'
import * as GrIcons from 'react-icons/gr'
import * as AiIcons from 'react-icons/ai'
import * as MdIcons from 'react-icons/md'
import { Link } from 'react-router-dom'

const Home = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3030/users")
        setUser(result.data.reverse())
    }

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3030/users/${id}`);
        loadUsers()
    }

    const edit_btn = {
        marginRight:"15px"
    }

    const delete_btn = {
        marginRight:"-50px",
        marginLeft:"15px"
    }

    const btn_item = {
        alignItems: "center"
    }

    const tst = {
        backgroundColor: "#125cbd"
      }

    const tbl = {
        border: "1px solid #ffffff"
    }



    

return (
    <div>
        <Link className='add_user'  to='/users/add'><GrIcons.GrAdd /></Link>
        <div class="table_responsive" style={tbl}>
            <table>
                <thead style={tst}>
                    <tr>
                        <th>Sl No.</th>
                        <th>Audience Name</th>
                        <th>Audience Type</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user, index) => (
                        <tr>
                            <th>{index + 1}</th>
                            <td>{user.Name}</td>
                            <td>{user.audience}</td>
                            <td>{user.email}</td>
                            <td style={btn_item}>
                                <Link className='action_btn_edit' style={edit_btn} to={`/users/edit/${user.id}`} ><AiIcons.AiFillEdit/> </Link>
                                <Link className='action_btn_delete' style={delete_btn} onClick={() => deleteUser(user.id)}><MdIcons.MdDelete/></Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
)
}

export default Home