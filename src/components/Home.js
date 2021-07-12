import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import * as action from '../Store/Action'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { v4 as uuid } from "uuid";
const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
    display: 'flex',
    //flexWrap:'wrap',
    margin: '100px auto',
    padding: '10px',
  },
  InputArea: {
    width: '100%',
    borderRadius: '5px',
    boxShadow: '0px 0px 5px 1px #ccc',
    margin: '6px',
    padding: '13px'
  },
  editBtn: {
    width: '100%',
    color: 'brown',
    backgroundColor: 'green',
    padding: '13px',
    margin: '20px auto',
  },
  Containent: {
    width: '100%',
    margin: '6px',
    padding: '10px',
    boxShadow: '-1px -1px 0px 0px #ccc',
  },
  InputField: {
    width: '100%'
  },
  addText: {
    width: '100%',
    margin: '20px auto',
    padding: '13px'
  },
  CardBox: {
    margin: '5px'
  }
}));

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const mainData = useSelector(state => state.StudentData.StudentList)
  const maineditData = useSelector(state => state.StudentData.EditDATA)
  const [stuData, setStuData] = useState(null)
  const [editData, setEditData] = useState({
    stuData: '',
    id: ''
  })
  const onchangeHandle = (e) => {
    setStuData(e.target.value)
  }
  const onEditChange = e => {
    setEditData(e.target.value)
  }
  const onclickHandle = () => {
    dispatch(action.Addstudent({
      stuData,
      id: uuid()
    }))
  }
  const deleteHandle = (id) => {
    dispatch(action.RemoveID(id))
  }
  const EditHandle = (id) => {
    dispatch(action.EditData(id))
  }
  const onUpdateHandle = (id) => {
    dispatch(action.updateData({
      editData,
      id
    }))
  }
  useEffect(() => {
    if (maineditData != null) {
      setEditData({
        ...maineditData,
        stuData: maineditData?.stuData,
      })
    }
  }, [maineditData])

  return (
    <div className={classes.root}>
      <div className={classes.InputArea}>
        <Typography gutterBottom variant="h5" component="h2">
          Add Here
        </Typography>
        <TextField id="outlined-basic" label="Write somthing..." variant="outlined" onChange={onchangeHandle} className={classes.InputField} />
        <br />
        <Button className={classes.addText} variant="contained" color="primary" onClick={onclickHandle}>Add Comment <AddCircleIcon /></Button>
        <br />
        <br />
        <br />
        <br />
        <Typography gutterBottom variant="h5" component="h2">
          Edit Here
        </Typography>
        <TextField id="outlined-basic" value={editData?.stuData} name="updateval" variant="outlined" onChange={onEditChange} className={classes.InputField} />
        <Button className={classes.addText} variant="contained" className={classes.editBtn} onClick={() => onUpdateHandle(maineditData?.id)}>Comment Update</Button>
      </div>

      <div className={classes.Containent}>
        <Card className={classes.CardBox}>
          <CardActionArea >
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Your title GOES HERE
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except AntarcticaLorem Ipsum is simply dummy text of the printing and typesetting
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <EditIcon />
            <DeleteIcon />
          </CardActions>
        </Card>
        {
          mainData?.map((data, index) => {
            return <Card className={classes.CardBox} key={data.id}>
              <CardActionArea >
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    comment...{index + 1}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {data.stuData}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <EditIcon onClick={() => EditHandle(data.id)} />
                <DeleteIcon onClick={() => deleteHandle(data.id)} />
              </CardActions>
            </Card>
          })
        }
      </div>
    </div>
  )
}
export default Home;