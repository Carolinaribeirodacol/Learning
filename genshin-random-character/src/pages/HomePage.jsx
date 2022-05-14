import DestinoFamiliar from "../assets/Item_Destino_Familiar.png";
import Banner from "../assets/banner1.jpg";
import "./HomePage.css";
import "antd/dist/antd.css";
import { Button, Layout, Image, Card } from "antd";
import { useEffect, useState } from "react";
const { Content, Footer } = Layout;
const { Meta } = Card;
const characters = require("../utils/characters.json");

export function HomePage() {
  const [character, setCharacter] = useState({});
  const [characterImage, setCharacterImage] = useState("");

  const wishOnce = () => {
    setCharacter(characters[Math.floor(Math.random() * characters.length)]);
  };

  useEffect(() => {
    if (Object.keys(character).length > 0) {
      setCharacterImage(
        `https://api.genshin.dev/characters/${character.name?.toLowerCase()}/icon`
      );
    }
  }, [character]);

  return (
    <Layout style={{ background: "transparent" }}>
      <Content
        className="site-layout"
        style={{
          padding: "0 50px",
          marginTop: 64,
          margin: "auto",
          textAlign: "center",
        }}
      >
        <Image src={Banner} />
        <Button
          style={{ 
            marginTop: 20, 
            background: "white", 
            border: "none",
            width: 300,
            height: 40,
            color: "black"
          }}
          onClick={() => wishOnce()}
          shape="round"
          icon={<img className="familiar-destiny" src={DestinoFamiliar} />}
          shape="round"
          type="primary"
        >
          Desejar 1 vez
        </Button>
        <Content
          style={{ display: 'flex', alignItems: 'center', justifyContent: "center" }}
        >
          {Object.keys(character).length > 0 && (
            <Card
              hoverable
              style={{ width: 160, marginTop: 20 }}
              cover={<img alt={character.name} src={characterImage} />}
            >
              {character.rating} Estrelas
            </Card>
          )}
        </Content>
      </Content>
      <Footer
        style={{
          textAlign: "center",
          overflow: "auto",
          width: "100vw",
          position: "fixed",
          bottom: 0,
        }}
      >
        Colossal Ribeiro
      </Footer>
    </Layout>
  );
}
