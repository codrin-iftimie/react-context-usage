import React from "react";
import Article, {ArticleTitle} from "./Article";
import ArticleLayout, {ArticleLayout2} from "./Article/layouts";
import ArticleForm from './Form';

const article = {
  title: "Article title",
  alternativeText: "Alternative article title",
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
  categories: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Curabitur et magna eu libero sodales vestibulum"],
  tags: ["Nullam", "Curabitur", "Vestibulum"]
}

export default class App extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      overwrite: false,
      article
    };

    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        overwrite: true
      })
    }, 2000)
  }
  render() {
    let overwrite = null;
    const article = this.state.article;

    if (this.state.overwrite) {
      overwrite = <ArticleTitle text={article.alternativeText}/>

    }

    return (
      <div className="App">
        <Article article={article} layout={ArticleLayout} />
        <hr />
        <Article article={article} layout={ArticleLayout2}>
          {overwrite}
        </Article>
        <ArticleForm article={article} onChange={this.onChange} />
      </div>
    );
  }

  onChange(fieldName, ev) {
    const value = ev.target.value;
    this.setState({
      article: Object.assign({}, this.state.article, {[fieldName]: value})
    })
    this.forceUpdate();
  }
}
