import  Axios  from 'axios';
import React, {useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom';
import './AddCurriculum.css'
const EditCurriculum = () => {
    let history = useHistory();
    const { id } = useParams();
    const [curriculum, setCurriculum] = useState({
        training_for: "",
        prerequisite: "",
        resources: "",
        start_date: "",
        end_date: "",
        start_time:"",
        end_time:"",
        mode_of_training: "",
        attendees: "",
        trainer_name:""
    })


    const {training_for, prerequisite, resources, start_date, end_date, start_time, end_time, mode_of_training, attendees, trainer_name} = curriculum;
    const onInputChange = e => {
        setCurriculum({...curriculum,[e.target.name]:e.target.value})
    };

    useEffect(() => {
        loadUser()
    }, [])

    const onSubmit = async e => {
        e.preventDefault();
        await Axios.put(`http://localhost:3030/curriculum/${id}`, curriculum);
        history.push("/curriculum")
    }

    const loadUser = async () => {
        const result = await Axios.get(`http://localhost:3030/curriculum/${id}`)
        setCurriculum(result.data)
    }

    return (
        <form onSubmit={e=>onSubmit(e)}>
        <div class="form">
            <div class="title">Edit Curriculum</div>
            <div class="input-container ic1">
                    <input id="name" class="input" type="text" placeholder=" " name='training_for' value={training_for} onChange={e => onInputChange(e)} />
                    <div class="cut"></div>
                    <label for="Name" class="placeholder">Training For</label>
                </div>
                <div class="input-container ic2">
                    <input id="prerequisite" class="input" type="text" placeholder=" " name='prerequisite' value={prerequisite} onChange={e => onInputChange(e)} />
                    <div class="cut"></div>
                    <label for="prerequisite" class="placeholder">Prerequisite</label>
                </div>
                <div class="input-container ic2">
                    <input id="resources" class="input" type="text" placeholder=" " name='resources' value={resources} onChange={e => onInputChange(e)} />
                    <div class="cut cut-short"></div>
                    <label for="resources" class="placeholder">Resources</label>
                </div>
                <div class="input-container ic2">
                    <input id="start_date" class="input" type="date" placeholder=" " name='start_date' value={start_date} onChange={e => onInputChange(e)} />
                    <div class="cut cut-short"></div>
                    <label for="start_date" class="placeholder">Start Date</label>
                </div>
                <div class="input-container ic2">
                    <input id="end_date" class="input" type="date" placeholder=" " name='end_date' value={end_date} onChange={e => onInputChange(e)} />
                    <div class="cut cut-short"></div>
                    <label for="end_date" class="placeholder">End Date</label>
                </div>
                <div class="input-container ic2">
                    <input id="start_time" class="input" type="time" placeholder=" " name='start_time' value={start_time} onChange={e => onInputChange(e)} />
                    <div class="cut cut-short"></div>
                    <label for="start_time" class="placeholder">Start Time</label>
                </div>
                <div class="input-container ic2">
                    <input id="end_time" class="input" type="time" placeholder=" " name='end_time' value={end_time} onChange={e => onInputChange(e)} />
                    <div class="cut cut-short"></div>
                    <label for="end_time" class="placeholder">End Time</label>
                </div>
                <div class="input-container ic2">
                    <input id="mode_of_training" class="input" type="text" placeholder=" " name='mode_of_training' value={mode_of_training} onChange={e => onInputChange(e)} />
                    <div class="cut cut-short"></div>
                    <label for="mode_of_training" class="placeholder">Mode of Training</label>
                </div>
                <div class="input-container ic2">
                    <input id="attendees" class="input" type="text" placeholder=" " name='attendees' value={attendees} onChange={e => onInputChange(e)} />
                    <div class="cut cut-short"></div>
                    <label for="attendees" class="placeholder">Attendees</label>
                </div>
                <div class="input-container ic2">
                    <input id="trainer_name" class="input" type="text" placeholder=" " name='trainer_name' value={trainer_name} onChange={e => onInputChange(e)} />
                    <div class="cut cut-short"></div>
                    <label for="trainer_name" class="placeholder">Trainer Name</label>
                </div>
            <button type="text" class="submit">Update audience</button>
        </div>
        </form>
    )
}

export default EditCurriculum;