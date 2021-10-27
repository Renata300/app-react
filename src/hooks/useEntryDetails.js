import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addEntryRedux, updateEntryRedux } from "../actions/entries.actions";
import { v4 as uuidv4 } from "uuid"; 
import { closeEditModal } from "../actions/modals.actions";

function useEntryDetails(desc = "", val = "", /*dat="",*/ isExp = true, /*idd=""*/) {
  // 'desc', 'val' e 'isExp' sao os mesmos valores das linhas abaixo
  const [description, setDescription] = useState(desc);
  const [value, setValue] = useState(val);
  /*const [date, setDate] = useState(dat);*/
  const [isExpense, setIsExpense] = useState(isExp);
  // const [id, setId] = useState(idd);
  const dispatch = useDispatch();
  //var x = 20;

  useEffect(() => {
    setDescription(desc);
    setValue(val);
    /*setDate(dat);*/
    setIsExpense(isExp);
    // setId(idd)
  }, [desc, val, /*dat,*/ isExp, /*idd*/]);

  function updateEntry(id) {
    dispatch(
      updateEntryRedux(id, {
        id,
        description,
        value,
        /*date,*/
        isExpense,
      })
    );
    dispatch(closeEditModal());
    resetValues();
  }

  function addEntry() {
    dispatch(
      addEntryRedux({
        id: uuidv4(), // esse 'uuidv4' eh o que gera os id aleatoriamente
        // TODO: ver para adicionar um novo elemento seguindo a ordem dos id ja existentes
        description,
        value,
       /*date,*/
        isExpense,
      })
    );
    resetValues();
  }

  function resetValues() {
    setDescription("");
    setValue("");
    /*setDate("");*/
    setIsExpense(true);
    // setId(cont++);
  }

  return {
    description,
    setDescription,
    value,
    setValue,
    /*date,
    setDate,*/
    isExpense,
    setIsExpense,
    // id,
    // setId,
    addEntry,
    updateEntry,
  };
}

export default useEntryDetails;
