import { FormControl, Grid, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React, { useId, useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { v4 as uuid } from 'uuid';


const Form = () => {
    const unique_id = uuid();
    const [listItem, setListItem] = useState([
    ])
    const [task, setTask] = useState("")
    

    const handleChange = (event) => {
        let newtask = event.target.value
        setTask(newtask)
    }
    let nextId = 3;
    const handleClick = () => {
        if (task === "") {
            alert('add a task')
        }
        else {
            let newListItems = [...listItem, { id: nextId++, task: task }]

            setTask("")
            setListItem(newListItems)

        }
    }
    function deleteItem(task) {
        let updatedList = listItem.filter((item) => { return item.task !== task });

        setListItem(updatedList);
    }
    return (
        <div className="d-flex justify-content-center align-items-center py-5">
            <FormControl>
                <Grid container spacing={1}>
                    <Grid item xs={8}>
                        <TextField onChange={handleChange} value={task}></TextField>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="contained" className='py-lg-3 py-3' onClick={handleClick}>ADD LIST</Button>
                    </Grid>
                </Grid>
                {listItem && (
                    <List
                        sx={{
                            width: '100%', maxWidth: 660,
                            bgcolor: 'background.paper'
                        }} className='shadow-sm mt-3'>
                        {listItem.map((items) => {
                            console.log(items.unique_id);
                            return (
                                <ListItem key={items.id} onClick={() => deleteItem(items.task)} className='d-flex justify-content-between align-items-center'>
                                    <ListItemText primary={items.task} style={{flexBasis: '75%'}}/>
                                    <ListItemButton className=' d-flex justify-content-end' style={{flexBasis: '25%'}} >
                                        <div role="img" aria-label="remove" className='d-block'>
                                            ❌
                                        </div>
                                    </ListItemButton>
                                </ListItem>
                            )
                        })}
                    </List>
                )}
            </FormControl>

        </div>
    )
}

export default Form
