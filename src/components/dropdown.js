import React, { Component } from "react";
import styled from "styled-components";
import FontAwesome from "react-fontawesome";
import onClickOutside from "react-onclickoutside";

const Wrapper = styled.div`
  margin: 20px;
  width: 200px;
  align-self: flex-end;
  user-select: none;
`;

const Header = styled.div`
  padding: 0 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 38px;
  border: 1px solid rgb(223, 223, 223);
  border-radius: 3px;
  background-color: #fff;

  & span {
    cursor: pointer;
  }
`;

const Title = styled.div`
  cursor: default;
`;

const List = styled.ul`
  border: 1px solid rgb(223, 223, 223);
  border-top: none
  border-bottom-right-radius: 3px
  border-bottom-left-radius: 3px;
  background-color: white
  box-shadow: 0 2px 5px -1px rgb(232, 232, 232);
  max-height: 215px;
  overflow-y: scroll;
  cursor: default;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  text-align: initial;
  position: absolute;
  z-index: 20;
  width: inherit;
  
`;
const ListItem = styled.li`
  flex: 0 0 100%;
  color: ${props => (props.selected ? "white" : null)};
  background-color: ${props => (props.selected ? "#ffcc01" : null)};

  &:hover {
    color: white;
    background-color: #ffcc01;
  }

  & span {
    margin-left: 5px;
  }
`;

class Dropdown extends Component {
  state = {
    listOpen: false,
    headerTitle: this.props.title
  };

  handleClickOutside = () => {
    this.setState({
      listOpen: false
    });
  };

  toggleList = () => {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }));
  };

  static getDerivedStateFromProps(nextProps) {
    const count = nextProps.list.filter(item => item.selected).length;

    if (count === 0) {
      return {
        headerTitle: nextProps.title
      };
    } else if (count === 1) {
      return {
        headerTitle: `${count} ${nextProps.titleHelper}`
      };
    } else {
      return {
        headerTitle: `${count} ${nextProps.titleHelper}s`
      };
    }
  }

  render() {
    const { list, toggleItem } = this.props;
    const { listOpen, headerTitle } = this.state;

    return (
      <>
        <Wrapper>
          <Header onClick={this.toggleList}>
            <Title>{headerTitle}</Title>
            {listOpen ? (
              <FontAwesome name="angle-up" size="2x" />
            ) : (
              <FontAwesome name="angle-down" size="2x" />
            )}
          </Header>

          {listOpen && (
            <List>
              {list.map(item => (
                <ListItem
                  key={item.id}
                  onClick={() => toggleItem(item.id, item.key)}
                  selected={item.selected}
                >
                  {item.title}
                  {item.selected && <FontAwesome name="check" />}
                </ListItem>
              ))}
            </List>
          )}
        </Wrapper>
      </>
    );
  }
}

export default onClickOutside(Dropdown);
