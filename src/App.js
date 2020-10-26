import React from 'react';
import ImageList from './ImageList';
class App extends React.Component {
  state = { images : [] };

      render() {
        return (
          <div className="ui container" style={{ marginTop: "10px" }}>
            <ImageList images={this.state.images} />
          </div>
        );
      }
    }
    
    export default App;

    