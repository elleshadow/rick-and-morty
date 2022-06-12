import React, {useState, useEffect} from 'react';
import {getCharacters} from "../classes/apiEndpoints"
import {CharacterSmall} from '../components/CharacterSmall';
import '../styles/VarientContainer.scss'

export function VarientContainer(props) { 
  const [id, setID] = useState('') 
  const [name, setName] = useState('')
  const [charactersInfo, setCharactersInfo] = useState({})
  const [currentCharacters, setCurrentCharacters] = useState([])
  const [characterCards, setCharacterCards] = useState([])
  
  const getVatientInfo = async () => {
    const names = name.split(" ")
    for(let i in names) {
      console.log("searching for:", names[i])
      await getCharacters(null, `?name=${names[i]}`)
      .then(result => {
        setCharactersInfo(result.info)
        setCurrentCharacters(prevCharacters => [...prevCharacters, ...result.results])
    })
    .catch(error => console.log('error', error));
    }
    
  }

  const createCharacterCards = () => {
    const allCards = currentCharacters.map(character => {
      if(character.id != id) return <CharacterSmall key={character.id} character={character} />
    })
    const characterCards = [...new Set(allCards)];
    setCharacterCards(characterCards)
  }
 
  useEffect(() => { 
    console.log("props for varient Container", props)
    console.log("varient Container for", props.name)
    setID(props.id)
    setName(props.name)
 
    return(() => { 
    console.log("VarientContainer will unmount") 
    }) 
  }, []) 
 
  useEffect(() => { 
    name && console.log("VarientContainer name did update", name) 
    name && getVatientInfo()
  }, [name])
  
  useEffect(() => { 
    console.log("VarientContainer characterInfo did update", charactersInfo) 
    createCharacterCards()
  }, [charactersInfo]) 
 
  return ( 
    <div className="VarientContainer"> 
      <p>Related to: {name}</p> 
      <div className="wrapper">
            {characterCards}
      </div>
    </div> 
  ); 
} 

