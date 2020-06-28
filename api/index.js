"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const songs = require("./songs.json");

let nextId = 41;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
  next();
});

app.get("/", (req, res) => {
  res.send(songs);
});

app.post("/", (req, res) => {
  songs[req.body.genre] = [];
  songs.namesOfUsersPlaylists.push(req.body.genre);
  res.send(songs);
});

app.put("/", (req, res) => {
  songs[req.body.nameOfPlaylist].push({
    id: nextId,
    name: req.body.songName,
    author: req.body.artistName,
  });
  nextId = nextId + 1;
  res.json(songs);

  //     let song = songs.find(song => song.id == req.params.id);
  //     if (!song) return res.sendStatus(404);
  //     song.name = req.body.name || song.name;
  //     song.author = req.body.author || song.author;
  //     song.genre = req.body.genre || song.genre;

  //     res.json(song);
});

app.delete("/api/songs", (req, res) => {
  if (req.body.id && req.body.playlistName) {
    songs[req.body.playlistName] = songs[req.body.playlistName].filter(
      (song) => song.id !== req.body.id
    );
    res.send(songs);
  } else if (req.body.deletedPlaylist) {
    delete songs[req.body.deletedPlaylist];
    songs.namesOfUsersPlaylists = songs.namesOfUsersPlaylists.filter(
      (playlist) => playlist !== req.body.deletedPlaylist
    );

    res.send(songs);
    //     let index = songs.findIndex(song => song.id == req.params.id);

    //     if (index === -1) return res.sendStatus(404);

    //     songs.splice(index, 1);

    //     res.sendStatus(204);
  }
});

app.listen(3006, "localhost");
