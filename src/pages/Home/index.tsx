import React from 'react';
import { Container, Content, Table, Row } from './styles';
import Pagination from '../../components/pagination';

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <div>
          <h3>Últimas postagens</h3>
        </div>
        <Table>
          <Row>
            <div>teste</div>
            <div>teste</div>
          </Row>
          <Row>
            <div>teste</div>
            <div>teste</div>
          </Row>
          <Row>
            <div>teste</div>
            <div>teste</div>
          </Row>
        </Table>
        <div>
          <div>
            <p>Exibindo 9 postagens</p>
          </div>
          <Pagination current_page={1} maxPages={1} pages={5} />
        </div>
      </Content>
    </Container>
  );
};

export default Home;
