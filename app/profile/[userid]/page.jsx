'use client';

import {useState, useEffect} from 'react';
import Profile from '@components/Profile';
import { useParams, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

const OtherProfile = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const { userid } = useParams();
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session && session.user.id === userid) {
      router.push('/profile');
    }
  }, [session]);

  useEffect(() => {
    const fetchUserAndPost = async() => {
      try {
        const res0 = await fetch(`/api/users/${userid}`);
        const user = await res0.json();
        setUser(user);
        const res1 = await fetch(`/api/users/${userid}/posts`);
        const data = await res1.json();
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUserAndPost();
  },[]);

  return (
    <Profile 
      name={user?.username} 
      desc={`Welcome to ${user?.username}'s profile page. Here are their posts:`}
      data={posts}
    />
  )
}

export default OtherProfile