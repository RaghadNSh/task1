import './App.css';
import {useForm} from 'react-hook-form';


function App() {

  const { register , handleSubmit , errors} = useForm();
  const onSubmit = (data) => {
    console.log(data)

 
  }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit (onSubmit)}>
        <h1>Resister</h1>
        <div className="ui divider"></div>
        <div className="ui form">

        <div className="field">
        <label>Full Name</label> <br/>
            <input
              type="text"
              name="Full Name"
              placeholder="Full Name" 
              {...register('FullName' , {required : true})}
             
              />
        </div>

        <div className="field">
        <label>Password</label><br />
            <input
              type="password"
              name="password"
              placeholder="password"
              {...register('password', {required : "paaword not valid"})}
              /> 

        </div>


        <div className="field">
        <label>Email</label><br/>
            <input
              type="text"
              name="Email"
              placeholder="Email"
              {...register('Email', {required : true})}
              />
        </div>

      

        <div className="field">
        <label>Phone Number</label><br/>
            <input
              type="text"
              name="Phone Number"
              placeholder="Phone Number"
              {...register('Phone Number', {required : true , Length:10})}
              />
        </div>
        <br/>
        <button className="button">Submit</button>

        </div>
      </form>
    </div>
      
  );
}

export default App;
