import { useState } from "react";

const PostTexto = ({ texto }) => {
  const [lerMais, setLerMais] = useState(true);
  const toggleLerMais = () => {
    setLerMais(!lerMais);
  };

  return (
    <p>
      {texto.length > 400 && lerMais ?
          texto.slice(0, 350) + "..." : texto}
      <span>  </span>
      <button onClick={toggleLerMais} class="content__postConteudo--lerMais">
        {texto.length <= 400 ? 
          "" : lerMais ?
          "Ler mais" : "Mostrar menos"}
      </button>
    </p>
  )
}

export const Posts = ({ postTitulo, postData, postConteudo }) => {
    return (
      <div class="content__post">
        <div class="content__postTitulo">
          <h3>{postTitulo}</h3>
        </div>
        <div class="content__postData">
          <p>{postData}</p>
        </div>
        <div class="content__postConteudo">
            <PostTexto
              texto={postConteudo}
            />
        </div>
      </div>
    );
  }