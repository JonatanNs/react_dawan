import axios from "axios";

export const FormProduct = ({ setProducts }) => {
  const {register, handleSubmit, formState : {errors}} = useForm();

  /* const submit = (e) => {
    e.preventDefault();
    console.log("submit déclanché ");

    const formData = new FormData(e.target);
    console.log(formData);

    const newProduct = {
      name: formData.get("name"),
      price: formData.get("price"),
      number: formData.get("number"),
      category: formData.get("category")
    }; 

    axios
      .post("http://localhost:3001/products", newProduct)
      .then((resp) => {
        console.log(resp);
        setProducts((prev) => [...prev, resp.data]);
      })
      .catch((e) => console.log(e));
  }; */

  const submit = (data) => {
    console.log(data);
    axios
      .post("http://localhost:3001/products", data)
      .then((resp) =>{
        console.log(resp);
        setProducts((prev) => [...prev, resp.data]);
      })
      .catch((e) => console.group(e));
  }

  useEffect(() =>{
    console.log(errors);
  }, [errors]);

    return (
        <>
            <form onSubmit={handleSubmit(submit)}>
               <span>{errors.name && errors.name.message}</span>
                <input type="text" placeholder="nom" 
                {...register("name", 
                  {required : "Le nom est obligatoire", 
                    maxLength: {
                      value : 10, 
                      message :"Le nom ne dois pas contenir plus de 10 caractères"
                    }
                  }
                )}/>

                <span>{errors.price && errors.price.message}</span>
                <input type="number" placeholder="prix" {
                  ...register("price", {
                    required : "Le nom est obligatoire", 
                    min: {
                      value : 0, 
                      message : "Le prix doit être supérieur à 0."}
                  }
                )}/>

                <span>{errors.number && errors.number.message}</span>
                <input type="text" placeholder="quantité" {
                  ...register("number", {
                    required : "La quantité est obligatoire"
                  }
                )}/>
                <span>{errors.category && errors.category.message}</span>
                <input type="text" placeholder="catégorie" {
                  ...register("category", {
                  required : "La catégorie est obligatoire",
                  }
                )}/>

                <button type="submit">Soumettre</button>
            </form>
        </>
  );
}