import React from 'react';
import ReactDOM from 'react-dom/client';
import './myStyle.css';
//import App from './App';
import NewsCatalog from './module/NewsCatalog';

// My first component. When we create a component we create a js function.
// COMPONENT IS ALWAYS STARTS WITH CAPITAL LETTER eg: Greeting 
// Only one element can be returned from a component
//Person and Message are nested components

// Creating an array of book details
const bookarray = [
    {   
        idNo: 1,
        title : 'Interesting Facts For Curious Mindss',
        img :'./Images/book1.jpg', 
        author : 'Jordan Moore',
        Description : 'A murder mystery locked inside a Great American Novel',
        link : 'https://www.amazon.com/Heaven-Earth-Grocery-Store-Novel/dp/0593422945/ref=zg_bs_g_books_sccl_3/130-8594716-9690840?psc=1'},
    {
        idNo: 2,
        title :'Fourth Wing (The Empyrean, 1)',
        img: './Images/book2.jpg',
        author : 'Rebecca Yarros',
        Description : 'A murder mystery locked inside a Great American Novel',
        link : 'https://www.amazon.com/Heaven-Earth-Grocery-Store-Novel/dp/0593422945/ref=zg_bs_g_books_sccl_3/130-8594716-9690840?psc=1'
    },
    {
        idNo: 3,
        title:'The Heaven & Earth Grocery Store: A Novel',
        img: './Images/book3.jpg',
        author: 'James McBride',
        Description : 'A murder mystery locked inside a Great American Novel',
        link : 'https://www.amazon.com/Heaven-Earth-Grocery-Store-Novel/dp/0593422945/ref=zg_bs_g_books_sccl_3/130-8594716-9690840?psc=1'
    }
]
    

function BookList(){
    return (
    <React.Fragment>
    <h1 className ='heading'>NEWS</h1>
    <h4 className = 'heading'>Trust is all that matters</h4>
    <section className='bookList'>   

        {bookarray.map((detail)=> {
            const {img , title , author, Description, link, idNo} = detail;
            return <Book img = {detail.img} title ={detail.title} author = {detail.author} Description = {detail.Description} link ={detail.link}  
            key = {detail.id}/>;

        })}
    </section>
    </React.Fragment>
    );
}
const EventExamples = () =>{
    const handleFormInput = () =>{
        console.log('handle form input');
    };
    const handleButtonClick = () =>{
        alert('handle button Click');
    };
    return (<section>
        <form>
            <h2>Example Form</h2>
            <input type = 'text' name ='example' style = {{margin: '1 rem 0'}} onChange={handleFormInput} />
        </form>
        <button onClick={handleButtonClick}>Click Me!</button>
    </section>);

};


const Book = (props) =>{
    return(
        /* whenever we want to write js inside the component we use curly brackets */
        <article  className='books'>
            <img src ={props.img} alt={props.title} />
            <h1>{props.title}</h1>
            <h4>{props.author.toUpperCase()}</h4>
            <h4>{props.Description}</h4>
            {console.log(props)}
            <button><a href = {props.link}>Buy Me!</a></button>
        </article>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList/>);
