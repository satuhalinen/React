function Post({ id, title, completed }) {
  if (completed !== true) {
    return (
      <>
        <p>{id}</p>
        <h2>{title}</h2>
        <p>{completed}</p>
      </>
    );
  }
}

export default Post;
