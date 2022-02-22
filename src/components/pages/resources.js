import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './resources.css'
import { Link } from 'react-router-dom'
import * as GrIcons from 'react-icons/gr'
import * as AiIcons from 'react-icons/ai'
import * as MdIcons from 'react-icons/md'


const Resources = () => {
    const [resources, setResources] = useState([]);

    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3030/resources")
        setResources(result.data.reverse())
    }

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3030/resources/${id}`);
        loadUsers()
    }


    const edit_btn = {
      marginRight:"15px"
  }

    const delete_btn = {
      marginRight:"-130px",
      marginLeft:"15px"
  }

  const conx = {
    width: "20px"
  }

  const sys = {
    width: "12px"
  }

  const hdd = {
      width: "20px"
  }

  const act = {
      width: "30px"
  }

  const tst = {
    backgroundColor: "#125cbd"
  }

  const tbl = {
    border: "1px solid #ffffff"
  }

    return (
        <div>
            
            <Link className='add_user' to='/resources/add'><GrIcons.GrAdd /></Link>
            <div class="table_responsive" style={tbl}>
                <table>
                    <thead style={tst}>
                        <tr>
                            <th style={hdd}>Sl No.</th>
                            <th style={sys}>System</th>
                            <th style={conx}>Connectivity</th>
                            <th style={act}>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {resources.map((resources, index) => (
                            <tr>
                                <th>{index + 1}</th>
                                <td>{resources.system}</td>
                                <td>{resources.connectivity}</td>
                                <td>
                                    <Link className='action_btn_edit' style={edit_btn} to={`/resources/edit/${resources.id}`} ><AiIcons.AiFillEdit/></Link>
                                    <Link className='action_btn_delete' style={delete_btn} onClick={() => deleteUser(resources.id)}><MdIcons.MdDelete/></Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Resources