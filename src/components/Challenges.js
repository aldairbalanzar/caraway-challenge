import React, { useState, useEffect } from 'react';
import Card from './Card';
import Category from './Category';
import products from '../data/products';
import ItemDashboard from './ItemDashboard';
import moment from 'moment'


export function ChallengeOne() {
    return (
      <div className='add-cart-btn-container'>
          <button className='app-font add-cart-btn'>ADD TO CART</button>
      </div>
    )
  }

  
export function ChallengeTwo() {
    return (
      <div className='products-container'>
          {products.map((item, i) => <Card key={i} product={item}/>)}
      </div>
    )
  }

export function ChallengeThree() {
    const [items, setItems] = useState([])
    const [isFetching, setIsFetching] = useState(false)
    const [categories, setCategories] = useState({})
    const [isViewingItem, setIsViewingItem] = useState(false)
    const [currentItem, setCurrentItem] = useState({})

    const getData = async() => {
        setIsFetching(true)
        let res = await fetch('https://www.allbirds.com/products.json?limit=150')
        let resData = await res.json()
        setItems([...resData.products])
        setIsFetching(false)
    }

    const getItemStyles = (item, list) => {
      let currentId = item.id.toString().slice(0,5)
      let tempList = new Set()
      list.filter(entity => {
        if(currentId === entity.id.toString().slice(0,5)) {
          tempList.add(entity)
        }
        return null
      })
      return Array.from(tempList)
    }

    const validateNewItem = (item) => {
      let now = moment()
      let days = now.diff(item.published_at, 'days')
      if(days < 4) {
        item.isNew = true
        return
      }

      item.isNew = false
      return
  }
      
    const getCategories = () => {
      let cache = {}
      items.map(item => {
        let stringArr = item.title.split(' - ')
        let newTitle = stringArr[0].replace('Men\'s', '').replace('Women\'s', '')
        let itemColor = stringArr[1]
        let newItem = {...item, newTitle, itemColor}

        if(!cache[item.product_type]) {
          cache[item.product_type] = [newItem]
        }
        cache[item.product_type] = [...cache[item.product_type], newItem]

        return null
      })

      Object.keys(cache).map(key => {
        cache[key].map(entity => {
          let stylesList = getItemStyles(entity, cache[key])
          entity.itemStyles = stylesList
          validateNewItem(entity)
          return null
        })

        return null
      })

      return cache
    }

    const handleCurrentItem = (item) => {
      setCurrentItem(item)
      setIsViewingItem(true)
    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        setCategories(getCategories())
    }, [items])

    return (
      <div className='categories-container'>
        {isFetching && <div className="loader"></div>}

        {isViewingItem
          ? <ItemDashboard
          currentItem={currentItem}
          setIsViewingItem={setIsViewingItem}
          setCurrentItem={setCurrentItem}
          />
          : Object.keys(categories).map((category, i) => 
          <Category 
          key={i}
          category={category}
          categoryItems={categories[category]}
          handleCurrentItem={handleCurrentItem}
          />
          )
        }
        
      </div>
    )
  }