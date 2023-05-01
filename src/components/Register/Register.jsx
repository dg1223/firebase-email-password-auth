import React from "react";

const Register = () => {
  return (
    <div>
      <h4>Please register</h4>
      <form>
        <input type="email" name="email" id="email" placeholder="Your Enmail" />
        <br />
        <input
          type="password"
          name="passowrd"
          id="password"
          placeholder="Your Password"
        />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
