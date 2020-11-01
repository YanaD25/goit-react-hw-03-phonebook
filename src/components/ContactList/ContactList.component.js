import styled from "styled-components";

const Contacts = styled.div`
  width: 400px;
  height: auto;
  outline: 2px solid black;
  position: relative;
  padding: 20px;
`;
Contacts.Item = styled.li`
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
export default Contacts;
