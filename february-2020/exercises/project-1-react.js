(function() {
  "use strict";

  function SizeSelector(props) {
    function sizeOptions() {
      return props.sizes.map(num => {
        return (
          <option value={num} key={num}>
            {num}
          </option>
        ) 
      })
    }

    function onSizeChange(e) {
      props.handleSizeChange(e.target.value);
    }

    return (
      <div className="field-group">
        <label htmlFor="size-options">Available Size:</label>
        <select defaultValue={props.size} className="sizeOptions" id="size-options" onChange={onSizeChange}>
          { sizeOptions() }
        </select>
      </div>
    )
  }

  function ColorSelector(props) {

    function onColorChange(e) {
      props.handleColorChange(e.target.value);
    }

    return (
      <div className="field-group">
        <label htmlFor="color-options">Available Color:</label>
        <select defaultValue={props.color} className="colorOptions" id="color-options" onChange={onColorChange}>
          { colorOptions() }
        </select>
      </div>
    )
    function colorOptions() {
      return props.colors.map(name => {
        return (
          <option value={name} key={name}>
            {name}
          </option>
        ) 
      })
    }
  }
  
  function ProductImage(props) {
    return <img src={`../../../assets/${props.color}.jpg`} alt='product-image' />
  }
  

  function ProductCustomizer(props) {
    const [size, setSize] = React.useState(9.5);
    const [sizes, setSizes] = React.useState(window.Inventory.allSizes);
    const [color, setColor] = React.useState("red");
    const [colors, setColors] = React.useState(window.Inventory.allColors);

    function handleSizeChange(selectedSize) {
      let availableColors = window.Inventory.bySize[selectedSize];
      setColors(availableColors);

      if (availableColors.indexOf(color) === -1) {
        setColor(availableColors[0])
      }
    }

    function handleColorChange(selectedColor) {
      let availableSizes = window.Inventory.byColor[selectedColor];
      setColor(selectedColor);
      setSizes(availableSizes);

      if (availableSizes.indexOf(size) === -1) {
        setSize(availableSizes[0]);
      }
    }

    return (
      <div className='customizer'>
        <div className='product-image'>
          <ProductImage color={color}/>
        </div>
        <div className="selectors">	
          <SizeSelector size={size} sizes={sizes} handleSizeChange={handleSizeChange}/>
          <ColorSelector color={color} colors={colors} handleColorChange={handleColorChange}/>
        </div>	
      </div>
    ); 
  }

  ReactDOM.render(
    <ProductCustomizer />, document.getElementById('react-root')
  );
})();
