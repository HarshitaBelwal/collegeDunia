import React from 'react';

class App extends React.Component {

      render() {
        return (
          <div className="ui container" style={{ marginTop: "10px" }}>
            <ImageList images={this.state.images} />
          </div>
        );
      }
    }
    
    export default App;