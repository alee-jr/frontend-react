import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f0efef;
  height: calc(100vh - 5rem);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 97%;
  height: 92%;
  border-radius: 3px;
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 1rem;
  > div:first-of-type {
    padding: 2rem;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    > h3 {
      color: #494949;
    }
  }

  > div:last-of-type {
    width: 99%;
    border: 1px solid #efeeee;
    border-top: 0;
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;

    > div {
      margin-left: 1rem;
      margin-right: 2rem;
    }
  }
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  width: 99%;
  border: 1px solid #efeeee;
  min-height: calc(100% - 9.7rem);
  overflow-y: auto;
  position: relative;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #efeeee;
  &:first-of-type {
    position: sticky;
    top: 0;
    background-color: #f0efef;
    > div {
      padding: 1rem 1.5rem;
      color: #545454;
      font-weight: bold;
    }
  }
  &:last-of-type {
    border-bottom: none;
  }
  > div {
    padding: 1.5rem;
    width: 100%;
    align-self: center;
    flex-grow: 1;
  }
`;
