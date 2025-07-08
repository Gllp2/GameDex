import React from 'react';
import LogIn from './components/logIn';
import SignUp from './components/signUp';
import FloatingLogosBackground from './components/floating-logos-background';
function App() {
  return (
    <div className="App">
      <SignUp/>
      <FloatingLogosBackground count={20}/>
    </div>
  );
}

export default App;
