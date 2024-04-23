import  {  useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { styled } from '@mui/system';
import "./style.css";
import axiosObj from '../../axios/axiosConfig';
import { useNavigate } from 'react-router-dom';
import "../style/loaders.css"

const StyledGrid = styled(Grid)({
  height: '100vh',
  width: '200vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledPaper = styled(Paper)({
  // padding: '24px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
});

const StyledAvatar = styled(LockOutlinedIcon)({
  margin: '8px',
  backgroundColor: 'white',
  fontSize: '60px',
  color: 'black',
  padding: '12px',
  borderRadius: '50%',
});

const StyledForm = styled('form')({
  width: '100%',
});

const StyledSubmitButton = styled(Button)({
  margin: '16px 0 8px',
  backgroundColor: '#1976D2',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#135592',
  },
});



const Login = () => {
  const [isSub,setIsSub]=useState(false)

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
   const [csrfToken, setCsrfToken] = useState("");
  const [err, seterr] = useState("");
 
  const navigate = useNavigate();
  const handleLogin = async () => {
    setIsSub(true)

   const data= await axiosObj.get("/api/csrf-token");
   console.log(data.data.csrfToken);
    window.localStorage.setItem("csrf-token",data.data.csrfToken)
    const {email,password}=inputs;
 axiosObj.post('/api/login', {
    email,
    password,
    csrfToken: window.localStorage.getItem("csrf-token")
  },)
      .then((resp) => {
      console.log(resp.data.valideLogin);
        if (resp.data.valideLogin === true){
          window.sessionStorage.setItem("user",JSON.stringify(resp.data.user))
          navigate("/index");
        }
        else{
        setIsSub(false)
         window.sessionStorage.removeItem("user")
          seterr(resp.data.error)
        }
      })

  }

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <StyledGrid container component="main" className='container'>
      <StyledPaper elevation={6} square>
        <Grid container>
          <Grid item xs={false} sm={4} md={7}>
            {/* Image on the left */}
            <div className="w-full h-full bg-cover bg-center" > <img src="./images/logo2.jpg" /></div>
          </Grid>
          <Grid item xs={12} sm={8} md={5}>
            {/* Form on the right */}
            <div className="p-12">
              <StyledAvatar />
              <Typography component="h1" variant="h5" className="mt-4 mb-6 text-2xl font-semibold text-gray-800">
                Login in
              </Typography>
              <StyledForm noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name='email'
                  label="Email"
                  type="email"
                  autoComplete="email"
                  autoFocus
                  value={inputs.email}
                  onChange={handleChange}
                  className="mb-4 border-2 border-red-700"
                />
                <small>{err}</small>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name='password'
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  value={inputs.password}
                  onChange={handleChange}
                  className="mb-4 border-2 border-red-700"
                />
                <StyledSubmitButton
                  type="button"
                  disabled={isSub?true:false}
                  fullWidth
                  variant="contained"
                  onClick={handleLogin}
                  className='bg-red-700'
                >
                 {isSub?<p className='loader d-d-inline-block  mx-auto'></p>:" Login In"}
                </StyledSubmitButton>

              </StyledForm>
            </div>
          </Grid>
        </Grid>
      </StyledPaper>
    </StyledGrid>
  );
};

export default Login;