const Welcome = ({ name, setIsLoggedIn }) => {
  return <div>Welcome {name}
  <button onClick={()=>setIsLoggedIn(false)}>Back to login page</button>
  </div>;
};

export default Welcome;
