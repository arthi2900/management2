import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router-dom';

export function Teacher({ tname, tdegree, texp, deleteteacher, editteacher, id }) {
  const history = useHistory();
  return (
    <div className="movie-container">
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {tname}
          </Typography>
          <Typography variant="h5" component="div">
            {tdegree}
          </Typography>
          <Typography variant="body2">
            {texp}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={() => history.push(`/teacher/${id}`)}
          >Learn More </Button>
          {deleteteacher} {editteacher}
        </CardActions>
      </Card>
    </div>
  );
}
