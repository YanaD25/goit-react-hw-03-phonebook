import styled from "styled-components";

const Form = styled.form`
  width: 400px;
  height: 100px;
  outline: 2px solid black;
  position: relative;
  padding: 20px;
`;
Form.Input = styled.input`
  position: absolute;
  right: 10px;
  width: 300px;
`;
Form.Button = styled.button`
  width: 350px;
  margin: 20px auto;
  margin-left: 8px;
  border: 2px solid black;
  color: black;
`;
export default Form;
