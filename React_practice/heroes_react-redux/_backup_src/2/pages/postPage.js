import PostItem from '../components/PostItem/PostItem';
import { useFetchAllPostsQuery } from '../redux/testApi';

const PostPage = () => {
  const { data: posts, isLoading } = useFetchAllPostsQuery();
  return (
    <ul>
      {isLoading
        ? 'Loading...'
        : posts?.map((post) => (
            <PostItem title={post.title} body={post.body} />
          ))}
    </ul>
  );
};

export default PostPage;
