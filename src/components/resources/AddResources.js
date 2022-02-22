import Axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import './AddResources.css'
const AddResources = () => {
    let history = useHistory()
    const [resources, setResources] = useState({
        system: "",
        connectivity: "",
    })


    const { system, connectivity } = resources;
    const onInputChange = e => {
        setResources({ ...resources, [e.target.name]: e.target.value })
    };

    const onSubmit = async e => {
        e.preventDefault();
        await Axios.post("http://localhost:3030/resources", resources);
        history.push("/resources")
    }

    return (
        <form onSubmit={e => onSubmit(e)}>
            <div class="form">
                <div class="title">Add Resources</div>
                <div class="input-container ic1">
                    <input id="system" class="input" type="text" placeholder=" " name='system' value={system} onChange={e => onInputChange(e)} />
                    <div class="cut"></div>
                    <label for="system" class="placeholder">system</label>
                </div>
                <div class="input-container ic2">
                    <input id="connectivity" class="input" type="text" placeholder=" " name='connectivity' value={connectivity} onChange={e => onInputChange(e)} />
                    <div class="cut"></div>
                    <label for="connectivity" class="placeholder">connectivity</label>
                </div>
                {/* <div class="input-container ic2">
                    <select class="input-container ic2">
                        <option type="text" name='test' value={test}>BroadBand</option>
                        <option type="text" name='test' value={test}>Wifi</option>
                        <option type="text" name='test' value={test}>Mobile connectivity</option>
                    </select>
                    <div class="cut"></div>
                    <label for="test" class="placeholder">connectivity</label>
                </div> */}
                <button type="text" class="submit">Add Resources</button>
            </div>
        </form>
    )
}

export default AddResources;