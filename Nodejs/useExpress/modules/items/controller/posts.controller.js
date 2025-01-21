let Posts = [
  {
    id: 1,
    name: "post 1",
    description: "post 1 description",
  },
  { id: 2, name: "post 2", description: "post 2 description" },
];

const getPosts = (req, res) => {
  if (req.query.reversed) {
    const reversedPosts = [...Posts].reverse();
    return res.status(200).send(reversedPosts);
  } else if (req.query.search) {
    const filteredPosts = Posts.find((post) => post.id === +req.query.search);
    return res.status(200).send(filteredPosts);
  }
  res.status(200).send(Posts);
};
const addPosts = (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res
      .status(400)
      .send({ error: "Invalid input. 'name' and 'description' are required." });
  }
  const newPost = {
    id: Posts.length ? Posts[Posts.length - 1].id + 1 : 1,
    name,
    description,
  };
  Posts.push(newPost);
  res.status(201).send(newPost);
};
const updatedPost = (req, res) => {
  const { id } = req.params;
  const postIndex = Posts.findIndex((post) => post.id === parseInt(id));
  if (postIndex === -1) {
    return res.status(404).send({ error: "post not found." });
  }
  const { name, description } = req.body;
  if (!name || !description) {
    return res
      .status(400)
      .send({ error: "Invalid input. 'name' and 'description' are required." });
  }
  Posts[postIndex] = { ...Posts[postIndex], name, description };
  res.status(200).send(Posts[postIndex]);
};

const deletedPost = (req, res) => {
  const { id } = req.params;
  const postIndex = Posts.findIndex((post) => post.id === parseInt(id));
  if (postIndex === -1) {
    return res.status(404).send({ error: "post not found." });
  }
  Posts.splice(postIndex, 1);
  res.status(200).send(Posts);
};

export { getPosts, addPosts, updatedPost, deletedPost };
