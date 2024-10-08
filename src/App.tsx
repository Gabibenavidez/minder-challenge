import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import TasksList from './components/TasksList';
import { LoadingProvider } from './context/loaderContext';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme();

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <LoadingProvider>
          <TasksList />
        </LoadingProvider>
      </ThemeProvider>
    </>
  )
}

export default App;
