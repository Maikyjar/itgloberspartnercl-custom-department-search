import React, {useState} from 'react';
import CategoriesGroup from './CategoriesGroup';
import { useCssHandles } from 'vtex.css-handles';
import './styles.css';

type Props = {
  departments: [Department],
  setDropdown: any
}

type Department = {
  id: number,
  name: string,
  slug: string,
  children: any
}

const DepartmentGroup = ({departments, setDropdown}: Props) => {
  const [categoriesDropdown, setCategoriesDropdown] = useState(false);
  const CSS_HANDLES = [
    "department__group-ul",
    "department__group-a",
    "department__group-li"
  ]
  const handles = useCssHandles(CSS_HANDLES)

  console.log("mi grupo es ", departments);
  const departmentOptions: any = departments.map((department: Department) => {
    return (
      <li
        key={department.id}
        className={`${handles["department__group-li"]}`}
      >
        <a
          href={`/${department.slug}`}
          className={`${handles["department__group-a"]}`}
          onMouseEnter={() => setCategoriesDropdown(true)}
        >
          {department.name} ˃
        </a>
        {categoriesDropdown &&
          <CategoriesGroup categories={department.children} setCategoriesDropdown={setCategoriesDropdown} setDropdown={setDropdown} />
        }
      </li>
    )
  })

  return(
    <ul className={`${handles["department__group-ul"]}`} >
      {departmentOptions}
    </ul>
  )
}

export default DepartmentGroup
