import { useHistory } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export function Student({ sname, degree, year, section, batchyear, deleteButton, editButton, id }) {
  const history = useHistory();
  return (
    <div className="movie-container">
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {sname}
          </Typography>
          <Typography variant="h5" component="div">
            {degree}-{year}-{section}
          </Typography>

          <Typography variant="body2">
            {batchyear}
          </Typography>
        </CardContent>
        <CardActions>
 <Button size="small" color="primary" onClick={() =>
   history.push(`/Student/${id}`)}>
            Learn More </Button>

          {deleteButton}{editButton}
        </CardActions>
      </Card>
    </div>
  );
}
