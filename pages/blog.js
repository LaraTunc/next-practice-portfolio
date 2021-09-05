import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = ({ slug, title }) => (
	<li>
		<Link as={`/${slug}`} href={`/post?title=${title}`}>
			<a>{title}</a>
		</Link>
	</li>
);

const Blog = () => (
	<Layout title="My Blog">
		<ul>
			<PostLink slug="react-post" title="react" />
			<PostLink slug="angular-post" title="angular" />
			<PostLink slug="html-post" title="html" />
			<PostLink slug="redux-post" title="redux" />
		</ul>
	</Layout>
);

export default Blog;
