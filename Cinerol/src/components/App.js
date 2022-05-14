import React, { Component } from 'react';
import api from '../api';
import './style.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Card, Col, Row, Button, Modal, Typography, Rate } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Logo from "../assets/logocinerol.png";
import '../../node_modules/antd/dist/myStyle.less';
import './style/myStyle.css';
import { FaStar } from "react-icons/fa";

class App extends Component {
  state = {
    movies: [],
    visible: false,
    rating: null,
    movie: [],
    genres:[],
    action: [], 
    horror: [], 
    romance: [], 
    fantasy: [],
    drama: [], 
    science: [], 
    crime: [], 
    adventure: [],
  }

  showModal = (summary) => {
    this.setState({
      visible: true,
      summary,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  }

  ratingChanged = (newRating) => {
    console.log(newRating)
  }

  genreAction = (movies) => {
    let action, horror, romance, fantasy, drama, science, crime, adventure;
    let movie = movies.filter((movie) => {
      for(let i = 0; i <= movie.genres.length; i++){
        if(movie.genres[i] === "Action"){
          action = movie
          console.log(action);
        }
        if(movie.genres[i] === "Horror"){
          horror = movie;
          return horror;
        }
        // if(movie.genres[i] === "Romance"){
        //   romance = movie;
        //   return romance;
        // }
        // if(movie.genres[i] === "Fantasy"){
        //   fantasy = movie;
        //   return fantasy;
        // }
        // if(movie.genres[i] === "Drama"){
        //   drama = movie;
        //   return drama;
        // }
        // if(movie.genres[i] === "Science-Fiction"){
        //   science = movie;
        //   return science;
        // }
        // if(movie.genres[i] === "Crime"){
        //   crime = movie;
        //   return crime;
        // }
        // if(movie.genres[i] === "Adventure"){
        //   adventure = movie;
        //   return adventure;
        // }
      }
    });  
    this.setState({
      movie,
      action, 
      horror, 
      romance, 
      fantasy, 
      drama, 
      science, 
      crime, 
      adventure
    }); 
  }

  async componentDidMount() {
    const response = await api.get('');
    console.log(response.data);
    this.setState({
      movies: response.data,
      movie: [],
      action: [], 
      horror: [], 
      romance: [], 
      fantasy: [], 
      drama: [], 
      science: [], 
      crime: [], 
      adventure: [],
    });
    console.log(this.state.movies)
  }

  render() {

    const { movies, horror }  = this.state;
    const { Header, Content } = Layout;

    return (
      <>
        <Layout>
          <Header style={{ background: "white" }} className="header">
            <img className="logo" src={Logo} alt="logo"></img>
            <Menu className="menu" style={{ background: "white" }} theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">Movies</Menu.Item>
              <Menu.Item key="2">Series</Menu.Item>
              <Menu.Item key="3">Anime</Menu.Item>
              <Menu.Item key="4">Cartoon</Menu.Item>
            </Menu>
          </Header>
          <Layout style={{ padding: '24px 24px 24px', background: "#160f30" }}>
            <h1 className="genre-text">Action</h1>
            <Content
              className="content-movies"
              style={{
                padding: 10,
                minHeight: "100%",
                display: "flex",
                justifyContent: "space-around",
                marginBottom: "30px"
              }}
            >
              {movies.map((r) => (
                <Card title={r.name}>
                  <img src={r.image.medium} alt="img"></img>
                </Card>
              ))}
              {/* {filmes.map(filme => (
                <Card 
                  title={filme.show.name}
                  style={{ 
                    minWidth: "500px", 
                    height: "400px", 
                    margin: "10px",
                  }} 
                  key={filme.show.id}
                  extra={
                    <Button style={{ background: "#ff4d4f", border: "none", color: "white" }}><PlusOutlined />Save</Button>
                  }
                >
                  <Row gutter={[24,24]}>
                    <Col xs={24} lg={11} md={11}>
                      <img style={{ width: "200px", height: "300px" }} alt="img" src={filme.show.image.original}></img>
                    </Col>
                    <Col className="text-card" xs={24} lg={11} md={11}>
                      <h3>Summary:</h3>
                      <p> {filme.show.summary}</p>
                      <Button 
                        onClick={() => this.showModal(filme.show.summary)} 
                        type="primary" 
                        className="btn-view-more"
                      >
                          View more
                      </Button>
                      <h3>Genre:</h3>
                      <p> {filme.show.type}</p>
                      <div>
                        {[...Array(5)].map((star, index) => {
                          const rating = index + 1
                          return (
                            <label>
                              <input className="star" type="radio" name="rating" value={this.state.rating} onClick={() => this.setState({rating})}/>
                              <FaStar color={ rating <= this.state.rating ? "#ffc107" : "#e4e5e9"}  size={20}/>
                            </label>
                          );
                        })}
                      </div>
                    </Col>
                  </Row>
                </Card>            
              ))} */}
            </Content>
          </Layout>
        </Layout>

        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={null}
        >
          <p>{this.state.summary}</p>
        </Modal>
      </>
    );
  }

}

export default App;
