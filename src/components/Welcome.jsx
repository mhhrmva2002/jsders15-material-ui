const Welcome = ({ fullname, setIsLoggedIn }) => {
  return <div>Welcome {fullname}
  <button onClick={()=>setIsLoggedIn(false)}>Back to login page</button>
  </div>;
};

export default Welcome;
