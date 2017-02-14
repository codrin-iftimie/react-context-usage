import React from "react";


export default function ExtendDefaults(defaults, children) {
  React.Children.forEach(children, (child) => {
    defaults.forEach((defaultComponent, index) => {
      if (defaultComponent.type === child.type) {
        defaults[index] = <defaultComponent.type {...defaultComponent.props}  {...child.props} />
      }
    });
  })

  return defaults;
}