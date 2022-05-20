import classes from './BookItem.module.css';
import BookItemForm from './BookItemForm';

const BookItem = (props) => {

  return (
      <li>
        <div>
          <h2>{props.title}</h2>
          <div className={classes.name}>
            <p>{props.name}</p>
          </div>
          <div className={classes.pages}>
            <p>{props.pages}</p>
          </div>
          <div className={classes.releaseDate}>
            <p>{props.releaseDate}</p>
          </div>
          <div className={classes.price}>
            <p>{props.price}</p>
          </div>
          <div className={classes.cover_image}>
            <p>`${props.cover_image}`</p>
          </div>
        </div>
      </li>
    );
};

export default BookItem;
