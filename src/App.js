import React from "react";
import Article from "./Article";


const article = {
  title: "Article title",
  description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet venenatis turpis,
    id convallis augue. Mauris rutrum sagittis arcu, at aliquam leo lacinia in. Etiam
    pellentesque magna et odio pellentesque dictum. Morbi sollicitudin cursus urna,
    sit amet vehicula quam tristique a. Curabitur et magna eu libero sodales vestibulum
    at vel augue. Aenean feugiat posuere auctor. Sed non nisi sodales, lobortis tortor non,
    pretium magna. Nullam rhoncus nulla sed massa pulvinar pellentesque. Phasellus auctor
    pellentesque quam. Sed elementum, lectus non tempor malesuada, risus massa consectetur tellus,
    sed vehicula augue ipsum et ligula. In lacinia elementum ex, eget gravida mi varius id.
  `,
  categories: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Curabitur et magna eu libero sodales vestibulum"]
}

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Article article={article} />
      </div>
    );
  }
}
