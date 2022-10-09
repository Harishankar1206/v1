// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AppRoute } from '../routes/routes';
import styles from './app.module.scss';
// import NxWelcome from './nx-welcome';

export function App() {
  return (
    <>
      {/* <NxWelcome title="v1" /> */}
      <AppRoute />
    </>
  );
}

export default App;
