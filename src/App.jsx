import { useState } from 'react';
import './App.css';

function App() {
  const [newNumber, setNewNumber] = useState('');
  const [oldNumber, setOldNumber] = useState('');
  const [history, setHistory] = useState('');
  const [operator, setOperator] = useState('');

  /**
   * handle click on number
   * it takes number as input
   */
  const handleNumber = (e) => {
    setNewNumber(newNumber + e.target.innerText);
  };

  /**
   * It clears all variables
   */
  const handleAllClear = () => {
    setNewNumber('');
    setHistory('');
    setOldNumber('');
    setOperator('');
  };

  /**
   * it removes last enter number
   */
  const handleBackspace = () => {
    setNewNumber(newNumber.slice(0, -1));
  };

  /**
   * it handle clicks on operator and calculate value
   * @param {*} e
   */
  const handleOperator = (e) => {
    setHistory(history + newNumber + e.target.innerText);
    setOldNumber(newNumber);
    setOperator(e.target.innerText);
    setNewNumber('');
  };

  /**
   * It Calculates the value
   * @param {*} e
   */
  const handleCalculate = (e) => {
    setHistory(history + newNumber + e.target.innerText);
    let res = 0;
    switch (operator) {
      case '+':
        res = Number(oldNumber) + Number(newNumber);
        break;
      case '-':
        res = Number(oldNumber) - Number(newNumber);
        break;
      case '*':
        res = Number(oldNumber) * Number(newNumber);
        break;
      case '/':
        res = Number(oldNumber) / Number(newNumber);
        break;
      case '%':
        res = (Number(oldNumber) * Number(newNumber)) / 100;
        break;
    }
    setOldNumber('');
    setNewNumber(res);
  };

  return (
    <>
      <div className='calculator'>
        <div className='display'>
          <div className='history'>{history}</div>
          <div className='result'>{newNumber}</div>
        </div>
        <div className='keys'>
          {/* Row 1 */}
          <button className='operator' onClick={handleAllClear}>
            AC
          </button>
          <button className='operator' onClick={handleBackspace}>
            &larr;
          </button>
          <button className='operator' onClick={handleOperator}>
            %
          </button>
          <button className='operator' onClick={handleOperator}>
            /
          </button>
          {/* Row 2 */}
          <button className='number' onClick={handleNumber}>
            7
          </button>
          <button className='number' onClick={handleNumber}>
            8
          </button>
          <button className='number' onClick={handleNumber}>
            9
          </button>
          <button className='operator' onClick={handleOperator}>
            *
          </button>
          {/* Row 3 */}
          <button className='number' onClick={handleNumber}>
            4
          </button>
          <button className='number' onClick={handleNumber}>
            5
          </button>
          <button className='number' onClick={handleNumber}>
            6
          </button>
          <button className='operator' onClick={handleOperator}>
            -
          </button>
          {/* Row 4 */}
          <button className='number' onClick={handleNumber}>
            1
          </button>
          <button className='number' onClick={handleNumber}>
            2
          </button>
          <button className='number' onClick={handleNumber}>
            3
          </button>
          <button className='operator' onClick={handleOperator}>
            +
          </button>
          {/* Row 5 */}
          <button className='number' onClick={handleNumber}>
            0
          </button>
          <button className='number' onClick={handleNumber}>
            .
          </button>
          <button className='operator' onClick={handleCalculate}>
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
