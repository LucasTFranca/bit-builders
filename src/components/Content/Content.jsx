import React from 'react';

import './Content.css';

function Content() {
  return (
    <div className="content-container">
      <div className="content-title-container">
        <h1>Conteúdo</h1>
        <div className="highlight" />
      </div>
      <p>
        A linguagem JavaScript evoluiu muito desde o início da web. Antigamente,
        o JavaScript servia apenas para coisas simples e firulas desnecessárias,
        hoje em dia é a principal tecnologia da web,
        junto com o advento das single page applications e das webapps,
        o JavaScript se tornou ainda mais necessário e o seu ritmo
        de evolução acelerou consideravelmente.
      </p>
      <h2>Objetivo</h2>
      <p>
        Explicar como funcionam as camadas de desenvolvimento web,
        dando um panorama do mercado de trabalho.
      </p>
      <h2>A quem se destina o curso</h2>
      <p>
        Profissionais frontend que querem ingresssar no mundo backend.
      </p>
      <h2>Conteúdo da palestra</h2>
      <ul>
        <li>A linguagem JavaScript antes e agora</li>
        <li>JavaScript no client-side</li>
        <li>JavaScript no server-side</li>
        <li>JavaScript no banco de dados</li>
        <li>Vantagens de ter uma mesma linguagem</li>
      </ul>
    </div>
  );
}

export default Content;
