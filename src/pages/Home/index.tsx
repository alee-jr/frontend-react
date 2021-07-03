import React, { useEffect } from 'react';
import { Container, Content, Table, Row } from './styles';
import Pagination from '../../components/pagination';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../store/ducks/getPosts/actions';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { data, current_page, total } = useSelector(state => state.getPosts);

  useEffect(() => {
    dispatch(getPosts.request(undefined));
  }, []);

  return (
    <Container>
      <Content>
        <div>
          <h3>Últimas postagens</h3>
        </div>
        <Table>
          <Row>
            <div>Título</div>
            <div>Conteúdo</div>
          </Row>
          {data &&
            data.map(value => (
              <Row>
                <div>{value.title}</div>
                <div>{value.body}</div>
              </Row>
            ))}
        </Table>
        <div>
          <div>
            <p>Exibindo {(data && data.length) || 0} postagens</p>
          </div>
          <Pagination
            stateToCallNewPagesEvent={getPosts.request}
            current_page={current_page}
            maxPages={total}
            pages={total}
          />
        </div>
      </Content>
    </Container>
  );
};

export default Home;
