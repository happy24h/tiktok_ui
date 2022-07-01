import Header from '~/components/Layout/components/Header';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
    console.log('---- children', children);
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">Layout{children} Layout</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
