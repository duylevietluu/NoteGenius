'use client';

import React, { useEffect, useState } from 'react'

import PromptCard from './PromptCard';

const PromptCardList = ({data, handleTagClick, searchText}) => {
  if (!data || typeof data.filter !== 'function') return (
    <div className="prompt_layout">
      <div className='head_text text-center text-white'>Loading data, reload if needed...</div>
    </div>
  );
  return (
    <div className="mt-16 prompt_layout">
      {data.filter(post => 
          post.tag.toLowerCase().includes(searchText.toLowerCase()) 
        || post.creator.username.toLowerCase().includes(searchText.toLowerCase())
        || post.prompt.toLowerCase().includes(searchText.toLowerCase())
      ).map((post) => (
        <PromptCard 
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  ) 
}

const Feed = () => {
  const [searchText, setSearchText] = useState(''); 
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async() => {
      const res = await fetch('/api/prompt');
      const data = await res.json();
      setPosts(data);
    }
    fetchPosts();
  },[]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  }

  const handleTagClick = (tag) => {
    setSearchText(tag);
  }

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input 
          type="text" 
          placeholder='Search for a tag or a username' 
          value={searchText} 
          onChange={handleSearchChange} 
          required 
          className='search_input peer'
        />
      </form>

      <PromptCardList
        data = {posts}
        handleTagClick = {handleTagClick}
        searchText = {searchText}
      />
    </section>
  )
}

export default Feed