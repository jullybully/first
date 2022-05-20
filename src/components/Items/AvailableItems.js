import classes from './AvailableItems.module.css';
import Card from '../Design/Card';
import BookItem from './BookItem/BookItem';
const DUMMY_BOOKS = [
  {
    "id": 1,
    "author_id": 1,
    "title": "Oliver Twist",
    "name": "Charles Dickens",
    "cover_image": "",
    "pages": 234,
    "price": "34.69",
    "releaseDate": "1839",
    "isbn": "wt345"
  },
  {
    "id": 2,
    "author_id": 1,
    "title": "Hard Times",
    "name": "Charles Dickens",
    "cover_image": "",
    "pages": 300,
    "price": "12.49",
    "releaseDate": "1854",
    "isbn": "jk654"
  },
  {
    "id": 3,
    "author_id": 3,
    "title": "Hamlet",
    "name": "William Shakespeare",
    "cover_image": "",
    "price": "24.45",
    "pages": 160,
    "releaseDate": "1603",
    "isbn": "po789"
  },
  {
    "id": 4,
    "author_id": 2,
    "name": "Stephen King",
    "title": "IT",
    "cover_image": "",
    "price": "45.69",
    "pages": 500,
    "releaseDate": "2017",
    "isbn": "yu098"
  },
  {
    "id": 5,
    "author_id": 4,
    "title": "Norwegian Wood",
    "name": "Haruki Murakami",
    "cover_image": "http://t1.gstatic.com/images?q=tbn:ANd9GcQvJJDi2mzwg9v_PlmKYL31gXIz0kvAObJak7DVFPcD_mJTIyec",
    "price": "34.69",
    "pages": 296,
    "releaseDate": "1987",
    "isbn": "hj846"
  },
  {
    "id": 6,
    "author_id": 4,
    "title": "Kafka on the Shore",
    "name": "Haruki Murakami",
    "cover_image": "http://t0.gstatic.com/images?q=tbn:ANd9GcRHFU_j93PPsbQGqoaZJnHH6-Emk_sIxG823SkoRTL0nvdEP41f",
    "price": "34.69",
    "pages": 505,
    "releaseDate": "2002",
    "isbn": "op012"
  },
  {
    "id": 7,
    "author_id": 4,
    "title": "After Dark",
    "name": "Haruki Murakami",
    "cover_image": "http://t3.gstatic.com/images?q=tbn:ANd9GcQBMNA8A19vQpNY4bkgadsLhiRUFqBKwKAA6ANrw8VEtOiPrYQJ",
    "price": "34.69",
    "pages": 208,
    "releaseDate": "2004",
    "isbn": "cv456"
  },
  {
    "id": 8,
    "author_id": 4,
    "title": "1Q84",
    "name": "Haruki Murakami",
    "cover_image": "http://t0.gstatic.com/images?q=tbn:ANd9GcTBQZSg-b2LFkLlt9fWndS1w8SONabDZBHf0dtdb3-bqcuKxduL",
    "price": "34.69",
    "pages": 928,
    "releaseDate": "2009",
    "isbn": "al207"
  }
];

const ItemsAbout = () => {

  const bookList = DUMMY_BOOKS.map((book) => (
    <BookItem
    key={book.id}
    title={book.title}
    name={book.name}
    pages={book.pages}
    releaseDate={book.releaseDate}
    price={book.price}
    cover_image={book.cover_image}
    />
  ));
  return (
    <section className={classes.books}>
      <Card>
        <ul>
          {bookList}
        </ul>
      </Card>
    </section>
 );
};

export default ItemsAbout;
