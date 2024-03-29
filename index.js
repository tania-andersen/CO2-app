/*
  CO2-calculator.
  Author: Tania Andersen, tan AT ing DOT dk
  License: The Unlicense, https://github.com/tania-andersen/CO2-app/blob/main/LICENSE
*/

import React from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

import Button from '@material-ui/core/Button'

import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

import Box from '@material-ui/core/Box'

import InputAdornment from '@material-ui/core/InputAdornment';

import { useState, useEffect } from "react";

import { Link } from "gatsby"

const IndexPage = () => {

  function Co2eAmount(props) {
    const amount = Math.round((props.co2e * props.quantity))
    return <Box component="span" width={1 / 5} size="small" p={1}>CO2: {amount} g</Box>
  }

  class FoodInput extends React.Component {
    constructor(props) {
      super(props)
      this.onTagsChange = this.onTagsChange.bind(this)
    }

    onTagsChange = (event, values) => {
      // values kan være null.
      if (values !== null) {
        this.props.onFoodChange(values) // onFoodChange findes i Co2Line.
      }
    }

    render() {
      const food = this.props.foodItem.food
      const co2e = this.props.foodItem.co2e
      return (
        <>
          <Autocomplete
            id="food-combo-box"
            options={foods}
            defaultValue={{ food, co2e }}
            onChange={this.onTagsChange}
            getOptionLabel={option => option.food}
            style={{ width: 200 }}
            size="small"
            renderInput={params => (
              <TextField {...params} label="Søg fødevare" variant="outlined" />
            )}
          />
        </>
      )
    }
  }

  class QuantityInput extends React.Component {
    constructor(props) {
      super(props)
      this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
      this.props.onQuantityChange(e.target.value)
    }

    render() {
      const quantity = this.props.quantity
      return (
        <TextField
          id="quantity"
          size="small"
          style={{ width: 100 }}
          label="Kvantum"
          variant="outlined"
          defaultValue={quantity}
          InputProps={{
            endAdornment: <InputAdornment position="start">g</InputAdornment>,
          }}
          onChange={this.handleChange}
        />
      )
    }
  }

  class Co2Line extends React.Component {
    constructor(props) {
      super(props)
      this.handleFoodChange = this.handleFoodChange.bind(this)
      this.handleQuantityChange = this.handleQuantityChange.bind(this)
      this.delete = this.delete.bind(this)
      this.state = { foodItem: this.props.foodItem, quantity: this.props.quantity }
    }

    handleFoodChange(newFoodItem) {
      // Opdater App state.
      this.props.onChange(newFoodItem, this.state.quantity, this.props.index)
    }

    handleQuantityChange(newQuantity) {
      this.props.onChange(this.state.foodItem, newQuantity, this.props.index)
    }

    delete() {
      this.props.onDelete(this.props.index)
    }

    render() {
      const quantity = this.props.quantity
      const foodItem = this.props.foodItem
      const food = foodItem.food // ?
      const co2e = foodItem.co2e

      return (
        <ListItem>
          <FoodInput
            foodItem={foodItem}
            onFoodChange={this.handleFoodChange}
          />
          &nbsp;
          <QuantityInput
            quantity={quantity}
            onQuantityChange={this.handleQuantityChange}
          />
          &nbsp;
          <Co2eAmount co2e={co2e} quantity={quantity} />
          <IconButton aria-label="delete" size="small" onClick={this.delete}>
            <DeleteIcon />
          </IconButton>
        </ListItem>

      )
    }
  }

  const App = () => {
    const defaultList = [
      { foodItem: foods[0], quantity: 100.0 }
    ];

    const [list, updateList] = useState(defaultList);

    const handleRemoveItem = (index) => {
      const newList = list.filter((element, i) => index != i)
      updateList(newList)

      // Gem sessionens tilstand.
      sessionStorage.setItem("currentEntries", JSON.stringify(newList));
    };

    const handleUpdateItem = (newFoodItem, newQuantity, index) => {
      var newList = list.map((item, i) =>
        i == index ? { foodItem: newFoodItem, quantity: newQuantity } : item
      );
      // Opdater App state.
      updateList(newList);
      // Gem sessionens tilstand.
      sessionStorage.setItem("currentEntries", JSON.stringify(newList));
    }

    const handleAddItem = (e) => {
      var newList = list.concat({
        foodItem: foods[Math.floor(Math.random() * foods.length)], quantity: 100.0
      })
      updateList(newList);
      // Gem sessionens tilstand.
      sessionStorage.setItem("currentEntries", JSON.stringify(newList));
    };

    const handleSaveTotal = (e) => {
      // savedEntriesAsJson = JSON.stringify([ { "2022-01-01 12:00", co2total } , { "2022-03-03 13:00", anotherCo2Total } ... ])
      var savedEntriesAsJson
      var savedEntries
      if (typeof localStorage !== "undefined") { savedEntriesAsJson = localStorage.getItem("savedEntries") }
      if (savedEntriesAsJson === null) {
        savedEntries = new Array();
      } else {
        savedEntries = JSON.parse(savedEntriesAsJson)
      }
      var newEntry = { date: new Date(), co2e: co2eTotal }
      savedEntries.push(newEntry)
      savedEntriesAsJson = JSON.stringify(savedEntries)
      if (typeof localStorage !== "undefined") { localStorage.setItem("savedEntries", savedEntriesAsJson) }
    };

    useEffect(() => {
      console.log("useEffect i index henter data fra sessionStorage.");
      var currentList = JSON.parse(sessionStorage.getItem("currentEntries"))
      if (currentList !== null) {
        updateList(currentList);
      }
    }, []);

    useEffect(() => {
      console.log("useEffect i index gemmer data i sessionStorage.");
      window.sessionStorage.setItem("currentEntries", JSON.stringify(list));
    }, [JSON.stringify(list)]);

    var co2eTotal = 0.0;

    return (
      <Box>
        <List style={{ maxHeight: '0%', overflow: 'auto' }}>
          {list.map((item, index) => {
            co2eTotal += item.foodItem.co2e * item.quantity
            return (
              <Co2Line
                foodItem={item.foodItem}
                quantity={item.quantity}
                key={item.foodItem.food}
                index={index}
                onDelete={handleRemoveItem}
                onChange={handleUpdateItem}
              />
            );
          })}
          <ListItem>
            <Button variant="outlined" onClick={handleAddItem}>Tilføj fødevare</Button>
            &nbsp;
            <Box sx={{ fontWeight: 'bold', fontSize: 18 }}>Total: {co2eTotal.toFixed(1)} g</Box>
          </ListItem>

          <ListItem>
            <Button variant="outlined" onClick={handleSaveTotal}>Gem total</Button>
            &nbsp;
            <Link to="/listview" style={{ textDecoration: 'none' }} ><Button variant="outlined">Se totaler</Button></Link>
          </ListItem>
        </List>
      </Box>
    );
  };

  return (
    <App />
  )
}

