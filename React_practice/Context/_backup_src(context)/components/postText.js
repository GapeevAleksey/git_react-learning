import { useContext } from 'react';
import './postText.css';
import StyleContext from './services/styleContext';
const PostText = () => {
  const { state } = useContext(StyleContext);
  const style = {
    fontSize: state.fontSize,
    fontWeight: state.bold ? 'bold' : 'normal',
  };
  return (
    <div className="post-text">
      <div style={style}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        voluptatum magnam excepturi! Aliquam molestiae quia necessitatibus
        deserunt atque voluptates nostrum rerum in blanditiis corrupti! Suscipit
        aut ex laborum harum adipisci doloribus nesciunt corporis eum ipsa
        facilis consectetur eveniet ea debitis, sint laboriosam ratione itaque
        repudiandae autem ducimus facere esse sequi. Ratione explicabo
        perspiciatis sunt recusandae atque repellendus ullam asperiores, nemo
        nam aperiam error! Quas, alias. Optio autem nostrum totam, dolorem porro
        expedita laudantium! Officia quam ut nemo sed saepe magni iste illum
        unde dolore omnis labore eum molestias voluptas, debitis eaque dolorum
        corporis reprehenderit illo architecto porro voluptatum sit. Iusto nulla
        temporibus ab asperiores labore distinctio rem, aliquam suscipit saepe
        totam et doloremque recusandae laborum voluptatem voluptatibus. Voluptas
        neque delectus atque nisi ex obcaecati assumenda harum reiciendis in
        quidem illum eligendi quas placeat, commodi id, eveniet totam et eaque
        blanditiis dolor beatae molestias. Dolore dolorum atque obcaecati fugiat
        reiciendis velit maxime, quia exercitationem nisi quaerat in cupiditate,
        non ad sequi cum modi. Aperiam pariatur totam voluptates, officia
        architecto laborum provident at ipsum non minus vitae magnam
        perspiciatis maiores voluptatibus ducimus voluptate consequuntur ad esse
        deserunt similique ipsa excepturi ea! Maxime fugiat magnam qui dicta.
        Reiciendis, sequi? Alias, placeat amet. Dignissimos.
      </div>
    </div>
  );
};

export default PostText;
