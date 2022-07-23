import styled from "styled-components";

export const Container = styled.label`
  position: relative;
  display: inline-block;
  width: 90px;
  height: 70px;

  /* Hide default HTML checkbox */
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.theme.colors.gray};
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 40px;
    width: 40px;
    left: 5px;
    bottom: 4px;
    background-color: ${props => props.theme.colors.red};
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider:before {
    background-color: ${props => props.theme.colors.darkGreen};
  }

  input:focus + .slider {
    box-shadow: 0 0 1px ${props => props.theme.colors.darkGreen};
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(40px);
    -ms-transform: translateX(40px);
    transform: translateX(40px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 1rem;
  }

  .slider.round:before {
    border-radius: 1rem;
  }
`;