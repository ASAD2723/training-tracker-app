import  Axios  from 'axios';
import React, {useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom';
import './AddResources.css'
const EditResources = () => {
    let history = useHistory();
    const { id } = useParams();
    const [resources, setResources] = useState({
        system: "",
        connectivity: ""
    })


    const {system, connectivity} = resources;
    const onInputChange = e => {
        setResources({...resources,[e.target.name]:e.target.value})
    };

    useEffect(() => {
        loadUser()
    }, [])

    const onSubmit = async e => {
        e.preventDefault();
        await Axios.put(`http://localhost:3030/resources/${id}`, resources);
        history.push("/resources")
    }

    const loadUser = async () => {
        const result = await Axios.get(`http://localhost:3030/resources/${id}`)
        setResources(result.data)
    }

    return (
        <form onSubmit={e=>onSubmit(e)}>
        <div class="form">
            <div class="title">Edit resources</div>
            <div class="input-container ic1">
                <input id="system" class="input" type="text" placeholder=" " name='system' value={system} onChange={e => onInputChange(e)} />
                <div class="cut"></div>
                <label for="system" class="placeholder">system</label>
            </div>
            <div class="input-container ic2">
                <input id="connectivity" class="input" type="text" placeholder=" " name='connectivity' value={connectivity} onChange={e => onInputChange(e)}/>
                <div class="cut cut-short"></div>
                <label for="connectivity" class="placeholder">connectivity</label>
            </div>
            <button type="text" class="submit">Update Resources</button>
        </div>
        </form>
    )
}

export default EditResources;