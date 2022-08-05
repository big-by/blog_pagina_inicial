import { Posts } from "./Posts";
export const Conteudo = ({ posts }) => {
    return (
      <div class="content skin__claro">
        <section>
          <h1>Meus projetos</h1>
          <div class="posts">
            {posts.map(post => 
              <Posts
                key={post.id}
                postTitulo={post.title}
                postData={post.date}
                postConteudo={post.content}
              />
            )}
          </div>
        </section>
      </div>
    );
  }