import React from 'react'
import { CompactRestaurantInfo } from '../../../features/restaurants/components/compact-restaurant-info.component'

export const MapCallout = ({ restaurant }) => (
  <CompactRestaurantInfo isMap restaurant={restaurant} />
)
