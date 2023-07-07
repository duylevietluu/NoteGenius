'use client'

import {useState} from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';


const PromptCard = ({post,handleTagClick,handleEdit,handleDelete}) => {
  const [copied, setCopied] = useState("");
  const {data: session} = useSession();
  const pathName = usePathname();
  const router = useRouter();
  const pathToProfile = session?.user.id !== post.creator._id ? `/profile/${post.creator._id}` : `profile`;

  const handleCopy = () => {
    navigator.clipboard.writeText(post.prompt);
    setCopied(post.prompt);
    setTimeout(() => setCopied(""), 3000);
  }

  return (
    <div className='prompt_card'>
      <div className="flex justify-between items-start gap-5">
        <div className='flex-1 flex justify-start items-center gap-3'>
          <Link href={pathToProfile}>
            <Image src={post.creator.image}
              alt="user image"
              width={40}
              height={40}
              className='rounded-full object-contain' 
              href={`/profile/${post.creator._id}`}
            />
          </Link>
          
          <Link className='flex flex-col' href={pathToProfile}>
            <h3 className='font-satoshi font-semibold text-teal-400'>
              {post.creator.username}
            </h3>
            <p className='font-inter text-sm text-gray-300'>
              {post.creator.email}
            </p>
          </Link>
        </div>

        <div className='copy_btn' onClick={handleCopy}>
          <Image 
            src={copied === post.prompt ? '/assets/icons/tick.svg' : '/assets/icons/copy.svg'}
            width={12}
            height={12}
            alt="copy icon"
          />
        </div>
      </div>

      <p className='my-4 font-satoshi text-sm text-teal-400 have-new-line'>
        {post.prompt}
      </p>
      <p className='font-inter text-sm purple_gradient cursor-pointer' onClick={() => handleTagClick && handleTagClick(post.tag)}>
        {post.tag}
      </p>

      {session?.user.id === post.creator._id &&  pathName === '/profile' && 
      <div className='mt-5 flex-center gap-4 border-t border-gray-400 pt-3'>
        <p className="font-inter text-sm green_gradient cursor-pointer" onClick={() => handleEdit(post)}>
          Edit
        </p>
        <p className="font-inter text-sm red_gradient cursor-pointer" onClick={() => handleDelete(post)}>
          Delete
        </p>
      </div>}
    </div>
  )
}


export default PromptCard