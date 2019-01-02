import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  font-family: Rajdhani;
  flex-direction: column;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

const Nav = styled.nav`
  flex: 1;
`;

const FlexContainer = styled.ul`
  background-color: #95818d;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: baseline;
  flex-wrap: wrap;
  padding: 0 5px;

  & li:not(:last-child) {
    margin-right: 5px;
  }

  @media (min-width: 800px) {
    height: 100vh;

    flex-direction: column;
    align-items: stretch;

    & > li:first-child {
      padding-top: 20px;
    }

    & > li {
      flex: 1;
      padding: 0 0 0 20px;
    }
  }
`;

const Submenu = styled.ul`
  @media (min-width: 800px) {
    padding: 10px 0 10px 10px;
    transition: all 0.5s;
    overflow: hidden;
    max-height: ${props => (props.open ? "200px" : "0")};
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  margin-right: ${props => (props.spaceright ? "5px" : null)};

  @media (min-width: 800px) {
    margin-right: ${props => (props.spaceright ? "15px" : null)};
  }

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  &:hover {
    background-color: #a897a1;
  }
`;

const Button = styled.div`
  display: inline-block;
  transform: rotate(90deg);
  font-size: 1.5em;
  font-weight: 600;
  color: #463c42;

  &:hover {
    cursor: pointer;
  }
`;

const Main = styled.main`
  margin: 0 20px;
  flex: 6;
`;

class Sidebar extends Component {
  state = {
    keys: [],
    submenuOpen: false
  };

  submenuOpen = key => {
    this.setState(prevState => ({
      keys: [...prevState.keys, key],
      submenuOpen: !prevState.submenuOpen
    }));
  };

  submenuClose = key => {
    this.setState(prevState => ({
      keys: prevState.keys.filter(item => item !== key),
      submenuOpen: !prevState.submenuOpen
    }));
  };

