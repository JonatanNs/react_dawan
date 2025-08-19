import { useState } from "react";

function Form(){
    const [name, setName] = useState("");
    const [checked, setChecked] = useState("");

    const handleChange = (e) => {
        console.log(e);
        setName(e.target.value);
    }
    return (
        <>
            <h1>Les formulaires</h1>
            <h2>Les champs controlés</h2>
            <p>
               Sur React, nous avons une concept que nous pouvons appelés 'les champs controlés'.
               En utlisant le <strong>OnChange()</strong>d'une input et le hook useState. 
               Ainsi, nous pouvons mettre à jour une variable lié à l'input à chaque fois chaque changement 
               (donc à chaque qu'un  caractère est ajouté ou supprimé)
            </p>

            <h2>Exemple</h2>
            <input type="text" onChange={handleChange} value={name}/>
            <p>Nom entré : {name}</p>

            <input type="checkbox" onChange={(e) => setChecked(e.target.checked)} value={checked}/>
            {checked && <div>Case coché ! Element affiché </div>}
        </>
    )
}

export default Form;