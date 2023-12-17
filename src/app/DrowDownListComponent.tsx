import { DropDownList } from '@progress/kendo-react-dropdowns'

export default function DropDownListComponent() {
  const categories = ['Pizza', 'Burger', 'Pasta', 'Burrito']

  return (
    <>
      <div>Choose food category</div>
      <DropDownList
        style={{ width: '300px' }}
        data={categories}
        defaultValue="Pizza"
      />
    </>
  )
}
