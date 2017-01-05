import React, { Component } from 'react';

class BBPrivete extends Component {
  componentDidMount() {
    document.body.classList.add('works-page-active');
  }
  componentWillUnmount() {
    document.body.classList.remove('works-page-active');
  }
  render() {
    return (
      <section className="bb-privete">
        <h2>BB Privete</h2>
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
      </section>
    );
  }
}

export default BBPrivete;
