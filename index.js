import { execSync } from 'child_process';

function installReactDevdependencies() {
  try {
    execSync('npm install react react-dom @types/react @types/react-dom redux react-redux redux-thunk redux-logger react-router-dom styled-components sass jest react-testing-library enzyme axios material-ui react-bootstrap react-query react-hook-form', { stdio: 'inherit' });
    console.log('React development essentials installed successfully!');
  } catch (error) {
    console.error('Error installing React development essentials:', error);
  }
}

export default installReactDevdependencies;
