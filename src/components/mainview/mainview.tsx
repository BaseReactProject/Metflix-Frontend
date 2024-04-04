import React from 'react'
import './mainview.css'
import MainPageVideo from './MainPageVideo/mainPageVideo'
import MainContentSlider from './MainContentSlider/maincontentslider'
import Footer from '../footer/footer'
type Props = {}

const MainView = (props: Props) => {
  return (
    <>

      <MainPageVideo></MainPageVideo>
      <MainContentSlider></MainContentSlider>
      <MainContentSlider></MainContentSlider>
      <MainContentSlider></MainContentSlider>
      <MainContentSlider></MainContentSlider>
      <MainContentSlider></MainContentSlider>
      <MainContentSlider></MainContentSlider>
      
    </>
  )
}

export default MainView