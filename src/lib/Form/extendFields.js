import React from "react";


export default function extendFields(defaults, children) {
  React.Children.forEach(children, (child) => {
    defaults.forEach((defaultComponent, index) => {
      if (defaultComponent.fieldName === child.fieldName) {
        defaults[index] = <defaultComponent.type {...defaultComponent.props}  {...child.props} />
      }
    });
  })
  return defaults;
}
