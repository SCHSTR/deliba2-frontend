import React, { useState } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import Navbar from '../components/navbar'
import { Section, Container, JumboContainer, TwoColumn } from '../styles/global'
import TwitterCard from '../components/twitter_card'

const Home: React.FC = () => {
  const [search, updateSearch] = useState('')

  function searchCode(){
    if(search == '') return alert('Forneça um código de rastreio!')
    window.location.href = `/search/${search}`
  }

  return (
    <>
    <Head>
      <title>Deliba</title>
    </Head>
    <Navbar />
    <Hero>
      <div className="main-content">
        <div className="content">
          <h1>Tenha o controle de suas encomendas em qualquer lugar!</h1>
          <p className="sub-heading">A Deliba é um bot que faz o rastreio automatico e consulta rápida de encomendas do correio, diretamente no chat 💬</p>
          <div className="cta-input">
            <p>Comece por aqui, digite um código de rastreio válido!</p>
            <form action={'/search/'+search} method="post" onSubmit={searchCode}>
              <div className="form-placeholder">
                <input id="track_code" type="text" placeholder="Meu código de rastreio" onChange={event => updateSearch(event.target.value)}/>
                <button onClick={searchCode}>Procurar ‎ ‎🚚</button>
              </div>
            </form>
          </div>
        </div>
        <div className="image"></div>
      </div>
    </Hero>
    <Section>
      <Container>
        <JumboContainer>
          <h2>Um app aprovado pela comunidade!</h2>
          <p>Veja os comentários nas redes sociais sobre a gente 💕</p>
        </JumboContainer>
        <TwoColumn>
          <TwitterCard avatar_url='https://i.pinimg.com/originals/cb/d0/13/cbd0136bd219b7096e34d5f8f4e4fa1a.jpg' nome='Teste' user='username' testimonial='Que invenção maravilhosa! Agora eu consigo rastrar todas minhas encomendas muito mais fácil!!!' />
          <TwitterCard avatar_url='https://i.pinimg.com/originals/cb/d0/13/cbd0136bd219b7096e34d5f8f4e4fa1a.jpg' nome='Teste' user='username' testimonial='Que invenção maravilhosa! Agora eu consigo rastrar todas minhas encomendas muito mais fácil!!!' />
          <TwitterCard avatar_url='https://i.pinimg.com/originals/cb/d0/13/cbd0136bd219b7096e34d5f8f4e4fa1a.jpg' nome='Teste' user='username' testimonial='Que invenção maravilhosa! Agora eu consigo rastrar todas minhas encomendas muito mais fácil!!!' />
          <TwitterCard avatar_url='https://i.pinimg.com/originals/cb/d0/13/cbd0136bd219b7096e34d5f8f4e4fa1a.jpg' nome='Teste' user='username' testimonial='Que invenção maravilhosa! Agora eu consigo rastrar todas minhas encomendas muito mais fácil!!!' />
        </TwoColumn> 
      </Container>
    </Section>
    </>
  )
}

export default Home

const Hero = styled.div `
  margin: 2vh 5vw 5vh 5vw;

  .main-content{
    display: grid; 
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
    @media only screen and (min-width: 768px) {
      grid-template-columns: 1.5fr 1fr; 
      grid-template-rows: 1fr;
      gap: 0px 0px;
    }
    .content{
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: white;
      padding: 15%;
      background: ${props => props.theme.light_theme.primary};

      h1{
        font-size: ${props => props.theme.default.heading_mobile};
        @media only screen and (min-width: 768px) {
          font-size: ${props => props.theme.default.heading};
        }
      }

      .sub-heading{
        margin: 38px 0;
        font-weight: 300;

        @media only screen and (min-width: 768px) {
          font-size: ${props => props.theme.default.bigger_text};
        }       
      }

      .form-placeholder{
        position: relative;
        margin-top: 12px;
        display: flex;
        align-items: stretch;
        justify-content: space-between;
        max-width: 100%;
        background: ${props => props.theme.light_theme.white};
        padding: 12px;  
        border-radius: 24px;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        border: 4px solid rgba(0, 0, 0, .05);
        transition: all 350ms;

        input{  
          width: 100%;
          border: none;
          height: 54px;
          background-color: transparent;

          &:focus{
            outline: none;
          }
        }

        button{
          position: absolute;
          margin: 0;
          color: white !important;
          cursor: pointer;
          font-size: 14px;
          padding: 0px 24px;
          height: 54px;
          right: 12px;
          border-radius: 16px;
          box-sizing: border-box;
          -moz-box-sizing: border-box;
          -webkit-box-sizing: border-box;
          background: ${props => props.theme.light_theme.primary};
          border: 4px solid rgba(255, 255, 255, .35);

          &:hover{
            color: rgba(255, 255, 255, .35) !important;
          }
        }
      &:focus-within{
          box-shadow: 0px 7px 15px 0px rgba(0,0,0,0.2);
      }
      }
    }

    .image{
      background: white;
    }
  }

`
