import classes from './BookItemForm.module.css';
import Input from '../../Design/Input';

const BookItemForm = (props) => {


  return (
    <form className={classes.form}>
    <Input label="Amount" input={{
      id: 'amount',
      type: 'number',
      min: '1',
      max: '9',
      step: '1',
      defaultValue: '1'
    }}/>
    <button> Add</button>
    </form>

  );
};
