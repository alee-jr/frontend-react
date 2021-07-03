import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Container, NumberButton } from './styles';
import left from '../../assets/icons/left.svg';
import right from '../../assets/icons/right.svg';

interface Props {
  pages: number;
  stateToCallNewPagesEvent?: any;
  adicionalDateToState?: any;
  current_page: number;
  maxPages: number;
}

const Pagination: React.FC<Props> = ({
  pages,
  stateToCallNewPagesEvent,
  adicionalDateToState,
  current_page,
  maxPages,
}) => {
  const pagesArray = Array.from({ length: pages }, (_, i) => i + 1);
  const dispatch = useDispatch();
  const changePage = useCallback(
    (next: number) => {
      if (current_page + next >= 1 && current_page + next <= maxPages) {
        dispatch(stateToCallNewPagesEvent({ ...(adicionalDateToState || {}), ...{ page: current_page + next } }));
      }
    },
    [stateToCallNewPagesEvent, dispatch, adicionalDateToState, current_page, maxPages],
  );

  const changePageByNumber = useCallback(
    (page: number) => {
      dispatch(stateToCallNewPagesEvent({ ...(adicionalDateToState || {}), ...{ page: page } }));
    },
    [stateToCallNewPagesEvent, dispatch, adicionalDateToState],
  );

  return (
    <Container>
      <div>
        <button onClick={() => changePage(-1)} type="button">
          <img src={left} alt="" />
        </button>
        {pagesArray
          .slice(
            current_page === 1 ? current_page - 1 : current_page === pages ? current_page - 3 : current_page - 2,
            current_page === 1 ? current_page + 2 : current_page + 1,
          )
          .map(page => (
            <NumberButton selected={page === current_page} onClick={() => changePageByNumber(page)}>
              <p>{page}</p>
            </NumberButton>
          ))}
        <button onClick={() => changePage(1)} type="button">
          <img src={right} alt="" />
        </button>
      </div>
    </Container>
  );
};

export default Pagination;
