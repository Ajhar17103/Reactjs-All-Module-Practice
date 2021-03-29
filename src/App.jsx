import Css from "./Component/css";
import Event from "./Component/event/Event";
import ControlForms from "./Component/Forms/ControlForms";
import UncontrolForms from "./Component/Forms/UncontrolForms";
import Person from "./Component/profile/Person";
import SignIn from "./Component/SignIn/SignIn";
import SignUP from "./Component/SignUp/SignUp";
import SplitForm from "./Component/SplitForm";
import Timer from "./Component/Timer/Timer";

 

function App() {
  return (
    <div className="App">
      <div className='text-center'>
      <Person name='Muhammad Azharul Islam' title='Junior Software Developer'/>
      
      </div>
      <div>
   
        <ControlForms/>
        <br/>
        <UncontrolForms/>
        <br/>
        <h1 className='ml-5'>Css</h1>
        <Css/>
      </div> 
      <div className='text-center'>
        <h3>Event </h3>
        <Event/>
      </div>
      <hr/>
      <div>
        <h3 className='text-center'>Sign In Form</h3>
        <SignIn/>
        <br/>
        <h3 className='text-center'>Sign Up Form</h3>
        <SignUP/>
      </div>
       <div>
       <h3 className='text-center'>Props Types Splites Forms</h3>
       
         <SplitForm/>
       </div>
       <hr/>
       <br/>
       <div>
        
       <Timer/>
       </div>
       <div className='p-50'>
          <br/>
          <br/>
       </div>
    </div>
  );
}

export default App;
