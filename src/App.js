import { useState } from 'react';
import './App.css';
import TextForm from './components/TextForm';
// import About from './components/About';
const ExampleLayout = () => {
  const [mode, setmode] = useState('light')
  const[text,setText]=useState('Enable light mode')
  const toggleMode=()=>{
  if(mode==='dark'){
    setmode('light')
    setText('Enable dark mode')
    document.body.style.backgroundColor='white'
  }
  else{
    setmode('dark')
    setText('Enable Light mode ')
    document.body.style.backgroundColor='black'
  }
}
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>

        <div className="container-fluid">
          <a className="navbar-brand"  href="/">TextUtils</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>

          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              </ul>
              
                
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-primary" type="submit">Search</button>
            </form> */}

            <div className={`form-check form-switch text-${mode === "light" ? "dark" : "light"}`}>

              <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
                <label className="form-check-label  " htmlFor="switchCheckDefault">{text} </label>
            </div>
</div>
        </div>
      </nav>

      <TextForm mode={mode} />

      {/* <About /> */}
    </>
  );
};
export default ExampleLayout;
