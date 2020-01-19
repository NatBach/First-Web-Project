import React from "react";

import "./Search.css";

function Search({ posts, updateLists, empty }) {
  const filterPosts = (e, posts, empty) => {
    if (e.target.value.trim() === "") {
      return updateLists(posts, empty);
    }
    let content = e.target.value;
    let updatePosts = posts.filter(post => {
      const { title } = post;
      return title.toLowerCase().search(content.toLowerCase()) !== -1;
    });
    empty = false;
    return updateLists(updatePosts, empty);
  };

  return (
    <div className="Search">
      <input
        onChange={e => filterPosts(e, posts, empty)}
        type="text"
        placeholder="Please Search.."
        name="search"
      />
    </div>
  );
}

export default Search;
