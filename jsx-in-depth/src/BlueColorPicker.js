import React from "react";

const MyComponents = {
  ColorPicker: function ColorPicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  },
  NumberPicker: function NumberPicker(props) {
    return <div>Imagine a {props.number} number here </div>;
  },
};

function BlueColorPicker() {
  console.log(typeof MyComponents);
  return (
    <div>
      <MyComponents.ColorPicker color="blue" />
      <MyComponents.NumberPicker number="3" />
    </div>
  );
}

export default BlueColorPicker;
