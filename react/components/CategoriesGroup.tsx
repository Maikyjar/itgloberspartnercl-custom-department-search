import React from 'react';
import { useCssHandles } from 'vtex.css-handles';
import './styles.css';

type Props = {
  categories: [Category],
  setCategoriesDropdown: any,
  setDropdown: any
}

type Category = {
  id: number,
  name: string,
  slug: string,
  children: any
}

const CategoriesGroup = ({categories, setCategoriesDropdown, setDropdown}: Props) => {
  const CSS_HANDLES = [
    "category__group-ul",
    "category__group-a",
    "category__group-li"
  ]
  const handles = useCssHandles(CSS_HANDLES)
  const categoriesOptions: any = categories?.map((category: Category) => {
    return (
      <li
        className={`${handles["category__group-li"]}`}
        key={category.id}
      >
        <a href={`/${category.slug}?_q=${category.slug}&map=ft`} className={`${handles["category__group-a"]}`} >{category.name}</a>
      </li>
    )
  })
  return (
    <ul className={`${handles["category__group-ul"]}`}
      onMouseLeave={() => {setCategoriesDropdown(false); setDropdown(false)}}>
        {categoriesOptions}
    </ul>
  )
}

export default CategoriesGroup
