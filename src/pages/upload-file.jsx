import React from 'react'
import styles from "./styles.module.css"
import { useState } from 'react';

export const UploadPage = () => {
    const [description, setDescription] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [checked, setChecked] = useState(false);

  const handleChecked = (e) => {
    setDisabled(!disabled);
  };

function handleSubmit(e){
  //e.preventDefault();

if(!description) return;

  setDescription('');
  setDisabled(true)
  setChecked(false)

}



return (
    <>
<form className={styles.form} onSubmit={handleSubmit}> 
  <h3>placeholder</h3>
  <textarea  className={styles.input} type="text" placeholder="JSON..." value={description} onChange={(e) => setDescription(e.target.value)}/>
  <button className={styles.button} disabled={disabled}>Add</button>
  <input type='checkbox' id='checkbox' value={checked} onChange={(e) => setDisabled(!disabled)}/>
  {disabled ? <label for="checkbox">Vse verno?</label> : null}
  </form>
  </>
)
}