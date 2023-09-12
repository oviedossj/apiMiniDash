import app from './app'
import '../src/config/db';
import { auth } from '../src/config/db';

auth()

app.listen(app.get('port'));
console.log(`Listening on Server`)
