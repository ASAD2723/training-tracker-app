import  Axios  from 'axios';
import React, {useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom';
import './AddUser.css'
const EditUser = () => {
    let history = useHistory();
    const { id } = useParams();
    const [user, setUser] = useState({
        Name: "",
        audience: "",
        email: ""
    })


    const {Name, audience, email} = user;
    const onInputChange = e => {
        setUser({...user,[e.target.name]:e.target.value})
    };

    useEffect(() => {
        loadUser()
    }, [])

    const onSubmit = async e => {
        e.preventDefault();
        await Axios.put(`http://localhost:3030/users/${id}`, user);
        history.push("/")
    }

    const loadUser = async () => {
        const result = await Axios.get(`http://localhost:3030/users/${id}`)
        setUser(result.data)
    }

    return (
        <form onSubmit={e=>onSubmit(e)}>
        <div class="form">
            <div class="title">Edit audience</div>
            <div class="input-container ic1">
                <input id="name" class="input" type="text" placeholder=" " name='Name' value={Name} onChange={e => onInputChange(e)} />
                <div class="cut"></div>
                <label for="Name" class="placeholder">Name</label>
            </div>
            <div class="input-container ic2">
                <input id="audience" class="input" type="text" placeholder=" " name='audience' value={audience} onChange={e => onInputChange(e)}/>
                <div class="cut"></div>
                <label for="audience" class="placeholder">audience</label>
            </div>
            <div class="input-container ic2">
                <input id="email" class="input" type="text" placeholder=" " name='email' value={email} onChange={e => onInputChange(e)}/>
                <div class="cut cut-short"></div>
                <label for="email" class="placeholder">Email</label>
            </div>
            <button type="text" class="submit">Update audience</button>
        </div>
        </form>
    )
}

export default EditUser;