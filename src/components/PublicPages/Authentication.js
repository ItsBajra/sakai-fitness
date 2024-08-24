import React, { useState } from "react";
import * as Components from "./Components";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useSignup } from "../../hooks/useSignup";
import { useLogin } from "../../hooks/userLogin";

const Authentication = () => {
  const [signIn, toggle] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { signup, signupError, signupIsLoading } = useSignup();
  const { login, loginError, loginIsLoading } = useLogin();

  // Toggle Password Visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Handle SignUp
  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log("Attempting to sign up...");

    await signup(name, email, password);

    if (signupError) {
      console.error("Signup Error:", signupError);
    }
  };

  // Handle SignIn
  const handleSignIn = async (e) => {
    e.preventDefault();
    console.log("Attempting to sign in...");

    await login(email, password);

    if (loginError) {
      console.error("Login Error:", loginError);
    }
  };

  return (
    <div className="auth-container">
      <Components.Container>
        <Components.SignUpContainer signinIn={signIn}>
          <Components.Form onSubmit={handleSignUp}>
            <Components.Title>Create Account</Components.Title>
            <Components.Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Components.Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Components.PasswordInputContainer>
              <Components.PasswordInput
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Components.TogglePasswordIcon onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </Components.TogglePasswordIcon>
            </Components.PasswordInputContainer>
            <Components.Button disabled={signupIsLoading} type="submit">
              Sign Up
            </Components.Button>
            {signupError && <Components.Error>{signupError}</Components.Error>}
          </Components.Form>
        </Components.SignUpContainer>

        <Components.SignInContainer signinIn={signIn}>
          <Components.Form onSubmit={handleSignIn}>
            <Components.Title>Sign in</Components.Title>
            <Components.Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Components.PasswordInputContainer>
              <Components.PasswordInput
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Components.TogglePasswordIcon onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </Components.TogglePasswordIcon>
            </Components.PasswordInputContainer>
            <Components.Anchor href="#">
              Forgot your password?
            </Components.Anchor>
            <Components.Button disabled={loginIsLoading} type="submit">
              Sign In
            </Components.Button>
            {loginError && <Components.Error>{loginError}</Components.Error>}
          </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer signinIn={signIn}>
          <Components.Overlay signinIn={signIn}>
            <Components.LeftOverlayPanel signinIn={signIn}>
              <Components.Title>Welcome Back!</Components.Title>
              <Components.Paragraph>
                To keep connected with us please login with your personal info
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                Sign In
              </Components.GhostButton>
            </Components.LeftOverlayPanel>

            <Components.RightOverlayPanel signinIn={signIn}>
              <Components.Title>Hello, Friend!</Components.Title>
              <Components.Paragraph>
                Enter Your personal details and start journey with us
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>
                Sign Up
              </Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </div>
  );
};

export default Authentication;
