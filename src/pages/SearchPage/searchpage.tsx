import React from 'react'
import Navbar from '../../components/navbar/navbar'
import SearchView from '../../components/searchview/searchview'
import Footer from '../../components/footer/footer'

type Props = {}

const SearchPage = (props: Props) => {
  return (
    <div style={{ backgroundColor: 'rgb(20,20,20)', height: '100%' }}>
      <div>
        <div dir='ltr'>
          <div>
            <div style={{ overflow: 'visible', width: '100%', zIndex: '0' }}>
              <Navbar />
              <SearchView />
           
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchPage