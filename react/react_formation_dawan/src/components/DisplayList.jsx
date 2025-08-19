function DisplayList(){

    const users = [
        { id: 1, name: "John", age: 30, city: "New York" },
        { id: 2, name: "Jane", age: 25, city: "Los Angeles" },
        { id: 3, name: "Bob", age: 40, city: "Chicago" },
    ];
 
    const legumes = ["carottes", "oignons", "poivrons"];

    return (
        <>
            <h1> Liste </h1>

            {users.map((user) => 
                <ul key={user.id}>
                    <li>{user.name}</li>
                    <li>{user.age}</li>
                    <li>{user.city}</li>
                </ul>
            )}

            <h2> Liste de legume </h2>

            {legumes.map((legume, index) => 
                <ul>
                    <li key={index}>{legume}</li>
                </ul>
            )}
        </>
    );
}

export default DisplayList;