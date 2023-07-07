import React from 'react'
import Link from 'next/link'

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing posts on your profile and get more followers.
      </p>
      <form onSubmit={handleSubmit} className="mt-10 w-full max-w-2xl flex flex-col gap-7 bg-gray-800 bg-opacity-20 rounded-lg shadow-lg p-6">
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-300'>
            Your Content
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder='Write your post here...'
            className='form_textarea bg-gray-700 text-white'
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-300'>
            Tag
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder='(#LVLD #note_app #nextjs)'
            required
            className='form_input bg-gray-700 text-white'
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href='/' className='text-teal-500 text-sm'>
            Cancel
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-teal-500 rounded-full text-white'
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>

    </section>
  )
}

export default Form