import ReactDOM from "react-dom/client";
import Carousel from "./carousel/Carousel";

const root = ReactDOM.createRoot(document.getElementById("root"));

const slidesData = [
    {
    title: 'We have a very hot summer',
    image: '/images/hot-summer-1.jpg'
},
{
    title: 'We have nice weather',
    image: '/images/hot-summer-2.jpg'
},
{
    title: 'We have a super vacation',
    image: '/images/hot-summer-3.jpg'
},
]

root.render(<Carousel data={slidesData}/>);
