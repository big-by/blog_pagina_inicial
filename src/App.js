import './style/main.css';
import { Header } from './ui/Header';
import { Banner } from './ui/Banner';
import { Conteudo } from './ui/Conteudo';
import { Footer } from './ui/Footer';
import { Fragment } from 'react';
import PROFILE_PICTURE from './img/profile_picture.jpg';

const posts = [{
  id: 1,
  title: 'Identificador de Obstáculos para Deficientes Visuais',
  date: '10 de Janeiro de 2022',
  content:'Para o deficiente visual se locomover ele conta com o auxílio de uma bengala que tateia o chão pelo qual ele irá se deslocar. Contudo, isso não o impede de se chocar com objetos localizados a altura de sua cabeça, tais como orelhões, árvores e placas. Pensando em uma forma de ajudá-los com esses obstáculos, surgiu a ideia de adaptar um sensor de distância em um par de óculos de modo que a pessoa seja avisada que há algum objeto a altura de seus olhos.',
},
{
  id: 2,
  title: 'Comunicação por Luz Visível',
  date: '5 de Fevereiro de 2022',
  content:'Com a chegada do IoT, tem-se cada vez mais dispositivos inteligentes conectados à Internet. Com isso a faixa de frequências destinada a estas conexões, se torna cada vez mais congestionada. Dessa forma, uma das tecnologias que está sendo estudada é a comunicação por luz visível. Isto é, modular a intensidade da luz para a transmissão de informações.'},
{
  id: 3,
  title: 'Proteção de Sistemas de Geração Fotovoltaica contra Descargas Atmosféricas',
  date: '15 de Março de 2022',
  content:'O presente Trabalho de Conclusão de Curso - TCC apresenta o resultado de pesquisa das técnicas disponíveis para proteção dos sistemas fotovoltaicos (SFV) contra descargas atmosféricas e a aplicação destas técnicas a um projeto de uma instalação existente. A aplicação das boas práticas de proteção contra descargas atmosféricas confere aos SFV a necessária suportabilidade contra os surtos elétricos decorrentes destes fenômenos, garantido sua funcionalidade além de controlar o risco aos usuários da energia fotovoltaica. A recente norma ABNT NBR 16690 - Instalações elétricas de arranjos fotovoltaicos - Requisitos de projeto, publicada em 3 de outubro de 2019 orienta o projeto e instalação dos Sistemas de Proteção contra Descargas Atmosféricas (SPDA) dos SFV. O projeto de proteção detalhado neste relatório tem por escopo o SFV de 100 kWp instalado na cobertura do galpão de uma quadra esportiva localizada no Condomínio Fazenda do Capão em Sabará/MG. O sistema de proteção projetado é completo, incluindo os subsistemas de captação, descida e aterramento, assim como as definições das distâncias de segurança, os DPS, e requisitos de blindagem eletromagnética e redução dos laços de indução dos cabos CC do SFV.'
}]

function App() {
  return (
    <Fragment>
      <Header 
        tabs={['Blog', 'Sobre', 'Descrição']}
      />
      <Banner 
        profilePicture={PROFILE_PICTURE}
        nome={'Samuel Macedo'}
        sobreMim={'Engenheiro Eletrônico e de Telecomunicação que tem trabalhado na àrea Tecnologia da Informação, exerço a função de Desenvolvedor Fullstack, utilizando React + Java. Estou a procura de novos desafios profissionais, a fim de desenvolver minhas habilidades na àrea de Engenharia de Software. '+
        'Sou um extremo entusiasta de novos conhecimentos, amo colaborar com meu time e me encanto com tarefas automatizadas.'}/>
      <Conteudo
        posts={posts}
      />
      <Footer 
       footerTexto={'Copyright © 2022 Samuel Macedo'}
      />
    </Fragment>
  );
}

export default App;
