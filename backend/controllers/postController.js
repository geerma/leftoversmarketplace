const express = require("express");
const Post = require("../models/Post");
const asyncHandler = require("express-async-handler");

const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    // res.status(200).json(post)
    const imageUrl = post.pictureURL;
    res.status(200).json({ post: post, url: post.pictureURL });
    // const returnhtml=`<img src="${imageUrl}" width="500" height="500">${post}`
    // res.send(returnhtml)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllPost = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ messgae: error.message });
  }
};

const uploadPost = async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json({ messgae: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("the post has been updated");
    } else {
      res.status(403).json("you can't update other people's post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(200).json("the post has been deleted");
    } else {
      res.status(403).json("you can delete only your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json("Post liked");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  uploadPost,
  getPostById,
  getAllPost,
  updatePost,
  deletePost,
  likePost,
};
