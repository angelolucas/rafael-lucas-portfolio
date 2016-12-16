import React, { Component } from 'react';
import Navigation from '../../components/navigation';

class bbprivete extends Component {
  componentDidMount() {
    document.body.classList.add('single-work-active');  
  }
  componentWillUnmount() {
    document.body.classList.remove('single-work-active');
  }
  render() {
    const workid = 3;

    return (
      <div className="bbprivete">
        <div className="content">
          <h2 className="single-work__title">BB Privete</h2>
          <p>O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.</p>
        </div>
        <Navigation workid={workid}></Navigation>
      </div>
      
    );
  }
}

export default bbprivete;
