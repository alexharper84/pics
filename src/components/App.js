import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit(term) {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: term },
        headers: {
          Authorization:
            "Client-ID f959ca3414c6398b8db535a296a4ac82227405aa50f1edea01decb1264834d1b"
        }
      })
      .then(response => {
        console.log(response.data.results);
      });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
