import { createUser } from '@org/models';
import { greet } from '@org/utils';

export function App() {
  return <h1>{greet(createUser('Ada').name)}</h1>;
}

export default App;
