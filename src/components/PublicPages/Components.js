import styled from "styled-components";

// Container Component
export const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 678px;
  max-width: 100%;
  min-height: 400px;
`;

// SignUpContainer Component
export const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  ${(props) =>
    props.signinIn !== true
      ? `
   transform: translateX(100%);
   opacity: 1;
   z-index: 5;
 `
      : null}
`;

// SignInContainer Component
export const SignInContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;
  ${(props) =>
    props.signinIn !== true ? `transform: translateX(100%);` : null}
`;

// Form Component
export const Form = styled.form`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`;

// Title Component
export const Title = styled.h1`
  font-weight: bold;
  margin: 0;
`;

// Input Component
export const Input = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
  font-size: 16px;

  /* Media query for smaller screens */
  @media (max-width: 600px) {
    width: 170%;
  }
`;

// PasswordInputContainer Component
export const PasswordInputContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 8px 0;

  /* Media query for smaller screens */
  @media (max-width: 600px) {
    width: 170%;
  }
`;

// PasswordInput Component
export const PasswordInput = styled(Input)`
  padding-right: 40px;
  box-sizing: border-box;
`;

// TogglePasswordIcon Component
export const TogglePasswordIcon = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 18px;
  color: #888;

  &:hover {
    color: #000;
  }

  /* Media query for smaller screens */
  @media (max-width: 600px) {
    right: 5px;
    font-size: 16px;
  }
`;

// Button Component
export const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #ff4b2b;
  background-color: #ff4b2b;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`;

// GhostButton Component
export const GhostButton = styled(Button)`
  background-color: transparent;
  border-color: #ffffff;
`;

// Anchor Component
export const Anchor = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
`;

// OverlayContainer Component
export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  ${(props) =>
    props.signinIn !== true ? `transform: translateX(-100%);` : null}
`;

// Overlay Component
export const Overlay = styled.div`
  background: #ff416c;
  background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
  background: linear-gradient(to right, #ff4b2b, #ff416c);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${(props) => (props.signinIn !== true ? `transform: translateX(50%);` : null)}
`;

// OverlayPanel Component
export const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

// LeftOverlayPanel Component
export const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);
  ${(props) => (props.signinIn !== true ? `transform: translateX(0);` : null)}
`;

// RightOverlayPanel Component
export const RightOverlayPanel = styled(OverlayPanel)`
  right: 0;
  transform: translateX(0);
  ${(props) => (props.signinIn !== true ? `transform: translateX(20%);` : null)}
`;

// Paragraph Component
export const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`;

export const Error = styled.div`
  color: #ff4d4d; /* Strong red color */
  background-color: #ffe6e6; /* Light red background */
  padding: 10px; /* Padding for spacing */
  border-radius: 5px; /* Rounded corners */
  margin-top: 15px; /* Space above the error message */
  font-weight: bold; /* Bold text for emphasis */
  text-align: center; /* Center-align the error message */
  border: 1px solid #ff4d4d; /* Border for emphasis */
  width: 100%; /* Full width */
  max-width: 400px; /* Maximum width to keep it manageable on larger screens */
  margin-left: auto; /* Center horizontally */
  margin-right: auto; /* Center horizontally */

  @media (max-width: 768px) {
    max-width: 90%; /* Responsive width on smaller screens */
  }
`;