import React, { Component } from 'react'
import SupportCarousel from '../SupportCarousel/SupportCarousel'
import { categories } from "../../Data/Admin/CategoryData";

export default class Resources extends Component {
  render() {
	return (
	  <>
		<SupportCarousel data={categories} />
	  </>
	)
  }
}
