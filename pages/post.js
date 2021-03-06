import Layout from '../components/Layout';
import { withRouter } from 'next/router';

const Post = ({ router }) => (
	<Layout title={router.query.title}>
		<p style={{ width: '80vw' }}>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
			veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
			commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
			velit esse cillum dolore eu fugiat nulla pariatur.
		</p>
	</Layout>
);

export default withRouter(Post);
