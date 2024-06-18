import type { MenuItem } from '../types/index'


interface MenuItemProps {
  item: MenuItem
  addItem: (item: MenuItem) => void
}


const MenuItems: React.FC<MenuItemProps> = ({
  item,
  addItem
}) => {
  return ( 
    <button 
      className='border-2 border-teal-200 hover:bg-teal-100 hover:border-black w-full flex justify-between p-3 rounded-lg shadow-lg'
      onClick={() => addItem(item)}
      >
      <p className='text-lg'>{item.name}</p>
      <p className='font-bold'>S/.{item.price}</p>
    </button>
   );
}
 
export default MenuItems;