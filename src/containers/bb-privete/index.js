import React, { Component } from 'react';
import Navigation from '../../components/navigation';

class BBPrivete extends Component {
  componentDidMount() {
    document.body.classList.add('single-work-active');
  }
  componentWillUnmount() {
    document.body.classList.remove('single-work-active');
  }
  render() {
    const workid = 3;

    return (
      <div className="bb-privete">
        <div className="content">
          <h2 className="single-work__title">BB Privete</h2>
          <p>O Lorem Ipsum é um texto modelo da indústria tipográfica e de</p>
          <p>impressão. O Lorem Ipsum tem vinda ser o texto padrão usado por</p>
          <p>estas indústrias desde o ano de 1500, quando uma misturou os</p>
          <p>caracteres de um texto para ri um espécime de livro. Este texto</p>
          <p>não só sobreviveu 5 séculos, s também o salto para a tipografia</p>
          <p>electrónica, mantendossencialmente inalterada. Foi popularizada</p>
          <p>nos anos 60 com a disponibização das folhas de Letraset, que</p>
          <p>continham passagens com Lorem Ipsum, e mais recentemente com os</p>
          <p>programas de publião como o Aldus PageMaker que incluem versões</p>
          <p>do Lorem Ipsum.</p>
        </div>
        <Navigation workid={workid} />
      </div>
    );
  }
}

export default BBPrivete;
