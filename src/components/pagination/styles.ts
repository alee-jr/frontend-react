import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  justify-content: flex-end;
  > div {
    display: flex;
    > button:first-of-type {
      margin-right: 0.5rem;
    }
  }
`;

interface PropsNumberButton {
  selected: boolean;
}

export const NumberButton = styled.button<PropsNumberButton>`
  font-weight: bold;
  padding: 0 0.3rem 0 0.3rem;
  margin-right: 0.5rem;
  ${c => c.selected && 'border: 2px solid #A3A3A3; border-radius: 3px;'};
`;
