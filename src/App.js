
import { useEffect, useRef, useState } from 'react'
import { Listbox } from '@headlessui/react'
import axios from 'axios'
import TextInput from './components/TextInput';
import PrimaryButton from './components/Button/PrimaryButton';


const people = [
  { id: 1, name: 'Durward Reynolds', unavailable: false },
  { id: 2, name: 'Kenton Towne', unavailable: false },
  { id: 3, name: 'Therese Wunsch', unavailable: false },
  { id: 4, name: 'Benedict Kessler', unavailable: true },
  { id: 5, name: 'Katelyn Rohan', unavailable: false },
]


function App() {

  const [product, setProduct] = useState('')
  // const productNameRef = useRef('');


  const login = async () => {

    await axios.post('/api/login', {
      name: product
    }).then(res => {
      console.log('logged')

    })
    console.log(product)
  }

  const [selectedPerson, setSelectedPerson] = useState(people[0])
  // useEffect(()=>{
  //   productNameRef.current = product
  //   console.log(product)
  // },[product])
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100vh"
    }}
      className='w-3/4'
    >
      <div className='w-full lg:w-1/2 p-4 border-2 border-gray-100 rounded-lg'>
        {/* <div className='flex flex-col p-2'>
          <label className='mb-2'>Food</label>
          <input className='p-2' placeholder='Enter food name' />
        </div> */}


        <TextInput textLabel={'Name of product'}
          placeholder={'Enter the name of the product'}
          value={product}
          onChange={e => setProduct(e.target.value)}
        />
        {/* price */}

        <TextInput textLabel={'Enter price'} placeholder={'Enter the price of the product'} />

        <TextInput textLabel={'Quantity'} placeholder={'Enter the quantity of the product'} />
        <PrimaryButton onClick={() => login()} />



      </div>
    </div>
  );
}

export default App;
