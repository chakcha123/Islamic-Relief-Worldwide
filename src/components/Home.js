import Card from "./comp/Cart.js";
import '../styles/home.css';
import banner from '../assets/banners/home.PNG'
import Banner from './comp/banner'


function Home() {
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  return (
   <div>
        <Banner name='Recent News' 
      title='We Keep You Updated' 
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
       Phasellus vehicula dui at ex laoreet, id dictum velit tristique' 
      cover={banner} />

        <div className="card-container">
            {posts.map((post) => (
                    <Card key={post.id} title={post.Title} text={post.Text} img={post.Img} />
                )
                )} 
        </div>

        

   </div>
  );
}

export default Home;
