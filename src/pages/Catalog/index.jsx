import { useParams } from 'react-router-dom'
import {Burgers} from '../../components/Burgers'
import{Basket} from '../../pages/Basket'

export const CatalogPage = () => {
  const params = useParams()

  console.log({ params });

  return (
    <div>
      <h1>Category: {params.category}</h1>
      <p>Catalog</p>
      <Basket/>
      <Burgers/>
   
    </div>
  )
}