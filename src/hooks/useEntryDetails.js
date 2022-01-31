import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addEntryRedux, updateEntryRedux } from "../actions/entries.actions";
//import { v4 as uuidv4 } from "uuid"; 
import { closeEditModal } from "../actions/modals.actions";

function useEntryDetails(desc = "", val = "", isExp = true, idd="") {
  // 'desc', 'val' e 'isExp' sao os mesmos valores das linhas abaixo
  const [description, setDescription] = useState(desc);
  const [value, setValue] = useState(val);
  const [isExpense, setIsExpense] = useState(isExp);
  const [id, setId] = useState(idd);
  const dispatch = useDispatch();

  useEffect(() => {
    setDescription(desc);
    setValue(val);
    setIsExpense(isExp);
    setId(idd)
  }, [desc, val, isExp, idd]);

  function updateEntry(id) {
    dispatch(
      updateEntryRedux(id, {
        id,
        description,
        value,
        isExpense,
      })
    );
    dispatch(closeEditModal());
    resetValues();
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var setMath = Math.floor(Math.random() * (max - min)) + min;


    // if (id.has(setMath)) {
    //   console.log('sortado existente: ', setMath);
    //   return getRandomInt;
    // } // se o valor sorteado ja existir

    // console.log('sortado nao existente: ', setMath);
    return setMath;
  }

  function addEntry() {
    dispatch(
      addEntryRedux({
        id: getRandomInt(1, 100000), // 'uuidv4' eh o que gera os id aleatoriamente
                                 // no momento estou utilizando um gerador de numeros aleatorios
        // TODO: ver para adicionar um novo elemento seguindo a ordem dos id ja existentes
        description,
        value,
        isExpense,
      })
    );

    resetValues();
  }

  // function clearEntry() {

  // }

  function resetValues() {
    setDescription("");
    setValue("");
    setIsExpense(true);
    // setId(cont++);
  }

  return {
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense,
    id,
    setId,
    addEntry,
    resetValues,
    updateEntry,
  };
}

export default useEntryDetails;
