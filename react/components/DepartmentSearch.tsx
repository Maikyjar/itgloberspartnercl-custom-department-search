import React, {useState} from 'react';
import { useQuery } from 'react-apollo';
import QUERY_VALUE from '../graphql/GetDepartmentGroup.graphql'
//import { SearchBar } from 'vtex.store-components'
import DepartmentGroup from './DepartmentGroup';
import { useCssHandles } from 'vtex.css-handles';
import './styles.css';

const DepartmentSearch = () => {
  const { data, loading } = useQuery(QUERY_VALUE);
  const [dropdown, setDropdown] = useState(false);
  const CSS_HANDLES = [
    "department__search-a"
  ]
  const handles = useCssHandles(CSS_HANDLES)

  return (
    loading
    ?
      <div>Loading...</div>
    :
      <div className='flex'>
        <a
          href='/'
          className={`${handles["department__search-a"]}`}
          onMouseEnter={() => setDropdown(true)}
        >
          CATEGORÍAS
        </a>
        {dropdown && <DepartmentGroup
          departments= {data?.categories}
          setDropdown= {setDropdown}
        />}
        {/* <SearchBar
          customSearchPageUrl={slug}
          placeholder= "Que estas buscando?"
          displayMode= "search-and-clear-buttons"
        /> */}
      </div>
  )
}

export default DepartmentSearch
