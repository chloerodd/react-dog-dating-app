import { useState } from "react";
import Dog from "./dog"

function Dogs() {
    const [dogs, setDogs] = useState([{
        name: "Duke",
        age: 2,
        breed: "Havanese",
        favoriteToy: "Anything that's his sister's toy",
        size: "Medium",
        gender: "Male"
    }]);

    const [dogForm, setDogForm] = useState(
        {
            name: "",
            age: 1,
            breed: "",
            favoriteToy: "",
            size: "Medium",
            gender: ""
        }
    )

    function handleChange(e) {
        console.log(e)
        setDogForm((previousFormState) => ({
            ...previousFormState,
            [e.target.name]: e.target.value
        }))
        console.log(dogForm)
    }
function handleSubmit(e) {
    e.preventDefault()
    setDogs((startingDogs) =>([...startingDogs, dogForm]))
    e.target.reset();
}
    return (
        <>
            <h2>Here are my dogs</h2>
            {dogs.map((dog, idx) => {
                return(
                    <div key={idx}>
                        <Dog dog={dog} />
                    </div>
                )
            })}
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Name: </span>
                    <input
                        type="text"
                        placeholder="Dog's name"
                        name="name"
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <span>Age: </span>
                    <input
                        type="number"
                        placeholder="Dog's name"
                        name="age"
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <span>Breed: </span>
                    <input
                        type="text"
                        placeholder="Poodle"
                        name="breed"
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <span>Favorite Toy: </span>
                    <input
                        type="text"
                        placeholder="Something chewy"
                        name="favoriteToy"
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <span>Size:</span>
                    <select name="size" onChange={handleChange}>
                        <option value="Tiny">Tiny</option>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                        <option value="Huge">HUGE</option>
                    </select>
                </label>
                <label >
                    <span>Gender: </span>
                    <select name="gender" onChange={handleChange}>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                    </select>
                </label>
                <button>Submit Form</button>
            </form>
        </>
    )
}

export default Dogs;