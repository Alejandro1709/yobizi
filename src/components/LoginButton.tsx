import './LoginButton.css';

function LoginButton() {
  const handleClick = () => {
    console.log('Click en el botón');
  };

  return <button onClick={handleClick}>Login</button>;
}

export default LoginButton;
