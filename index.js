require("dotenv").config();
const express = require("express");

const app = express();
const port = 5000;

const githubData = {
  login: "varun2138",
  id: 108220102,
  node_id: "U_kgDOBnNOxg",
  avatar_url: "https://avatars.githubusercontent.com/u/108220102?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/varun2138",
  html_url: "https://github.com/varun2138",
  followers_url: "https://api.github.com/users/varun2138/followers",
  following_url:
    "https://api.github.com/users/varun2138/following{/other_user}",
  gists_url: "https://api.github.com/users/varun2138/gists{/gist_id}",
  starred_url: "https://api.github.com/users/varun2138/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/varun2138/subscriptions",
  organizations_url: "https://api.github.com/users/varun2138/orgs",
  repos_url: "https://api.github.com/users/varun2138/repos",
  events_url: "https://api.github.com/users/varun2138/events{/privacy}",
  received_events_url: "https://api.github.com/users/varun2138/received_events",
  type: "User",
  site_admin: false,
  name: null,
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 20,
  public_gists: 0,
  followers: 1,
  following: 1,
  created_at: "2022-06-26T11:03:01Z",
  updated_at: "2023-06-10T16:02:36Z",
};

app.get("/", (req, res) => {
  res.send("home page");
});

app.get("/login", (req, res) => {
  res.send("login page");
});
app.get("/register", (req, res) => {
  res.send(`<h1>register here</h1>`);
});

app.get("/github", (req, res) => {
  res.json(githubData);
  ``;
});

app.listen(process.env.PORT, () => {
  console.log(`the web app i available at port ${process.env.port}`);
});
