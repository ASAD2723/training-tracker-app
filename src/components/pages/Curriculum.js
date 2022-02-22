import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Curriculum.css'
import * as GrIcons from 'react-icons/gr'
import * as AiIcons from 'react-icons/ai'
import * as MdIcons from 'react-icons/md'
import { Link } from 'react-router-dom'

const Curriculum = () => {
    const [curriculum, setCurriculum] = useState([]);

    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3030/curriculum")
        setCurriculum(result.data.reverse())
    }

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3030/curriculum/${id}`);
        loadUsers()
    }

    const edit_btn = {
        marginRight:"15px"
    }

    
    const tbl = {
        maxWidth: "1500px",
        border: "1px solid #ffffff"
    }

    const tst = {
        backgroundColor: "#125cbd"
      }

    

    return (
        <div>
            
            <Link className='add_user' to='/curriculum/add'><GrIcons.GrAdd /></Link>
            <div class="table_responsive" style={tbl}>
                <table>
                    <thead style={tst}>
                        <tr>
                            <th>Sl No.</th>
                            <th>Audience</th>
                            <th>Prerequisite</th>
                            <th>Resources</th>
                            <th>Start date</th>
                            <th>End date</th>
                            <th>Start time</th>
                            <th>End time</th>
                            <th>Mode of training</th>
                            <th>Attendees</th>
                            <th>Trainer Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {curriculum.map((curriculum, index) => (
                            <tr>
                                <th>{index + 1}</th>
                                <td>{curriculum.training_for}</td>
                                <td>{curriculum.prerequisite}</td>
                                <td>{curriculum.resources}</td>
                                <td>{curriculum.start_date}</td>
                                <td>{curriculum.end_date}</td>
                                <td>{curriculum.start_time}</td>
                                <td>{curriculum.end_time}</td>
                                <td>{curriculum.mode_of_training}</td>
                                <td>{curriculum.attendees}</td>                               
                                <td>{curriculum.trainer_name}</td>                               
                                <td>
                                    <Link className='action_btn_edit' style={edit_btn} to={`/curriculum/edit/${curriculum.id}`} ><AiIcons.AiFillEdit/></Link>
                                    <Link className='action_btn_delete' onClick={() => deleteUser(curriculum.id)}><MdIcons.MdDelete/></Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Curriculum