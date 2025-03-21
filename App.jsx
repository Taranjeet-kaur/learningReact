import React from "react";
import { hydrateRoot } from "react-dom/client";

// RENDEREING A LIST OF ELEMENTS IN JSX
// function Test(){

//   const animals = ["Lion", "Cow", "Snake", "Lizard"]

//   return (
//   <>
//     <h1>Animals:</h1>
    
//     <ul>
//       {animals.map((animal) => {
//         return <li key={animal}>{animal}</li>
//       })}
//     </ul>
//   </>
//   )
// }
// function Test(){

//   const animals = ["Lion", "Cow", "Snake", "Lizard"]
//   const renderAnimals = animals.map((animal) => {
//     return <li key={animal}>{animal}</li>
//   })
//   return (
//   <>
//     <h1>Animals:</h1>
    
//     <ul>
//       {renderAnimals}
//     </ul>
//   </>
//   )
// }

// ***RENDERING A LIST OF COMPONENTS IN JSX

// function ListItem(props){
//   return <li>{props.item}</li>
// }

// function List(props){
//   return (
//     <ul>
//       {props.items.map((item)=>{
//         return <ListItem key={item} item={item}/>
//       })}
//     </ul>
//   )
// }

// function Test(){
//   const items = ['tea','coffee','towel','paper']

//   return(
//     <>
//       <h1>
//         ITEMS:
//       </h1>
//       <List items={items}/>
//     </>
//   )
// }

// export default Test;

// *** CONDITIONALLY RENDERING UI ***

// function FruitList(){
//   const fruits = ['Apple', 'Banana', 'Avocado', 'Cherry']
//   const renderFruits = fruits.map((fruit)=>{
//     return (
//       <li key = {fruit}>
//         {fruit.startsWith("A")? <strong>{fruit}</strong> : fruit}
//       </li>
//     )
//   })
//   return (
//     <div>
//       <h1>Fruits:</h1>
//       <ol>
//         {renderFruits}
//       </ol>
//     </div>
//   )
// }

// export default FruitList;



// **RENDERING A LIST OF COMPONENTS IN JSX

// export const people = [{
//     id: 0, // Used in JSX as a key
//     name: 'Creola Katherine Johnson',
//     profession: 'mathematician',
//     accomplishment: 'spaceflight calculations',
//     imageId: 'MK3eW3A'
//   }, {
//     id: 1, // Used in JSX as a key
//     name: 'Mario José Molina-Pasquel Henríquez',
//     profession: 'chemist',
//     accomplishment: 'discovery of Arctic ozone hole',
//     imageId: 'mynHUSa'
//   }, {
//     id: 2, // Used in JSX as a key
//     name: 'Mohammad Abdus Salam',
//     profession: 'physicist',
//     accomplishment: 'electromagnetism theory',
//     imageId: 'bE7W1ji'
//   }, {
//     id: 3, // Used in JSX as a key
//     name: 'Percy Lavon Julian',
//     profession: 'chemist',
//     accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
//     imageId: 'IOjWm71'
//   }, {
//     id: 4, // Used in JSX as a key
//     name: 'Subrahmanyan Chandrasekhar',
//     profession: 'astrophysicist',
//     accomplishment: 'white dwarf star mass calculations',
//     imageId: 'lrWQx8l'
//   }];
  

//   export default function List(){
//     // const listItems = people.map(person=>
//     //     <li>{person}</li>
//     // )
//     const chemists = people.filter(person=>
//         person.profession === 'chemist'
//     )
//     const listItems = chemists.map(person=>
//         <>
        
//         <li>
//             <img src="" alt="" />
//         </li>
//         <p>
//             <b>{person.name}:</b>
//             {' '+ person.profession + ' '}
//             known for {person.accomplishment}
//         </p>
//         </>
//     )
//     return <ul>{listItems}</ul>
//   }




// *** FUNCTION AS PROPS ***
function Button({text = "click me", color="blue", fontSize= 12, handleClick}){
    const buttonStyle = {
        color: color,
        fontSize: fontSize + 'px'
    }

    return (
        <button onClick={handleClick} style={buttonStyle}>{text}</button>
    )
}

export default function App(){
    const handleButtonClick = (url) => {
        window.location.href = url
    }
    return(
        <div>
            <Button handleClick={()=>handleButtonClick('https://www.google.com')} />
        </div>
    )
}