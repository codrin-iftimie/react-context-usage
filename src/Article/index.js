import React from "react";

export default class Article extends React.Component {
  render() {
    return (
      <article>
        <h1>Article title</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet venenatis turpis,
          id convallis augue. Mauris rutrum sagittis arcu, at aliquam leo lacinia in. Etiam
          pellentesque magna et odio pellentesque dictum. Morbi sollicitudin cursus urna,
          sit amet vehicula quam tristique a. Curabitur et magna eu libero sodales vestibulum
          at vel augue. Aenean feugiat posuere auctor. Sed non nisi sodales, lobortis tortor non,
          pretium magna. Nullam rhoncus nulla sed massa pulvinar pellentesque. Phasellus auctor
          pellentesque quam. Sed elementum, lectus non tempor malesuada, risus massa consectetur tellus,
          sed vehicula augue ipsum et ligula. In lacinia elementum ex, eget gravida mi varius id.
          Fusce tempus pretium est ut mattis.
        </p>
        <side>
          <h4>Categories</h4>
          <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Proin sit amet venenatis turpis</li>
            <li>Morbi sollicitudin cursus urna</li>
            <li>Sed non nisi sodales</li>
          </ul>
        </side>
      </article>
    )
  }
}