const foods = [
  { food: 'Peberfrugt, rød, rå', co2e: 1.0179225458028 },
  { food: 'Tomat, uspec., rå', co2e: 0.701245897078509 },
  { food: 'Squash, rå', co2e: 0.834780298577496 },
  { food: 'Aubergine, rå', co2e: 0.97467641693605 },
  { food: 'Tomat, soltørret', co2e: 1.94574370911027 },
  { food: 'Græskar, rå', co2e: 0.834780298577496 },
  { food: 'Agurk, rå', co2e: 0.555671712805155 },
  { food: 'Drueagurk (sylteagurk), rå', co2e: 0.555671712805155 },
  { food: 'Peber, chili, rå', co2e: 1.0179225458028 },
  { food: 'Oksekød, inderlår uden kappe, rå', co2e: 45.6906242327377 },
  { food: 'Oksekød, mørbrad, afpudset, rå', co2e: 151.953851195425 },
  { food: 'Oksekød, hakket, 10-15% fedt, rå', co2e: 32.5145680986664 },
  { food: 'Oksekød, culotte, rå', co2e: 45.6906242327377 },
  { food: 'Oksekød, hakket, 15-20% fedt, rå', co2e: 30.8402137393075 },
  { food: 'Oksekød, tyndsteg med mørbrad, rå', co2e: 80.8943926743642 },
  { food: 'Oksekød, hakket, 5-10% fedt, rå', co2e: 34.1889224580254 },
  { food: 'Øl, pilsner, 4.4 % vol.', co2e: 0.597998098442653 },
  { food: 'Øl, hvidtøl, letøl', co2e: 0.597998098442653 },
  { food: 'Øl, stærk, 7,6 % vol.', co2e: 0.597998098442653 },
  { food: 'Kiks, Marie', co2e: 2.74949131663144 },
  { food: 'Kiks, fuldkorns-, digestivetype', co2e: 2.72977724450129 },
  {
    food: 'Småkage, hvede, traditionelle danske, industrifremstillet',
    co2e: 2.98118906818497,
  },
  {
    food: 'Småkage, cookie (amerikansk type), industrifremstillet',
    co2e: 2.72977724450129,
  },
  { food: 'Müslibar', co2e: 2.88432015416023 },
  { food: 'Vaffelrør', co2e: 2.09865032950614 },
  { food: 'Rasp', co2e: 1.26349714920321 },
  { food: 'Knækbrød, rug-, groft', co2e: 1.07838231412739 },
  {
    food: 'Hvedebrød, toastbrød, fint, industrifremstillet',
    co2e: 0.739255008345281,
  },
  { food: 'Pølsebrød', co2e: 0.739255008345281 },
  { food: 'Grovbolle', co2e: 0.739255008345281 },
  { food: 'Rugbrød, fuldkorn, industrifremstillet', co2e: 0.617821206410215 },
  { food: 'Rugbrød, revet, med brunt sukker, uspec.', co2e: 1.56335022188655 },
  { food: 'Cornflakes, uspec.', co2e: 1.51310973305879 },
  { food: 'Müsli, uspec.', co2e: 1.7605994409747 },
  { food: 'Morgenmadsprodukt, Guldkorn', co2e: 2.11911393749355 },
  { food: 'Morgenmadsprodukt, Havrefras', co2e: 1.69531736026025 },
  { food: 'Smør, saltet', co2e: 3.92037666379642 },
  { food: 'Smørbart blandingsprodukt, 75% fedt', co2e: 3.79973862984827 },
  { food: 'Skærekage, chokoladekage/-pie', co2e: 2.15016957927627 },
  { food: 'Wienerbrød, kanelsnegl', co2e: 1.76739827300954 },
  { food: 'Skærekage, formkage, uspec.', co2e: 2.15016957927627 },
  { food: 'Flødeskumskage, lagkagesnitte', co2e: 2.15016957927627 },
  {
    food: 'Kage, trøffelprodukt / koldprodukt, industrifremstillet',
    co2e: 2.6283659205087,
  },
  { food: 'Bacon, stegestykke, rå', co2e: 4.79579733277606 },
  { food: 'Salami', co2e: 5.06108822731644 },
  { food: 'Skinke, kogt, skiveskåret', co2e: 3.37700289201976 },
  { food: 'Roastbeef, pålæg', co2e: 45.8386461348789 },
  { food: 'Medisterpølse, rå', co2e: 2.20733832847605 },
  { food: 'Leverpostej', co2e: 3.5139730906737 },
  { food: 'Rullepølse, pålæg', co2e: 3.37700289201976 },
  { food: 'Pølse, bratwurst, thüringer', co2e: 1.81019879472102 },
  { food: 'Kylling, bryst (filet), kogt, pålæg', co2e: 3.24793263719472 },
  { food: 'Kylling, ben, kød og skind, rå', co2e: 1.38846442592127 },
  { food: 'Kylling, lår, kød og skind, rå', co2e: 1.32240842897919 },
  { food: 'Kylling, bryst, kød og skind, rå', co2e: 3.43515468031133 },
  { food: 'Kyllingepølse, pålæg', co2e: 1.43511506995682 },
  { food: 'Høne, kød og skind, rå', co2e: 2.21619105324993 },
  { food: 'Te, blade', co2e: 8.41149417359338 },
  { food: 'Kaffe, instant, pulver', co2e: 10.1110883396681 },
  { food: 'Kaffebønne, ristet, formalet', co2e: 3.175108318525 },
  { food: 'Kakao, instant, uden mælk, pulver', co2e: 4.98010529342384 },
  { food: 'Kakao, pulver', co2e: 4.98010529342384 },
  { food: 'Rullepølse, lammekød, pålæg', co2e: 24.7509466436193 },
  { food: 'Spegepølse, oksekød', co2e: 34.1145320810735 },
  { food: 'Hamburgerryg, kogt', co2e: 3.37700289201976 },
  { food: 'Dressing, olie-eddike', co2e: 4.01574051942769 },
  { food: 'Dressing, thousand island', co2e: 4.86323492264188 },
  { food: 'Vand, postevand, vejl. Værdier', co2e: 0.000962721579267956 },
  { food: 'And, kød, rå', co2e: 2.27087769972305 },
  { food: 'Gås, kød, rå', co2e: 2.27087769972305 },
  { food: 'Makrelsalat, mayonnaise', co2e: 4.18230220912128 },
  { food: 'Sauce, gravad laks', co2e: 2.03349869338017 },
  { food: 'Italiensk salat, mayonnaise', co2e: 3.55102301035915 },
  { food: 'Karrysalat, mayonnaise', co2e: 3.55102301035915 },
  { food: 'Yoghurt naturel, sødmælk', co2e: 1.08330314754991 },
  { food: 'Creme fraiche 18 %', co2e: 2.02091501629211 },
  { food: 'Skyr, 0.2 % fedt', co2e: 1.25180961663123 },
  { food: 'Danbo ost, 45+', co2e: 7.72410373513817 },
  { food: 'Parmesan ost, 32+', co2e: 7.72410373513817 },
  { food: 'Mozzarella ost, 30+', co2e: 7.72410373513817 },
  { food: 'Sild, marineret', co2e: 2.8285588983647 },
  { food: 'Fiskeboller, konserves', co2e: 5.74133007825805 },
  { food: 'Fiskefars, rå', co2e: 7.99520248848393 },
  { food: 'Torsk, lever, konserves', co2e: 16.7180330043965 },
  { food: 'Torsk, rogn, konserves', co2e: 11.35587080637 },
  { food: 'Rejer, dybvands-, konserves', co2e: 11.8878204422722 },
  { food: 'Torsk, filet, paneret, rå', co2e: 6.62644791337545 },
  { food: 'Kaviar, uægte (stenbiderrogn)', co2e: 11.3332106034574 },
  { food: 'Fiskefrikadelle', co2e: 10.2778028640525 },
  { food: 'Torsk, lever, røget', co2e: 12.5363031361743 },
  { food: 'Torsk, lever, rå', co2e: 9.92109143196462 },
  { food: 'Hummer, konserves', co2e: 9.85006306091361 },
  { food: 'Musling, konserves', co2e: 1.77190917985142 },
  { food: 'Tun i tomat, konserves', co2e: 9.15185704069844 },
  { food: 'Torsk, rogn, rå', co2e: 11.2689293703404 },
  { food: 'Krabbekløer, rå', co2e: 14.6808036091828 },
  { food: 'Kaviar, uægte (lodderogn)', co2e: 11.3236160168135 },
  { food: 'Tun i vand, konserves', co2e: 5.59983025024467 },
  { food: 'Hellefisk, røget', co2e: 11.592371996882 },
  { food: 'Fiskefilet, paneret, friturestegt', co2e: 7.50893154883822 },
  { food: 'Fiskepinde, panerede, dybfrost', co2e: 6.59251584518656 },
  { food: 'Rugmel, groft, fuldkorn', co2e: 0.76873795005083 },
  { food: 'Hvedemel, grahemsmel, fuldkorn', co2e: 0.8359118583582 },
  { food: 'Rugkerner, hele/knækkede', co2e: 0.76873795005083 },
  { food: 'Hvedekerner, hele/knækkede', co2e: 0.8359118583582 },
  { food: 'Rismel', co2e: 1.14297192364874 },
  { food: 'Majsmel', co2e: 0.632917621279925 },
  { food: 'Æg, høne, skrabehøns, rå', co2e: 0.849535278158436 },
  { food: 'Knude, rå', co2e: 12.5423866005662 },
  { food: 'Aborre, rå', co2e: 13.8359117817354 },
  { food: 'Sandart, rå', co2e: 7.31674537328239 },
  { food: 'Gedde, rå', co2e: 8.28455705794355 },
  { food: 'Brasen, rå', co2e: 16.7833063248859 },
  { food: 'Bækforel, rå', co2e: 12.3112884514314 },
  { food: 'Ørred, hav-, rå', co2e: 2.71549867295557 },
  { food: 'Helt, rå', co2e: 12.5423866005662 },
  { food: 'Frugtsaft, blandet, sødet, koncentreret', co2e: 2.58493998888482 },
  { food: 'Hyldebærsaft, sød, koncentreret', co2e: 2.39691091595055 },
  { food: 'Oliven, grønne, marinerede, konserves', co2e: 1.69254986816288 },
  { food: 'Pære, konserves', co2e: 0.827074805045858 },
  { food: 'Nøddepasta med cacao, smørepålæg', co2e: 3.97096584349091 },
  { food: 'Appelsinjuice, konserves', co2e: 1.32107858130223 },
  { food: 'Ananas, konserves', co2e: 1.30007719469963 },
  { food: 'Jordbærsyltetøj', co2e: 1.80090925975909 },
  { food: 'Rosiner, uden kerner', co2e: 2.63364673103461 },
  { food: 'Hindbærmarmelade', co2e: 1.80090925975909 },
  { food: 'Hare, rå', co2e: 2.27087769972305 },
  { food: 'Kanin, kød, rå', co2e: 2.27087769972305 },
  { food: 'Fasan, kød og skind, rå', co2e: 2.27087769972305 },
  { food: 'Due, vildt, kød og skind, rå', co2e: 2.27087769972305 },
  { food: 'Byggryn, rå', co2e: 0.834064890723564 },
  { food: 'Havregryn, ikke beriget', co2e: 0.945195185503538 },
  { food: 'Risengryn, grødris, polerede, rå', co2e: 1.11431884953499 },
  { food: 'Persille, rå', co2e: 0.368948724868669 },
  { food: 'Dild, rå', co2e: 0.368948724868669 },
  { food: 'Hvidløg, rå', co2e: 1.32568106404404 },
  { food: 'Purløg, rå', co2e: 0.324819801752418 },
  { food: 'Karse, frisk', co2e: 0.368948724868669 },
  { food: 'Oliven, sorte, uden sten, i saltlage', co2e: 1.69254986816288 },
  { food: 'Hasselnød, tørret', co2e: 4.34652661891883 },
  { food: 'Solsikkefrø, afskallede, tørrede', co2e: 1.76909721636742 },
  { food: 'Sesamfrø, afskallede', co2e: 3.62355545856433 },
  { food: 'Valnødder, tørret', co2e: 3.14967833562624 },
  { food: 'Cashewnødder, tørristet', co2e: 4.01131940995829 },
  { food: 'Græskarkerner, tørret', co2e: 3.20436498209936 },
  { food: 'Honning', co2e: 0.774584915370514 },
  { food: 'Mælkeis, uspec.', co2e: 2.83878599118024 },
  { food: 'Flødeis', co2e: 2.83878599118024 },
  { food: 'Ispind, limonade', co2e: 1.15251066084757 },
  { food: 'Eddike', co2e: 1.92703108375832 },
  { food: 'Salt, bordsalt (jodberiget)', co2e: 0.439099912282819 },
  { food: 'Rabarber, rå', co2e: 0.295905009822759 },
  { food: 'Bladselleri, rå', co2e: 0.295905009822759 },
  { food: 'Blomkål, uspecificeret, rå', co2e: 0.708598048281088 },
  { food: 'Broccoli, rå', co2e: 0.708598048281088 },
  { food: 'Grønkål, rå', co2e: 0.247887070618703 },
  { food: 'Hvidkål, rå', co2e: 0.247887070618703 },
  { food: 'Rosenkål, uspec., rå', co2e: 0.247887070618703 },
  { food: 'Rødkål, rå', co2e: 0.247887070618703 },
  { food: 'Spidskål, rå', co2e: 0.247887070618703 },
  { food: 'Spinat, rå', co2e: 0.518725993041404 },
  { food: 'Artiskok, rå', co2e: 0.976135107328248 },
  { food: 'Asparges, grønne, rå', co2e: 0.879835410767665 },
  { food: 'Salat, Iceberg, rå', co2e: 0.594154662200757 },
  { food: 'Salat, egeløv, rå', co2e: 0.594154662200757 },
  { food: 'Paksoi, pak-choi, pai tsai, rå', co2e: 0.247887070618703 },
  { food: 'Savoykål, rå', co2e: 0.247887070618703 },
  { food: 'Blomkål, dybfrost', co2e: 0.842509958877756 },
  { food: 'Porre, rå', co2e: 0.324819801752418 },
  { food: 'Spinat, hakket, dybfrost', co2e: 0.643173141728911 },
  { food: 'Broccoli, dybfrost', co2e: 0.842509958877756 },
  { food: 'Voksbønner, rå', co2e: 1.04095547250311 },
  { food: 'Grønne ærter, rå', co2e: 0.666403219643409 },
  { food: 'Grønne linser, tørrede', co2e: 1.77909292206453 },
  { food: 'Kikærter, tørrede, rå', co2e: 2.23397610830253 },
  { food: 'Grønne bønner, rå', co2e: 1.04095547250311 },
  { food: 'Bønnespirer, mung, rå', co2e: 1.04095547250311 },
  { food: 'Bønnespirer, uspec., rå', co2e: 1.04095547250311 },
  { food: 'Sukkerært (mangetout), rå', co2e: 0.739446934689319 },
  { food: 'Sojabønner, tørrede, rå', co2e: 1.16194289626227 },
  { food: 'Grønne ærter, dybfrost', co2e: 0.871698632491889 },
  { food: 'Mineralvand, dansk vand o.lign.', co2e: 0.216741187345263 },
  {
    food: 'Mineralvand, sodavand, tilsat sukker, uspec.',
    co2e: 0.548131282318376,
  },
  { food: 'Æblemost, uspec.', co2e: 1.6413942618738 },
  { food: 'Sherry, tør', co2e: 4.2725494619626 },
  { food: 'Likør, kaffe med fløde', co2e: 3.39231168125851 },
  {
    food: 'Margarine, 70 %, bordbrug, blød, vegetabilsk fedt',
    co2e: 2.92753970672067,
  },
  { food: 'Hornfisk, rå', co2e: 9.70278021999633 },
  { food: 'Laks, atlantisk, vild, rå', co2e: 9.45952158857643 },
  { food: 'Makrel, rå', co2e: 9.11898393076048 },
  { food: 'Rødspætte, rå', co2e: 9.8664047854915 },
  { food: 'Sild, rå', co2e: 9.33996053128965 },
  { food: 'Mørksej, rå', co2e: 9.8664047854915 },
  { food: 'Torsk, filet, rå', co2e: 9.8664047854915 },
  { food: 'Rødspætte, filet, paneret, dybfrost', co2e: 6.66288147165207 },
  { food: 'Sej, filet, dybfrost', co2e: 9.78116661924394 },
  { food: 'Tun, rå', co2e: 10.1354762931947 },
  { food: 'Laks, atlantisk, opdræt, koldrøget', co2e: 11.8909825238477 },
  { food: 'Laks, atlantisk, opdræt, varmrøget', co2e: 12.1975816026019 },
  { food: 'Laks, atlantisk, opdræt, rå', co2e: 9.11125987405766 },
  { food: 'Mayonnaise, fedtreduceret', co2e: 1.21505721924284 },
  { food: 'Mayonnaise', co2e: 3.55102301035915 },
  { food: 'Remoulade, uspec.', co2e: 1.87964337091781 },
  { food: 'Østers, rå', co2e: 1.13331254814243 },
  { food: 'Musling, rå', co2e: 0.218279096021854 },
  { food: 'Blæksprutte, rå', co2e: 0.460284369275218 },
  { food: 'Champignon, rå', co2e: 0.470595897554884 },
  { food: 'Østershatte', co2e: 0.470595897554884 },
  { food: 'Mandeldrik, ikke beriget', co2e: 3.51835009271887 },
  { food: 'Risdrik, tilsat calcium', co2e: 0.387552614176815 },
  { food: 'Havredrik, tilsat calcium', co2e: 0.370660180769563 },
  { food: 'Sojadrik, tilsat calcium', co2e: 0.381180116492989 },
  { food: 'Bouillon, hønsekød, spiseklar', co2e: 0.37825926317593 },
  { food: 'Kødboller, konserves', co2e: 11.417604079996 },
  { food: 'Bouillon, oksekød, spiseklar', co2e: 0.516342518152866 },
  { food: 'Kødboller, uspec.', co2e: 11.417604079996 },
  { food: 'Melboller, uspec.', co2e: 1.26573255956794 },
  { food: 'Kødboller, dybfrost', co2e: 11.0847208892074 },
  { food: 'Tomatsuppe, spiseklar', co2e: 1.84379233005132 },
  { food: 'Bouillon, oksekød, koncentreret, terning', co2e: 7.26134500644725 },
  { food: 'Melboller, dybfrost', co2e: 1.31346290970167 },
  { food: 'Kylling, grillstegt, fastfood', co2e: 3.60890307051687 },
  {
    food: 'Kyllingenuggets, friturestegt, færdigretter',
    co2e: 3.24193520508814,
  },
  { food: 'Pizza med tomat og ost, færdigretter', co2e: 2.96194132682152 },
  {
    food: 'Pizza med fisk, tomat og ost, færdigretter',
    co2e: 3.79384723952161,
  },
  {
    food: 'Pizza med salami, tomat og ost, færdigretter',
    co2e: 3.1528464388902,
  },
  {
    food: 'Pizza med grønt og frugt, tomat og ost, færdigretter',
    co2e: 2.55688011661896,
  },
  { food: 'Pizza med kød, tomat og ost, færdigretter', co2e: 3.90761971549838 },
  {
    food: 'Pizza med kød og fisk, tomat og ost, færdigretter',
    co2e: 3.85073347750999,
  },
  { food: 'Kalv og flæsk, hakket, 15-20% fedt, råt', co2e: 15.2585391717904 },
  { food: 'Gedemælk', co2e: 4.40141801446059 },
  { food: 'Marcipan', co2e: 6.25472888434236 },
  { food: 'Sirup', co2e: 0.926104874154936 },
  { food: 'Pasta, rå', co2e: 1.73382455269617 },
  { food: 'Æble, uspec., råt', co2e: 0.657389581155619 },
  { food: 'Pære, rå', co2e: 0.382637248528636 },
  { food: 'Vindrue, rå', co2e: 0.942512516353379 },
  { food: 'Grisekød, nakkekam med svær, rå', co2e: 3.57919022860398 },
  { food: 'Skinke, inderlår, helt afpudset, rå', co2e: 3.57919022860398 },
  { food: 'Grisefilet, helt afpudset, rå', co2e: 4.18749378069002 },
  { food: 'Grisemørbrad, afpudset, rå', co2e: 5.4041008848621 },
  { food: 'Grisekød, hakket, 5-10% fedt, råt', co2e: 2.89745198966935 },
  {
    food: 'Grisekød, nakkefilet, helt afpudset (Nakkekotelet), rå',
    co2e: 3.56827099775408,
  },
  { food: 'Grisekød, hakket, 15-20% fedt, råt', co2e: 2.97088667651794 },
  { food: 'Millionbøf, uspec., færdigretter', co2e: 13.7401730795172 },
  { food: 'Forloren skildpadde, uspec., færdigretter', co2e: 18.491370710878 },
  { food: 'Forårsrulle, dybfrost, færdigretter', co2e: 1.98838428494638 },
  {
    food: 'Grisekød i karrysovs, dybfrost, færdigretter',
    co2e: 3.81662746962554,
  },
  { food: 'Pizza romana, dybfrost, færdigretter', co2e: 2.87365071618733 },
  {
    food: 'Lever, gris, i flødesovs, dybfrost, færdigretter',
    co2e: 2.89566059199282,
  },
  { food: 'Pizza napolitana, dybfrost, færdigretter', co2e: 2.98982245681673 },
  { food: 'Forårsrulle, friturestegt, færdigretter', co2e: 1.98838428494638 },
  {
    food: 'Pizza med broccoli, dybfrost, færdigretter',
    co2e: 2.58476124661416,
  },
  { food: 'Pizza med tunfisk, dybfrost, færdigretter', co2e: 3.25952798473667 },
  { food: 'Kødrand, dybfrost, færdigretter', co2e: 2.08033459218677 },
  { food: 'Kartoffel, uspec., rå', co2e: 0.355377592072315 },
  { food: 'Gulerod, uspec., rå', co2e: 0.252286452509007 },
  { food: 'Radise, rå', co2e: 0.368948724868669 },
  { food: 'Rødbede, rå', co2e: 0.310096669226897 },
  { food: 'Selleri, rod, rå', co2e: 0.295905009822759 },
  { food: 'Ingefær, rod, rå', co2e: 1.85301898567397 },
  { food: 'Fennikel, knold, rå', co2e: 4.46087289442307 },
  { food: 'Majroe, rå', co2e: 0.252286452509007 },
  { food: 'Løg, hakkede, dybfrost', co2e: 0.365614062229702 },
  { food: 'Gulerod, dybfrost', co2e: 0.369585614650612 },
  { food: 'Løg, rå', co2e: 0.898870041851737 },
  { food: 'Forårsløg, rå', co2e: 0.898870041851737 },
  { food: 'Maniok, kassava, rå', co2e: 0.741438210399572 },
  { food: 'Persillerod, rå', co2e: 0.894191517327605 },
  { food: 'Feta ost 40+', co2e: 2.91554093488069 },
  { food: 'Danablu ost 50+', co2e: 7.72410373513817 },
  { food: 'Lammekød, kølle, uspec., rå', co2e: 27.431376091342 },
  { food: 'Lammekød, uspec., råt', co2e: 27.431376091342 },
  { food: 'Krebs, rå', co2e: 3.55425528053773 },
  { food: 'Rejer, dybvands-, kogt, dybfrost', co2e: 10.5215089852229 },
  { food: 'Hummer, rå', co2e: 3.55425528053773 },
  { food: 'Krabbe, kogt', co2e: 5.89881024800773 },
  { food: 'Reje, sort tiger-, opdræt, kogt, dybfrost', co2e: 12.4348394425188 },
  { food: 'Reje, dybvands, kogt, i lage', co2e: 10.5215089852229 },
  { food: 'Pop corn, traditionelle', co2e: 1.24520367573748 },
  { food: 'Peanuts, jordnød, ristet og saltet', co2e: 2.50472640016782 },
  { food: 'Jordbær, rå', co2e: 0.561566061696677 },
  { food: 'Hindbær, rå', co2e: 0.839811386767865 },
  { food: 'Solbær, rå', co2e: 0.534417000365769 },
  { food: 'Blåbær, rå', co2e: 2.90513580266716 },
  { food: 'Brombær, rå', co2e: 0.907220466597063 },
  { food: 'Hyben, rå', co2e: 0.645316065805771 },
  { food: 'Hyldebær, rå', co2e: 0.907220466597063 },
  { food: 'Ribs, rå', co2e: 0.534417000365769 },
  { food: 'Stikkelsbær, rå', co2e: 0.849566109660053 },
  { food: 'Jordbær, dybfrost, usukrede', co2e: 0.984612693142818 },
  { food: 'Tranebær, rå', co2e: 0.871127367200248 },
  { food: 'Blåbær, frosne, usukrede', co2e: 1.0225602285483 },
  { food: 'Hindbær, dybfrost, rå', co2e: 0.857511298854271 },
  { food: 'Flødeost, ost 60+', co2e: 7.72410373513817 },
  { food: 'Brie, ost 45+', co2e: 2.91554093488069 },
  { food: 'Hytteost, ost 20+', co2e: 2.91554093488069 },
  { food: 'Bulgur, parboiled, rå', co2e: 1.1467840340909 },
  { food: 'Majs, kerner, konserves', co2e: 0.608987629860214 },
  { food: 'Ris, parboiled, rå', co2e: 1.28263240102316 },
  { food: 'Quinoa, sort, rå', co2e: 2.48624873903044 },
  { food: 'Peber, sort', co2e: 4.30096985055448 },
  { food: 'Sennep, gul, færdiglavet', co2e: 1.75798543767556 },
  { food: 'Karry, pulver', co2e: 4.69814291671236 },
  { food: 'Bitter, Gammel Dansk Bitter Dram', co2e: 2.04176596829712 },
  { food: 'Cognac', co2e: 8.22251330260159 },
  { food: 'Vodka', co2e: 2.04176596829712 },
  { food: 'Snaps, 40 % vol., uspec.', co2e: 2.04176596829712 },
  { food: 'Blomme, rå', co2e: 0.578728907182719 },
  { food: 'Kirsebær, rå', co2e: 0.748893187377251 },
  { food: 'Kastanje, ægte, rå', co2e: 1.70866752705039 },
  { food: 'Sveske, rå', co2e: 1.86824531167503 },
  { food: 'Abrikos, tørret', co2e: 1.86824531167503 },
  { food: 'Abrikos, rå', co2e: 1.04619508854818 },
  { food: 'Fersken, rå', co2e: 0.961940008075856 },
  { food: 'Nektarin, rå', co2e: 0.961940008075856 },
  { food: 'Avocado, rå', co2e: 1.06623983250802 },
  { food: 'Sukker, stødt melis (saccharose)', co2e: 2.00349948799139 },
  { food: 'Sukker, brun farin', co2e: 1.92405576242238 },
  { food: 'Chokolade, fløde', co2e: 5.17923970603665 },
  { food: 'Nougat', co2e: 4.96997994013064 },
  { food: 'Tyggegummi, uden sukker, uspec.', co2e: 5.96302340831376 },
  { food: 'Karameller, blandede', co2e: 2.74036478727652 },
  { food: 'Chokolade, mørk', co2e: 3.73885903300624 },
  { food: 'Lakrids, salt', co2e: 2.08663130394159 },
  { food: 'Vingummi', co2e: 2.02189085907871 },
  { food: 'Banan, rå', co2e: 0.982348371707294 },
  { food: 'Citron, rå', co2e: 0.944280127482258 },
  { food: 'Vandmelon, rå', co2e: 0.777508104406996 },
  { food: 'Appelsin, rå', co2e: 0.810747974892643 },
  { food: 'Honningmelon, rå', co2e: 0.705422215954315 },
  { food: 'Lime, rå', co2e: 0.871236412436348 },
  { food: 'Ananas, rå', co2e: 0.646259798806276 },
  { food: 'Mango, rå', co2e: 0.929706162199498 },
  { food: 'Grapefrugt, rå', co2e: 0.858871295589605 },
  { food: 'Mandarin, rå', co2e: 0.972837288808287 },
  { food: 'Kiwi, rå', co2e: 0.925339379641525 },
  { food: 'Kalkun, bryst (filet), kogt/røget, pålæg', co2e: 3.01980290529989 },
  { food: 'Kalkun, kød, rå', co2e: 3.18057401755625 },
  { food: 'Kalkunkød, hakket, 5-10% fedt, råt', co2e: 3.34447721402307 },
  { food: 'Sødmælk, 3,5 % fedt', co2e: 0.793774454994524 },
  { food: 'Letmælk, 1,5 % fedt', co2e: 0.606249864665689 },
  { food: 'Minimælk, 0,5 % fedt', co2e: 0.481233471113132 },
  { food: 'Cacaoskummetmælk (UHT)', co2e: 0.654435109168607 },
  { food: 'Fløde 38 %, piskefløde', co2e: 2.13827821375879 },
  { food: 'Kalvekød, middelfedt, råt', co2e: 50.3551488195338 },
  { food: 'Jordnøddesmør', co2e: 2.84550909631361 },
  { food: 'Solsikkeolie', co2e: 3.76490766218083 },
  { food: 'Olivenolie', co2e: 3.82908530476478 },
  { food: 'Rapsolie', co2e: 3.83727086199475 },
  { food: 'Løg, ristede', co2e: 4.30073200585787 },
  { food: 'Kartoffelchips, grove', co2e: 4.17409282112207 },
  { food: 'Tofu, sojabønneost', co2e: 1.70884284571067 },
  { food: 'Linsespirer, rå', co2e: 1.7045028071562 },
  { food: 'Rødkål, konserves, uden tilsat sukker', co2e: 0.728344464463421 },
  { food: 'Tomatjuice, konserves', co2e: 1.26359086825805 },
  { food: 'Agurk, syltet', co2e: 1.57642015664646 },
  { food: 'Kartoffelmos, pulver med tørmælk', co2e: 5.00023356798934 },
  { food: 'Peber, chili, konserves', co2e: 1.53811374468988 },
  { food: 'Asier, syltede', co2e: 1.57642015664646 },
  { food: 'Tomat, flået, konserves', co2e: 1.26359086825805 },
  { food: 'Rødbede, konserves', co2e: 0.82787511612589 },
  { food: 'Kartoffel, konserves', co2e: 0.893777428294797 },
  { food: 'Kartoffel, chips (franske kartofler)', co2e: 4.17409282112207 },
  { food: 'Bambusskud, konserves, usaltet', co2e: 1.20708586396389 },
  { food: 'Champignon, konserves', co2e: 0.703280764296077 },
  { food: 'Pommes frites, friturestegt, fastfood', co2e: 2.83696035938789 },
  { food: 'Tomatpure, koncentreret', co2e: 2.48355060064985 },
  { food: 'Tomatketchup', co2e: 2.01137942955805 },
  {
    food: 'Baked beans/hvide bønner i tomatsovs, konserves',
    co2e: 1.52538988758479,
  },
  { food: 'Kartoffelmel', co2e: 1.30651757681055 },
  { food: 'Grønne ærter, konserves', co2e: 1.36366790871295 },
  { food: 'Soja sauce', co2e: 1.4931261429687 },
  { food: 'Sauce, barbeque', co2e: 2.17912872456284 },
  { food: 'Hvidvin, uspec.', co2e: 1.87234443728519 },
  { food: 'Rosévin', co2e: 1.87234443728519 },
  { food: 'Rødvin, uspec.', co2e: 1.87234443728519 },
  { food: 'Hvidvin, mousserende, champagne', co2e: 1.87234443728519 },
  { food: 'Bagegær, presset, rå', co2e: 1.44823150243634 },
  { food: 'Cocktailpølser', co2e: 1.81019879472102 },
  { food: 'Pesto', co2e: 3.82901681999185 },
  { food: 'Lasagne, oksekød, færdigretter', co2e: 8.85199623719256 },
  { food: 'Lasagne, vegetarisk, færdigretter', co2e: 1.73844876053746 },
  { food: 'Daal, færdigretter', co2e: 1.8484299996771 },
  { food: 'Sushi, færdigretter', co2e: 2.51292852014908 },
  { food: 'Hakket kylling', co2e: 3.76082576673036 },
  { food: 'Pizzadej', co2e: 0.724852466685605 },
  { food: 'Frisk pasta, fettucine spinat', co2e: 1.07772678605947 },
  { food: 'Tunsalat', co2e: 4.49580402453113 },
  { food: 'Æggesalat', co2e: 1.50607263694762 },
  { food: 'Frikadeller', co2e: 3.00450315582335 },
  { food: 'Hummus, færdig', co2e: 1.50204194223608 },
  { food: 'Lasagne, vegansk, færdigretter', co2e: 1.58599311222861 },
  { food: 'Pandekager, færdigretter', co2e: 2.21324532590863 },
  { food: 'Kartoffelgratin / flødekartofler', co2e: 1.10129987163776 },
  { food: 'Kebab', co2e: 36.4906812292345 },
  { food: 'Icetea, fersken', co2e: 0.815431451102042 },
  { food: 'Energidrik', co2e: 0.530112505132889 },
  { food: 'Alko-sodavand, 4 %', co2e: 0.722351962716521 },
  { food: 'Salsa, hot', co2e: 1.58559068648145 },
  { food: 'Tortillabrød, hvede', co2e: 0.739255008345281 },
  { food: 'Pizzasovs', co2e: 2.33240029896316 },
  { food: 'Pastasovs', co2e: 2.33240029896316 },
  { food: 'Kokosmælk', co2e: 3.4980187468899 },
  { food: 'Hvidløgsbaguette, frossen', co2e: 1.17845462068339 },
  { food: 'Müslibar, chokolade', co2e: 2.65251094372373 },
  { food: 'Cup noodles chicken', co2e: 1.86690748031517 },
  { food: 'Skivet champignon', co2e: 0.408094298827991 },
  { food: 'Mikroovns popcorn', co2e: 1.61957506494726 },
  { food: 'Thai meal panang curry chicken', co2e: 2.32573319713313 },
  { food: 'Pommes frites, frost', co2e: 0.652461468325033 },
  { food: 'Æbleskiver', co2e: 1.31553265001054 },
  { food: 'Kikærter, dåse', co2e: 0.876075257980722 },
  { food: 'Haricots verts, frost', co2e: 1.42475146601226 },
  { food: 'Tortilla chips, cheese', co2e: 1.89526939570785 },
  { food: 'Aspargessnitter', co2e: 1.46144784097776 },
  { food: 'Majs, hele kolber', co2e: 0.489635676470829 },
  { food: 'Rucola salat, skyllet', co2e: 0.482508702054001 },
  { food: 'Oliven tapenade', co2e: 3.12178628256163 },
  { food: 'Fyldt frisk pasta', co2e: 2.14273487265365 },
  { food: 'Pepperoni', co2e: 5.06108822731644 },
  { food: 'Kidney bønner', co2e: 1.04677598557966 },
  { food: 'Kylling, hel', co2e: 2.21619105324993 },
  { food: 'Chorizo, skivet', co2e: 6.06851199402785 },
  { food: 'Kartoffelsalat', co2e: 1.18317260060656 },
  { food: 'Cider  4,5 %', co2e: 1.09710131623845 },
  { food: 'Falafel, frost', co2e: 1.72295449880852 },
  { food: 'Biksemad, okse, færdigretter', co2e: 13.2083420004696 },
  { food: 'Biksemad, blandet kød, færdigretter', co2e: 9.41778734916582 },
  { food: 'Grøntsagsbøffer', co2e: 1.24522398246829 },
  { food: 'Forårsruller, grøntsager, færdigretter', co2e: 1.98838428494638 },
  { food: 'Forårsruller, kylling, færdigretter', co2e: 2.24104905151394 },
  { food: 'Forårsruller, oksekød, færdigretter', co2e: 4.13646979670163 },
  {
    food: 'Boller i karry med ris og karrysauce, færdigretter',
    co2e: 1.94111856137399,
  },
  { food: 'Porretærte med bacon, færdigretter', co2e: 1.4606040973718 },
  { food: 'Parisertoast, færdigretter', co2e: 1.8685483094085 },
  { food: 'Kapers', co2e: 1.38591661339535 },
  { food: 'Babymajs', co2e: 0.608987629860214 },
  { food: 'Sorte bønner', co2e: 1.04677598557966 },
  { food: 'Halve ferskner i juice', co2e: 1.70294679718585 },
  { food: 'Marinerede artiskokker', co2e: 3.37736423439743 },
  { food: 'Cornichoner', co2e: 1.57642015664646 },
  { food: 'Hvidløg i olie', co2e: 2.79394506535806 },
  { food: 'Halve pærer i juice', co2e: 1.03703830723386 },
  { food: 'Marinerede grillede peberfrugter', co2e: 2.88981693979599 },
  { food: 'Tahin, sesampasta', co2e: 4.08106612423719 },
  { food: 'Soltørrede tomater', co2e: 1.94574370911027 },
  { food: 'Røde linser, tørrede', co2e: 1.77909292206453 },
  { food: 'Ajvar, relish', co2e: 2.48647785467781 },
  { food: 'Vegansk bønnepostej', co2e: 1.71628885325964 },
  { food: 'Plantepostej, ærteprotein og svamp', co2e: 0.782207079796504 },
  { food: 'Chilli cheese tops', co2e: 1.87488122061209 },
  { food: 'Mozarella sticks', co2e: 2.91554093488069 },
  { food: 'Chili con carne, færdigretter', co2e: 21.0734854758752 },
  { food: 'Vegansk boller, sojabaseret', co2e: 0.862358811638119 },
  { food: 'Veganske schnitzler, sojabaseret', co2e: 1.78222797206406 },
  { food: 'Vegansk burgere, sojabaseret', co2e: 0.852078905841042 },
  { food: 'Vegansk fars, plantefars, ærtebaseret', co2e: 0.607894023953804 },
  { food: 'Veganske pølser, sojabaseret', co2e: 1.62794575397174 },
  { food: 'Veganske nuggets, sojabaseret', co2e: 2.04795918390745 },
  { food: 'Vegansk pulled beans', co2e: 2.20591954232843 },
  { food: 'Pulled pork', co2e: 3.68046464660369 },
  { food: 'Pulled beef', co2e: 38.2219594225335 },
  { food: 'Vegansk chorizo', co2e: 1.84408022670597 },
  { food: 'Risnudler', co2e: 1.40529001007306 },
  { food: 'Jalapenos', co2e: 1.53811374468988 },
  { food: 'Taco shells', co2e: 1.8140732523289 },
  { food: 'Mango chutney', co2e: 2.89536057146074 },
  { food: 'Grøn karrypasta', co2e: 1.9698810335036 },
  { food: 'Nudler, æg', co2e: 1.14994430985313 },
  { food: 'Rispandekager', co2e: 1.84043890366068 },
  { food: 'Vegansk is, havre', co2e: 1.52542569852083 },
  { food: 'Vegansk mayo', co2e: 3.06924938276737 },
  { food: 'Svampeburger', co2e: 1.47462819372082 },
  { food: 'Vegansk pålæg', co2e: 2.33714355681505 },
  { food: 'Vegansk blok', co2e: 0.970793863165578 },
  { food: 'Plantemagarine', co2e: 2.92753970672067 },
  { food: 'Vegansk bacon', co2e: 0.248600168922576 },
  { food: 'Veganske filetstykker', co2e: 2.04038313389074 },
  { food: 'Falafel-fars', co2e: 1.67522414867479 },
  { food: 'Ærtedrik', co2e: 0.484175489519135 },
  { food: 'Portobello-svamp', co2e: 0.357035920369552 },
  { food: 'Madkorn, kamut', co2e: 1.1467840340909 },
  { food: 'Chilisauce', co2e: 1.81746002145854 },
  { food: 'Rødløg', co2e: 0.898870041851737 },
  { food: 'Basilikum, frisk', co2e: 0.295905009822759 },
  { food: 'Basilikum, tørret', co2e: 4.44343347156995 },
  { food: 'Koldskål', co2e: 0.96734679602758 },
  { food: 'Oksekød, lavt fedtindhold', co2e: 35.8632768173843 },
  { food: 'Grillpølser', co2e: 1.81019879472102 },
  { food: 'Æblejuice', co2e: 1.6413942618738 },
  { food: 'Hakket lammekød', co2e: 26.2959447941363 },
  { food: 'Burgerboller', co2e: 0.739255008345281 },
  { food: 'Blåskimmelost, ost', co2e: 2.91554093488069 },
  { food: 'Gedeost, ost', co2e: 2.91554093488069 },
  { food: 'Vegansk ost, revet eller skiver', co2e: 0.995859911337591 },
  { food: 'Samosa, vegetarisk frost', co2e: 1.16803925399089 },
  { food: 'Pålægschokolade', co2e: 5.17923970603665 },
  { food: 'Nutella, nøddecreme', co2e: 3.97096584349091 },
  { food: 'Smoothie, jordbær blåbær', co2e: 2.16467004404154 },
]

export default IndexPage
