import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = ({ title }) => (
	<li>
		<Link href={`/post?title=${title}`}>
			<a>{title}</a>
		</Link>
	</li>
);

const Blog = () => (
	<Layout title="My Blog">
		<ul>
			<PostLink title="react" />
		</ul>
		<ul>
			<PostLink title="angular" />
		</ul>
		<ul>
			<PostLink title="html" />
		</ul>
		<ul>
			<PostLink title="redux" />
		</ul>
	</Layout>
);

export default Blog;