  render() {
    return (
      <Container>
        <Nav>
          <FlexContainer>
            <li>
              <StyledLink to="#">Section 1</StyledLink>
            </li>
            <li>
              <StyledLink to="#" spaceright="true">
                Section 2
              </StyledLink>
              {this.state.keys.some(key => key === 2) ? (
                <Button onClick={() => this.submenuClose(2)}>&lsaquo;</Button>
              ) : (
                <Button onClick={() => this.submenuOpen(2)}>&rsaquo;</Button>
              )}

              {this.state.keys.some(key => key === 2) && (
                <Submenu open>
                  <li>
                    <StyledLink to="#">Section 2.1</StyledLink>
                  </li>
                  <li>
                    <StyledLink to="#">Section 2.2</StyledLink>
                  </li>
                  <li>
                    <StyledLink to="#">Section 2.3</StyledLink>
                  </li>
                </Submenu>
              )}
            </li>
            <li>
              <StyledLink to="#">Section 3</StyledLink>
            </li>

            <li>
              <StyledLink to="#" spaceright="true">
                Section 4
              </StyledLink>
              {this.state.keys.some(key => key === 4) ? (
                <Button onClick={() => this.submenuClose(4)}>&lsaquo;</Button>
              ) : (
                <Button onClick={() => this.submenuOpen(4)}>&rsaquo;</Button>
              )}
              {this.state.keys.some(key => key === 4) && (
                <Submenu open>
                  <li>
                    <StyledLink to="#">Section 4.1</StyledLink>
                  </li>
                  <li>
                    <StyledLink to="#">Section 4.2</StyledLink>
                  </li>
                  <li>
                    <StyledLink to="#">Section 4.3</StyledLink>
                  </li>
                </Submenu>
              )}
            </li>
            <li>
              <StyledLink to="#">Section 5</StyledLink>
            </li>
            <li>
              <StyledLink to="#">Section 6</StyledLink>
            </li>
            <li>
              <StyledLink to="#">Section 7</StyledLink>
            </li>
            <li>
              <StyledLink to="#">Section 8</StyledLink>
            </li>
            <li>
              <StyledLink to="#">Section 9</StyledLink>
            </li>
            <li>
              <StyledLink to="#">Section 10</StyledLink>
            </li>
            <li>
              <StyledLink to="#">Section 11</StyledLink>
            </li>
          </FlexContainer>
        </Nav>
        <Main>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            accusamus. Officiis natus ad fugiat. Reiciendis magnam in,
            recusandae eum fugit corporis similique modi saepe sapiente quasi
            mollitia aliquam ipsam veritatis natus quidem eius nesciunt
            eligendi? Omnis eos dolor ea soluta vero quibusdam, eaque et eveniet
            recusandae facere quos deserunt animi architecto at dolorem
            blanditiis pariatur deleniti quaerat vitae, sit odio officiis.
            Laboriosam facilis vel adipisci quia omnis, dolores nam inventore
            labore. Dignissimos nihil reiciendis nesciunt suscipit, blanditiis
            accusantium ratione culpa. Illum perferendis porro molestias.
          </p>
          <p>
            Voluptates, accusantium suscipit quis delectus sapiente, maiores cum
            et commodi quam itaque quae esse odit inventore molestiae ipsum
            vero. Facere quidem quaerat perspiciatis esse quibusdam est
            consectetur soluta. Reiciendis, iure, distinctio officiis nihil
            possimus eos, aliquid architecto quia rem sit at assumenda aut
            illum. Beatae, dolores. Voluptatibus excepturi sapiente repudiandae,
            hic doloribus nostrum amet fugit velit mollitia, laudantium alias
            cumque ullam nemo voluptatem facere ex consectetur perspiciatis ipsa
            odio. Animi, minus, voluptate? Minima tenetur deleniti sint beatae
            maxime cupiditate voluptate vitae ducimus assumenda alias.
          </p>
          <p>
            Ipsam consequuntur eius, ducimus iure voluptates quod earum dolorem
            repudiandae, in expedita vitae ratione provident vero minima,
            veritatis quidem repellat aliquid quam. Quos eveniet doloribus
            laboriosam assumenda quaerat placeat, architecto deleniti
            voluptatibus vitae adipisci tenetur optio perspiciatis aspernatur
            ipsum omnis possimus blanditiis ratione reiciendis alias vel itaque
            ab, sunt officia explicabo! Tenetur cupiditate aspernatur quod,
            libero? Distinctio quia, impedit illo ut, deleniti beatae tempora
            explicabo consequatur officia molestias aliquid quasi sint illum,
            cum omnis repellendus autem? Qui eligendi laudantium eos aut quasi
            omnis repellendus.
          </p>
          <p>
            Ipsum incidunt quas assumenda illo omnis enim quod ratione unde
            nobis, fugiat beatae officia nostrum similique natus et eaque
            expedita impedit ducimus esse saepe dolore necessitatibus maxime
            eligendi dolores. Quidem neque, laboriosam molestiae alias et
            quaerat, laborum totam ea fugit sit quisquam consectetur, hic
            architecto corporis enim! Ut impedit consequatur explicabo
            consectetur ab vel, nam sapiente nulla, voluptatum architecto quod
            incidunt! Obcaecati dignissimos quidem, dolor, at repudiandae
            eveniet est ea possimus, eius adipisci non dolorem velit
            consequuntur natus facere blanditiis nemo totam praesentium
            voluptate.
          </p>
          <p>
            Enim, ab, totam! Quo recusandae iste, commodi dolor eos dolorem eius
            aperiam, enim illo illum debitis maxime modi similique veritatis
            accusantium, nulla corporis hic dolorum magnam laborum. Hic saepe,
            sunt accusamus neque dolores vitae odio deleniti delectus fugit
            facilis at doloribus mollitia, quis aliquid officia pariatur culpa
            nobis tenetur fugiat officiis nam fuga suscipit! Vitae blanditiis
            rerum commodi consequatur modi id, nam ullam quisquam voluptatum hic
            recusandae quam quas fuga incidunt corporis. Magni esse
            necessitatibus inventore, dicta totam ipsa nostrum eligendi enim
            alias cum!
          </p>
          <p>
            Esse fuga ex perspiciatis dignissimos minus eos id, quo nisi
            obcaecati quis cum. Earum, ut cumque beatae. Possimus aliquam
            aliquid animi ad veritatis debitis rem omnis molestiae doloremque
            placeat, harum cupiditate cum. Consectetur ipsa quas nulla assumenda
            sunt possimus sit eaque vitae totam consequatur repellat,
            reprehenderit, commodi eveniet! Cupiditate, sit deserunt voluptate
            itaque optio voluptas nostrum illum explicabo dolore hic vel
            assumenda doloremque fugiat placeat animi similique beatae minus
            quos, eius in? Magnam debitis iusto, quo molestias repellendus velit
            illum, pariatur dolorem dolores similique.
          </p>
          <p>
            Qui fugit, optio minima minus hic odit quos eaque et rem! Incidunt
            eos nihil hic temporibus fuga veritatis autem, obcaecati id minima
            dolore sed, delectus, unde. Hic accusantium dolorum, corporis
            eveniet dolores laudantium nihil laboriosam autem illo consectetur
            iste quibusdam, in placeat deleniti at quos sed porro nulla? Dolore
            cum rem in reiciendis temporibus sunt dignissimos expedita
            doloremque facilis. Nesciunt, provident earum quae ipsum vel est
            quis, dolore praesentium, quaerat sunt facere vitae quasi suscipit
            esse veniam, ducimus sed quam itaque autem natus debitis!
          </p>
          <p>
            Vitae cum doloribus dolorum facere, nam repellat, distinctio
            voluptatem maxime temporibus, molestiae assumenda accusamus dolores
            consequatur ex ab et laudantium minus magnam cumque alias, itaque
            dolorem ipsa deserunt fuga. Dolor ipsum dignissimos laborum, eius
            odit, nisi in veritatis voluptatibus odio, neque, laboriosam esse
            amet recusandae itaque aperiam qui fuga illo quidem repellat
            perspiciatis est. Animi repellat quibusdam asperiores, beatae nobis
            illum obcaecati fugiat adipisci voluptatem unde quod, aperiam nam
            minus at nisi, perspiciatis soluta magni debitis. Saepe
            exercitationem ut at quos, architecto ea asperiores.
          </p>
        </Main>
      </Container>
    );
  }
}

export default Sidebar;
