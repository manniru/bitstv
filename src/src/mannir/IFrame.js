import React from 'react';

// export default ({ name }) => <iframe src="https://mannir.net/bitstv/pages/welcome.html" width="540" height="900"></iframe>


class IFrame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'welcome'
    };
  }

  src = (name) => {
    switch (name) {
      case 'iframe1': return 'welcome'; break;
      case 'iframe2': return 'main'; break;
      case 'iframe3': return 'tv'; break;
      case 'iframe4': return 'interactives'; break;
      case 'iframe5': return 'messages'; break;
      case 'iframe6': return 'player'; break;
      case 'iframe7': return 'news'; break;

      default: return 'welcome';
    }
  }
  
  componentDidMount() {
    // document.addEventListener('keydown', this.onKeyDown);
    console.log(+new Date())
  }

  render() {
    const { iframe1 } = this.src(this.props.name)
    var src = this.src(this.props.name);

    console.log(this.props.name);

    var src = "https://mannir.net/bitstv/pages/" + src + ".html";
    return (
      <div>
        <iframe src={src} width="540" height="900"></iframe>
      </div>
    );
  }
}

export default IFrame;

