import  Axios  from 'axios';
import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';
import './AddTrainer.css'
const AddTrainer = () => {
    let history = useHistory()
    const [trainer, setTrainer] = useState({
        name: "",
        email: "",
        subject: ""
    })


    const {name, email, subject} = trainer;
    const onInputChange = e => {
        setTrainer({...trainer,[e.target.name]:e.target.value})
    };

    const onSubmit = async e => {
        e.preventDefault();
        await Axios.post("http://localhost:3030/trainer", trainer);
        history.push("/trainer")
    }

    return (
        <form onSubmit={e=>onSubmit(e)}>
        <div class="form">
            <div class="title">Add Trainer</div>
            <div class="input-container ic1">
                <input id="name" class="input" type="text" placeholder=" " name='name' value={name} onChange={e => onInputChange(e)} />
                <div class="cut"></div>
                <label for="Name" class="placeholder">Name</label>
            </div>
            <div class="input-container ic2">
                <input id="email" class="input" type="text" placeholder=" " name='email' value={email} onChange={e => onInputChange(e)}/>
                <div class="cut cut-short"></div>
                <label for="email" class="placeholder">Email</label>
            </div>
            <div class="input-container ic2">
                <input id="subject" class="input" type="text" placeholder=" " name='subject' value={subject} onChange={e => onInputChange(e)}/>
                <div class="cut"></div>
                <label for="subject" class="placeholder">subject</label>
            </div>
            <button type="text" class="submit">Add Trainer</button>
        </div>
        </form>
    )
}

export default AddTrainer;