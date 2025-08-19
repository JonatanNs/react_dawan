function JsxTheorie() {
  const title = "<strong>Bienvenue sur notre application React !</strong>";
  const number = 1;

  const imgSrc = "/vite.svg";

  const myStyle = {color: "red", fontSize: "2rem"};

  const user = {
    firstName : "John",
    lastName : "Doe"
  }

  const handleclick = () => {
    alert("Cliquez !");
  };

  const handleclickWithParam = (number) => {
    alert("Cliquez ! Nombre passeé en paramètre");
  };

  return (
    <>
      <h1 style={{color : "red"}}>{title}</h1>
      <p className='myClass' style={myStyle}>Nombre : {number}</p>
      <p>Nombre : {number+1}</p>

      <img src={imgSrc} alt="Vite logo" />

      <p dangerouslySetInnerHTML={{ __html: title }}></p> {/*  Pour afficher du html. Le faire seuelement sur les données controller */}

      {/** Affichage conditionnel */}

      {user && (<p>Prénom : {user.firstName}, nom : {user.lastName}</p>)}
      {user ? (<p>Prénom : {user.firstName}, nom : {user.lastName}</p>) : (<p>Utilisateur non trouvé</p>)}

      <button onClick={handleclick}>Cliquez !</button>
      <button onClick={() => handleclickWithParam(number)}>Cliquez !</button>
      <button onClick={() => alert("Cliquez !")}>Cliquez !</button>

      {/** Composant enfant */}
      <ComposantEnfant data='Donné passé par le composant parent !'>
        Propriété children se passe ICI
      </ComposantEnfant>
      
    </>
  );
}

export default JsxTheorie

const ComposantEnfant = ({
  data = "Donné par défault", 
  children,
  color,
  ...props
}) => {

  return (
    <>
      <h1 style={{color : color}} {...props}>
        Composant enfant
      </h1>
      <p>{data}</p>
      <p>Propriété children : {children}</p>
    </>
  );
}