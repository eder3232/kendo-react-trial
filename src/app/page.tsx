import Image from 'next/image'
import DropDownListComponent from './DrowDownListComponent'

export default function Home() {
  const categories = ['Pizza', 'Burger', 'Pasta', 'Burrito']
  return (
    <main>
      <DropDownListComponent />
    </main>
  )
}
