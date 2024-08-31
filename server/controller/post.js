function PostRepository() {
  async function getPosts(connection, track) {
    try {
      const query = `select * from posts where track = ?`;
      const result = await connection.query(query, track);
      return result;
    } catch (error) {
      console.error(`mysql db error: ${error}`);
    }
  }

  async function addPost(connection, postInfo) {
    try {
      const query = `insert into posts(author, passwd, detail, track) values(?, ?, ?, ?)`;
      const result = await connection.query(query, postInfo);
      return result;
    } catch (error) {
      console.error(`mysql db error: ${error}`);
    }
  }
  return {
    getPosts,
    addPost,
  };
}

module.exports = PostRepository();
