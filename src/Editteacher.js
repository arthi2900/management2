import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
export function Editteacher({ teacherlist, setteacherlist }) {
  const { id } = useParams();
  const history = useHistory();
  console.log(id, teacherlist);
  const teacher1 = teacherlist[id];
  console.log(teacher1);
  const [tname, settname] = useState(teacher1.tname);
  const [tdegree, settdegree] = useState(teacher1.tdegree);
  const [texp, settexp] = useState(teacher1.texp);

  return <div className="add-teacher-form">
    <TextField fullWidth label="name" id="fullWidth" type="text"
      placeholder="Name"
      onChange={(event) => settname(event.target.value)} value={tname} />
    <TextField fullWidth label="degree" id="fullWidth" type="text" placeholder="poster"
      onChange={(event) => settdegree(event.target.value)} value={tdegree} />
    <TextField fullWidth label="exp" id="fullWidth" type="text" placeholder="rating"
      onChange={(event) => settexp(event.target.value)} value={texp} />

    <button onClick={() => {
      const newMovie = {
        tname: tname,
        tdegree: tdegree,
        texp: texp,
      };
      const updateteacher = [...teacherlist];
      updateteacher[id] = newMovie;
      setteacherlist(updateteacher);
      history.push('/Teacher');
    }}>save</button>
  </div>;
}
